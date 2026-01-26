# API Contracts: Portfolio Website

## Overview

This document defines the API contracts for the portfolio website feature. APIs will be added as the implementation progresses.

## Contact Form API

### POST /api/contact

Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "projectType": "string" // optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

## Portfolio Projects API (Future)

### GET /api/projects

Retrieve all portfolio projects.

**Query Parameters:**
- `category` (optional): Filter by project category
- `limit` (optional): Limit number of results
- `offset` (optional): Pagination offset

**Response:**
```json
{
  "projects": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "category": "string",
      "images": ["string"],
      "tools": ["string"],
      "outcomes": "string",
      "date": "string"
    }
  ],
  "total": "number"
}
```

### GET /api/projects/:id

Retrieve a specific portfolio project.

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "images": ["string"],
  "tools": ["string"],
  "outcomes": "string",
  "date": "string",
  "content": "string" // Full project content
}
```

