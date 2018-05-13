import express from 'express';
import morgan from 'morgan';
import path from 'path';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,'..','client', 'build/static')));

app.get('/', (req,res) => {
  const indexFile = path.join(__dirname, '..', 'client','build','index.html');
  res.sendFile(indexFile)
});

app.get('*', (req,res) => {
  const indexFile = path.join(__dirname, '..', 'client','build','index.html');
  res.sendFile(indexFile)
});



app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
