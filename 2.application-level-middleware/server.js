import express from 'express';
 
const app = express();
 
app.use((req, res, next) => {
  console.log('Application-level middleware');
  next();
});
 
app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});