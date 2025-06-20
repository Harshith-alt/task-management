Technical Assignment Submission Document

Company: Restomart
Role: Technical Intern
Candidate: Makka Harshith Kumar
Project: Task Manager (No Auth)

Objective
Build a simple full-stack Task Manager web application with:
• A RESTful API backend using Node.js, Express.js, TypeORM, and PostgreSQL
• A minimal functional frontend using Next.js (React)
No authentication or user management is required.

🛠 Tech Stack
Layer Technologies Used
Backend Node.js, Express.js, TypeORM, PostgreSQL (local or Docker)
Frontend Next.js (React), Tailwind CSS / plain CSS (no UI library)
Optional Docker Compose (for DB), .env setup for config

Task Specification
1. Backend (API)
Database Model (Task Entity)
Field Type Required
id UUID (Primary Key) Yes
title String Yes
description Text No
status Enum: todo, in_progress, done Yes
dueDate Date No

Field Type Required
createdAt Timestamp Yes
updatedAt Timestamp Yes

API Endpoints
Method Endpoint Description
GET /tasks List all tasks
POST /tasks Create a new task
PUT /tasks/:id Update a task
DELETE /tasks/:id Delete a task
You can use either a local PostgreSQL database or in-memory storage. Seed data optional.

2. Frontend (Next.js)
Pages / Views
Page Functionality
/home Display a list of all tasks
/add Form to create a new task
/edit/:id Form (reuse) to update an existing task
/delete task Button or icon on each task card or row.
UI Requirements
• Client-side data fetching using hooks (no SSR)
• State management with React Hooks
• Clean minimal styling using plain CSS or Tailwind
• No use of external component libraries (e.g., MUI, Chakra)
Actions
• Add Task

• Edit Task
• Delete Task
Folder Structure:
/task-manager
├── frontend React (Next.js) frontend
├── backend Express backend + PostgreSQL DB
└── README.md
