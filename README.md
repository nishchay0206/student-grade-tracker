# Student Grade Tracker

## Setup Instructions
1. Clone this repo
2. Run `npm install` in both frontend and backend
3. Create MySQL DB with `grades` table:
```sql
CREATE TABLE grades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50),
  subject VARCHAR(100),
  grade FLOAT
);
```
4. Start backend: `node server.js`
5. Start frontend: `npm start`
6. Go to `http://localhost:3000`
