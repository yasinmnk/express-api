
const Joi=require('joi'); 
const express = require("express");

const app = express();
app.use(express.json());
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 4529, name: "course4529",surname:'manka' },
];

// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {

  res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
//post

app.post('/api/courses', (req, res)=>{

  if(result.error)

  //400vbad requeest
  res.status(400).send( result.error)

return;

  const course ={
    id: courses.length +1,
    name:req.body.name
  };
  courses.push(course);
  res.send(course);

});



//PORT

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  const schema={

    name:Joi.string().min(3).required() 

  };
  
  const result = Joi.validate(req.body, schema );
  console.log(result);

  if (!course)
    res.status(404).send("The  course with the given is not found..");

  res.send(course);
});

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`listening on port ${port}.....`));
