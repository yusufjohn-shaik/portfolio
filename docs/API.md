# API Reference

Base URL: `http://localhost:5000/api`

---

## Health

```
GET /api/health
```

**Response**
```json
{ "status": "ok", "message": "Server is running" }
```

---

## Contact

### Submit message

```
POST /api/contact/
Content-Type: application/json
```

**Body**
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email)",
  "message": "string (required, 10–2000 chars)"
}
```

**Response 200**
```json
{ "success": true, "message": "Message received." }
```

**Response 422**
```json
{ "success": false, "message": "Validation failed", "errors": ["..."] }
```

---

### Get all messages

```
GET /api/contact/
```

**Response**
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "...", "email": "...", "message": "...", "created_at": "..." }
  ]
}
```

---

## GitHub

### Profile

```
GET /api/github/profile
```

**Response**
```json
{
  "success": true,
  "data": {
    "login": "yusufjohn-shaik",
    "name": "Shaik Yusuf John",
    "public_repos": 5,
    "followers": 0,
    "html_url": "https://github.com/yusufjohn-shaik"
  }
}
```

### Repositories

```
GET /api/github/repos
```

**Response**
```json
{
  "success": true,
  "data": [
    { "name": "...", "description": "...", "url": "...", "stars": 0, "language": "Python" }
  ]
}
```

---

## LeetCode

### Stats

```
GET /api/leetcode/stats
```

**Response**
```json
{
  "success": true,
  "data": {
    "totalSolved": 80,
    "easySolved": 40,
    "mediumSolved": 35,
    "hardSolved": 5,
    "ranking": 500000
  }
}
```

---

## Projects

### All projects

```
GET /api/projects/
```

### Single project

```
GET /api/projects/:slug
```

---

## Analytics

### Track page view

```
POST /api/analytics/track
Content-Type: application/json

{ "path": "/projects" }
```

### View counts

```
GET /api/analytics/counts
```

---

## Error Format

All errors follow this structure:

```json
{
  "success": false,
  "message": "Human-readable error",
  "errors": ["optional", "list", "of", "validation errors"]
}
```
