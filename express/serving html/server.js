const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('HTML serving server');
});
// for the server to serve the HTML file, we need to use the express.static middleware and pass the public directory as an argument so the public folder files can be accesed directly from the browser
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});