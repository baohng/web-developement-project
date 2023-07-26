import express from 'express';
const app = express();
const port = 3000;

//GET HOMEPAGE
app.get('/', (req,res) => {
  res.send("Hello user!");
})

//GET ABOUT
app.get('/about', (req,res) => {
  res.send("<h1>About Me</h1>");
})
//GET CONTACT
app.get('/contact', (req,res) => {
  res.send("<h1>Contact</h1>");
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
})