const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'coure1' },
    { id: 2, name: 'coure2' },
    { id: 3, name: 'coure3' }
]

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    console.log(req.params);
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send(`Course with the ID ${req.params.id} was not found`);
    } else {
        res.send(course)
    }
});

app.post('/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    console.log(result);
    if (error) {
        res.status(400).send(`Bad request: ${error['details'][0]['message']}`);
        return;
    };
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.status(201).send(course);
});

app.put('/course/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send(`Course with the ID ${req.params.id} was not found`);
        return;
    };

    const { error } = validateCourse(req.body);
    console.log(result);
    if (error) {
        res.status(400).send(`Bad request: ${error['details'][0]['message']}`);
        return;
    };

    course.name = req.body.name;
    res.status(200).send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}


const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`listening on port ${port}`));