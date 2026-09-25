# Lead Tracker

A simple full-stack Lead Tracker application for creating & managing leads.

The application allows users to:

- Create leads
- View all leads
- Search leads
- Update lead status

## Tech Stack

**Frontend**
- React
- TypeScript
- Vite
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Deployment**
- Vercel
- MongoDB Atlas

---

## Architecture

The application follows a simple client-server architecture:

```text
React + TypeScript
       │
       │ REST API
       ▼
Node.js + Express
       │
       │ Mongoose
       ▼
MongoDB Atlas
```

### Project Structure

```text
lead-tracker/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── types/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       └── routes/
│
├── package.json
└── README.md
```

The backend uses standard distinction for functionalities:

- **Routes** — API endpoints
- **Controllers** — Lead operations
- **Middleware** — Validation, sanitization
- **Models** — MongoDB schema and data structure

---

## API

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/leads` | Create a lead |
| GET | `/api/leads` | List leads |
| GET | `/api/leads?search=laxmi` | Search leads |
| GET | `/api/leads/:id` | Get a lead |
| PATCH | `/api/leads/:id/status` | Update status |

Supported statuses:

```text
"New Lead"
"Contacted"
"Qualified"
"Not Interested"
"Closed Won"
"Rejected";
```

---

## Local Setup

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone <repository-url>
cd lead-tracker
```

### 2. Install dependencies

```bash
npm install

cd frontend
npm install

cd ../backend
npm install

cd ..
```

### 3. Configure environment variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start the application

From the root directory:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

The backend runs on:

```text
http://localhost:5000
```

---

## Deployment

The frontend and backend are deployed as separate Vercel projects from the same repository.

```text
GitHub Repository
      │
      ├── frontend → Vercel
      │
      └── backend  → Vercel
                         │
                         ▼
                    MongoDB Atlas
```

### Backend

Vercel project root:

```text
backend
```

Production environment variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
FRONTEND_URL=your_frontend_url
```

### Frontend

Vercel project root:

```text
frontend
```

Production environment variable:

```env
VITE_API_URL=your_backend_api_url/api
```

MongoDB Atlas network access is configured to allow the deployed backend to connect.

---

## Validation & Error Handling

The backend includes basic validation and security measures:

- Required field validation
- Email validation
- Field length limits
- Allowed status validation
- MongoDB ObjectId validation
- Unexpected field rejection
- Search input sanitization
- Centralized error handling
- CORS configuration

---

## Trade-offs

### MongoDB

MongoDB was chosen because the lead data has a simple document structure and does not require complex relational queries.

### REST API

REST was used because the assignment only requires a small number of straightforward operations. GraphQL would add unnecessary complexity for this scope.

### No Authentication

Authentication was not implemented because it was outside the assignment requirements.

### No Pagination

Pagination was not added since the assignment is focused on basic lead management & not dealing with large dataset.

### Single Lead Controller

Lead operations are kept in one controller because there is currently only one main resource. For a larger application, controllers could be split by domain/resource.

---

## Future Improvements

If the application were extended further, I would consider:

- Authentication and authorization
- Pagination
- Advanced filtering
- Lead details and activity history
- Status change history
- Automated frontend and backend tests
- Database indexing and query optimization
- Logging and monitoring

---

## Scope

The implementation focuses on the requested assignment requirements:

- Create Lead
- List Leads
- Search Leads
- Update Lead Status

The project currently focuses on the given requirements & is open & scalable for additional implementations & integrations.