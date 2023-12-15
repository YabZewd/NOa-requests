const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login',{});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});