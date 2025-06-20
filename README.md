  Task Manager (Local Deployment)

A full-stack task management app built using:

- **Frontend**: Next.js (React) + Tailwind CSS
- **Backend**: Express + TypeORM + PostgreSQL

---

##   Local Setup Instructions

###  Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

> The app will run at: [http://localhost:3000](http://localhost:3000)

#### Configure `.env.local` in `/frontend`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

###  Backend Setup (Express + TypeORM + PostgreSQL)

```bash
cd backend
npm install
npm start
```

> Backend server will run at: [http://localhost:3001](http://localhost:3001)

---

## 📁 Folder Structure

```
/task-manager
├── frontend    # Next.js frontend
├── backend     # Express backend
└── README.md
```

## 👨‍💻 Author

**Harshith**  
🔗 [GitHub: @Harshith-alt](https://github.com/Harshith-alt)
