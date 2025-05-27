import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Hello from Jenkins CI/CD!'));
app.listen(3000, () => console.log('Server running on port 3000'));


//85cd2df2226de9ac7bf1013b0008ff2fe7982cee