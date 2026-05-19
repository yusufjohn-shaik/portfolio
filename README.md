# Shaik Yusuf John — Portfolio

Personal portfolio website built with React (frontend) and Flask (backend).

## Stack

**Frontend** — React, Tailwind CSS, Framer Motion, Vite  
**Backend** — Flask, SQLAlchemy, Flask-Mail  
**Database** — SQLite (dev) / PostgreSQL (prod)  
**Deployment** — Vercel (frontend), Render (backend)

---

## Project Structure

```
portfolio-master/
├── client/          # React frontend
├── server/          # Flask backend
├── docs/            # Documentation
├── vercel.json
└── README.md
```

---

## Getting Started

### Frontend

```bash
cd client
npm install
npm run dev
```

Runs at `http://localhost:3000`

### Backend

```bash
cd server
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env           # fill in your values
python app.py
```

Runs at `http://localhost:5000`

---

## Environment Variables

### client/.env

```
VITE_API_URL=http://localhost:5000/api
VITE_GITHUB_USERNAME=yusufjohn-shaik
VITE_GITHUB_TOKEN=your_token
```

### server/.env

```
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///portfolio.db
MAIL_USERNAME=yusufjohn252007@gmail.com
MAIL_PASSWORD=your-app-password
GITHUB_USERNAME=yusufjohn-shaik
LEETCODE_USERNAME=shaikyusufjohn
```

---

## Running Tests

```bash
cd server
pytest tests/
```

---

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full deployment steps.

---

## Contact

- GitHub: [github.com/yusufjohn-shaik](https://github.com/yusufjohn-shaik)
- LeetCode: [leetcode.com/u/shaikyusufjohn](https://leetcode.com/u/shaikyusufjohn/)
- Email: yusufjohn252007@gmail.com
