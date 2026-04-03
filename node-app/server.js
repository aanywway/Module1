const express = require('express'); // импортируем модуль express
const app = express(); // присваиваем переменной app модуль express
const PORT = process.env.PORT || 3000; // спросить про это!
app.get('/', (request, response) => {
    response.send('Hello World!');
});
app.get('/info', (request, response) => {
    response.send(`This is info and it's empty, so get outta here!`)
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))