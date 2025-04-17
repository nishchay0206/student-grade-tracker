const db = require('../models/db');

const getGrades = (req, res) => {
  const { studentId } = req.params;
  db.query('SELECT * FROM grades WHERE student_id = ?', [studentId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const addGrade = (req, res) => {
  const { student_id, subject, grade } = req.body;
  db.query('INSERT INTO grades (student_id, subject, grade) VALUES (?, ?, ?)', [student_id, subject, grade], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Grade added');
  });
};

module.exports = { getGrades, addGrade };