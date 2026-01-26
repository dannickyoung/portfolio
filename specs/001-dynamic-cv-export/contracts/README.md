# API Contracts: Dynamic CV with A4 Export

**Feature Branch**: `001-dynamic-cv-export`  
**Date**: 2026-01-24

## Overview

This feature is primarily client-side with minimal backend requirements. The Express server serves static files and provides basic health check endpoints.

---

## Endpoints

### GET /api/health

Health check endpoint for monitoring.

**Request**: None

**Response** (200 OK):
```json
{
  "status": "ok",
  "uptime": 12345.678
}
```

---

### GET /api/hello

Test endpoint (exists from initial setup).

**Request**: None

**Response** (200 OK):
```json
{
  "message": "Hello from Express backend! 🚀",
  "timestamp": "2026-01-24T12:00:00.000Z"
}
```

---

## Static File Serving

In production, the server serves the built client files:

- **GET /** → `client/dist/index.html`
- **GET /assets/** → `client/dist/assets/`

---

## No Additional APIs Required

The CV feature does not require additional backend APIs because:

1. **Static Content**: CV data is hardcoded in the frontend
2. **Client-Side Export**: JPG generation uses html2canvas in the browser
3. **No Database**: No persistence layer needed
4. **No Authentication**: Public CV, no user accounts

---

## Future Considerations

If the feature expands, these endpoints might be needed:

| Endpoint | Use Case |
|----------|----------|
| `POST /api/export` | Server-side rendering (not needed now) |
| `GET /api/cv` | Dynamic CV data from database (not needed now) |
| `POST /api/analytics` | Track downloads (optional enhancement) |

For now, the minimal server setup is sufficient.

