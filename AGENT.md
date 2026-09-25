# AGENT.md

## 1. AI Tools Used

### ChatGPT

Used as a development assistant for:

- Requirement analysis
- Functional and edge-case analysis
- Architecture and API planning
- UI/UX review
- Debugging
- Testing guidance
- Code review

### AI-assisted IDE

Used for:

- Code suggestions and autocomplete
- Small code improvements
- Debugging suggestions
- Refactoring suggestions

AI tools were used during different stages of development. The generated suggestions were reviewed and adapted before being included in the project.

---

## 2. Prompts Used During Development

The following are the main prompts used while developing the application.

### Prompt 1 — Requirement Analysis

```text
Analyse this Lead Tracker assignment as a junior full stack developer.

Requirements:
- Create Lead
- List Leads
- Search Leads
- Update Lead Status

Break the requirements into:
- Functional requirements
- User flow
- Important validations
- Edge cases
- Frontend responsibilities
- Backend responsibilities

Do not write the application code. Focus on understanding what needs to be built.
```

**Purpose:** Used to understand the assignment and break it into smaller development tasks.

---

### Prompt 2 — Architecture & API Planning

```text
Suggest a simple full stack architecture for this Lead Tracker application.

The application needs to create, list, search and update leads.

Explain:
- Frontend structure
- Backend structure
- Database model
- REST API endpoints
- Data flow
- Basic error handling

Keep the solution simple and appropriate for a junior developer assignment. Avoid unnecessary complexity.
```

**Purpose:** Used to plan the application structure and API responsibilities before implementation.

---

### Prompt 3 — Functional & Edge-Case Analysis

```text
Review the functional requirements of my Lead Tracker application.

For Create Lead, List Leads, Search Leads and Update Lead Status, identify:
- Expected behaviour
- Input validation
- Empty states
- Invalid input
- Missing records
- API failures
- Other realistic edge cases

Do not suggest features outside the assignment.

Give me a practical checklist that I can use while implementing and testing.
```

**Purpose:** Used to identify functional cases that should be handled beyond the basic happy path.

---

### Prompt 4 — UI/UX Review

```text
Review the UI of a simple Lead Tracker application.

The user should be able to:
- View leads
- Search leads
- Create a lead
- Update lead status

Suggest practical improvements for:
- Form layout
- Search
- Buttons and interactions
- Loading states
- Empty states
- Error messages
- Status display
- Responsive behaviour

Keep the UI simple, clean and appropriate for a junior developer assignment.
```

**Purpose:** Used to review usability and improve the interface without introducing unnecessary complexity.

---

### Prompt 5 — Debugging & Code Review

```text
Review the following implementation for a Lead Tracker application.

Look specifically for:
- Functional bugs
- Incorrect API handling
- Validation issues
- Error handling
- React issues
- Backend issues
- Duplicate or unnecessary code

Do not rewrite the application. Identify the problem, explain why it occurs, and suggest a focused fix.
```

**Purpose:** Used when reviewing implementation issues and debugging specific problems.

---

### Prompt 6 — Testing Review

```text
Create a practical test checklist for my Lead Tracker application.

Cover:
- Creating a valid lead
- Validation failures
- Listing leads
- Searching leads
- No search results
- Updating lead status
- Invalid status
- Lead not found
- API/server failure

Keep the checklist focused on the assignment requirements and realistic edge cases.
```

**Purpose:** Used to verify the implemented functionality before submission.

---

## 3. AI-Generated / AI-Assisted Sections

AI was used for initial suggestions, small code snippets, and review assistance in the following areas:

| File / Area | AI Assistance |
|---|---|
| `README.md` | Initial documentation structure and setup/deployment checklist |
| `frontend/src/components/LeadForm.*` | Form structure, validation suggestions, and UI improvements |
| `frontend/src/pages/LeadListingPage.*` | Lead listing, search/filtering approach, and empty-state handling |
| `frontend/src/components/Sidebar.*` | Status update flow and validation suggestions |
| `backend/src/middleware/` | Request validation and input-processing suggestions |
| `backend/src/routes/` & `backend/src/controllers/` | API structure and request/response handling suggestions |
| `backend/src/models/Lead.*` | Lead fields, status values, and validation suggestions |
| `frontend/src/index.css` | UI/UX and responsive styling suggestions |
| Testing | Test scenarios, edge cases, and validation checklist |

AI-generated suggestions were reviewed and modified before being incorporated into the application.

---

## 4. Manually Written / Implemented Sections

The final implementation, integration, configuration, and verification were handled manually:

| File / Area | Manual Work |
|---|---|
| `frontend/src/` | Component integration, application flow, API integration, and UI behaviour |
| `frontend/src/components/LeadForm.*` | Final form behaviour, field handling, and validation integration |
| `frontend/src/pages/LeadListingPage.*` | Final lead display, search behaviour, and state handling |
| `frontend/src/services/leadService.*` | Api definitions |
| `backend/src/routes/leadRoutes.js` | Final route definitions for lead CRUD and status updates |
| `backend/src/controllers/` | Final API implementation, validation, and error handling |
| `backend/src/models/Lead.*` | Database model implementation and configuration |
| `backend/src/middleware/` | Final validation and request handling logic |
| `frontend/src/App.css` / `frontend/src/index.css` | Final styling, responsive adjustments, and interaction states |
| `.env` / configuration files | Environment and deployment configuration |
| Tests / Git | Testing, debugging, verification, and Git commit history |
| `README.md` / `AGENT.md` | Final documentation and project-specific decisions |

AI suggestions were modified where required to match the actual application and assignment requirements.

---

## 5. Key Engineering Decisions

### Keep the Architecture Simple

The application uses a straightforward full stack architecture appropriate for the size of the assignment. Additional complexity such as microservices was avoided.

### Separate Frontend and Backend Responsibilities

The frontend handles user interaction and presentation, while the backend handles API requests, validation and database operations.

### Validate Input

Frontend validation is used to provide immediate feedback to users. Backend validation is also applied so that invalid requests are not trusted simply because they originated from the application's UI.

### Use Predefined Lead Statuses

Lead status values are restricted to predefined options to keep the data consistent.

### Handle Common UI States

Loading, empty, success and error states are considered for the main user operations to provide appropriate feedback.

### Use Environment Variables

Environment-specific configuration such as database connection details is kept outside the source code.

### Avoid Unnecessary Complexity

The implementation focuses on the requirements provided in the assignment rather than adding unrelated features or infrastructure.

---

## 6. AI Usage Approach

AI was used iteratively throughout development:

1. Understand the requirements.
2. Break the requirements into smaller tasks.
3. Plan the basic architecture.
4. Implement the functionality.
5. Use AI for specific questions, edge cases or debugging.
6. Review and modify the suggestions.
7. Test the implementation.
8. Perform a final manual review.

The final application was reviewed against the assignment requirements, and the developer remained responsible for the implementation and engineering decisions.