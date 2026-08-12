## Project: Project Camp — Project Management Platform

**One-line summary:** A full-stack project management platform with role-based access control, hierarchical task tracking, and team collaboration, built with a Node.js/Express/MongoDB backend and a React 19 frontend.

**Type:** Full-stack web application (Backend REST API + Frontend SPA)

**Repository:** github.com/git-aftab/project_management_app

### Backend Stack
- Runtime: Node.js, Framework: Express.js
- Database: MongoDB with Mongoose ODM
- Auth: JWT (access + refresh tokens)
- File Upload: Multer
- Email: Nodemailer (verification, password reset)
- Validation: Express Validator
- Security: bcrypt, helmet, cors

### Frontend Stack
- React 19 with React Router v7
- TanStack React Query v5 (server state management)
- Axios (API calls)
- Vite 6 (build tool)
- lucide-react (icons)
- ESLint for code quality

### Key Features
- JWT authentication with refresh tokens and email verification
- Role-Based Access Control (RBAC) — three-tier: Admin, Project Admin, Member
- Full project lifecycle: create, update, delete, member management
- Hierarchical task system with subtasks, assignment, and status tracking (Todo/In Progress/Done)
- File attachments on tasks
- Project notes with admin-only permissions
- Granular permission matrix distinguishing task, subtask, and note access per role

### Architecture Highlights
- MVC-style structure: separated controllers, models, routes, middleware, and config
- Permission system enforced at the route/controller level based on project-scoped roles
- RESTful API versioned under `/api/v1`

### Notable Design Decisions
- Three-tier RBAC scoped per-project (not global), allowing a user to hold different roles across different projects
- Subtask status updates allowed for all members, but subtask creation/deletion restricted to Admin/Project Admin — separates "doing the work" from "structuring the work"
- Refresh token pattern used alongside short-lived access tokens for session security

**Support/Contact:** aftabdev18dev@gmail.com