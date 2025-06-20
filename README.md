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

#### Create `.env` file in `/backend`:

```env
DATABASE_URL=postgres://postgres:yourpass@localhost:5432/taskdb
PORT=3001
```

---

### Run PostgreSQL Locally (Optional with Docker)

```bash
docker run --name taskdb -e POSTGRES_PASSWORD=yourpass -e POSTGRES_DB=taskdb -p 5432:5432 -d postgres
```

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
