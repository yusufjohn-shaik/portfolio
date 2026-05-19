# Deployment Guide

## Frontend → Vercel

1. Push the repo to GitHub.

2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.

3. Set the **root directory** to `client`.

4. Set **build command**: `npm run build`  
   Set **output directory**: `dist`

5. Add environment variables in Vercel dashboard:

```
VITE_API_URL=https://your-flask-backend.onrender.com/api
VITE_GITHUB_USERNAME=yusufjohn-shaik
VITE_GITHUB_TOKEN=your_token
```

6. Deploy. Vercel handles HTTPS and CDN automatically.

---

## Backend → Render

1. Go to [render.com](https://render.com) → New → Web Service.

2. Connect your GitHub repo.

3. Set **root directory** to `server`.

4. Set **build command**:
```bash
pip install -r requirements.txt
```

5. Set **start command**:
```bash
gunicorn app:app
```

6. Add environment variables in Render dashboard:

```
SECRET_KEY=your-production-secret-key
DATABASE_URL=postgresql://...   (use Render PostgreSQL)
MAIL_USERNAME=yusufjohn252007@gmail.com
MAIL_PASSWORD=your-gmail-app-password
GITHUB_USERNAME=yusufjohn-shaik
GITHUB_TOKEN=your_token
LEETCODE_USERNAME=shaikyusufjohn
ALLOWED_ORIGINS=https://your-portfolio.vercel.app
FLASK_DEBUG=False
```

7. Deploy.

---

## Gmail App Password (for contact form)

1. Go to your Google Account → Security → 2-Step Verification (enable it).
2. Search for **App Passwords** → Create one for "Mail".
3. Use that 16-character password as `MAIL_PASSWORD`.

---

## Custom Domain (optional)

In Vercel → your project → Settings → Domains → Add your domain.

---

## Database (Production)

For production, use Render's free PostgreSQL add-on.  
Set `DATABASE_URL` to the connection string provided by Render.

SQLAlchemy will auto-create tables on first run via `db.create_all()`.
