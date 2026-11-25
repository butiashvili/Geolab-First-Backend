const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
});

const projects = [
  { id: 1, name: 'პორტფოლიო', description: 'პირადი პორტფოლიოს ვებსაიტი' },
  { id: 2, name: 'Task Manager', description: 'დავალებების მართვის აპლიკაცია' },
  { id: 3, name: 'Online Store', description: 'ონლაინ მაღაზიის პროექტი' },
];

app.get('/about', (req, res) => {
  res.send('ჩემი ბექენდ სერვერი მუშაობს');
});

app.get('/projects', (req, res) => {
  res.status(200).json(projects);
});

app.get('/user', (req, res) => {
  res.status(200).json({
    name: 'Nika',
    age: 17,
    position: 'Starter Developer',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});