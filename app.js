var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');

var app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://sudarshan_personal:Sudarshan@97@cluster0-n66st.mongodb.net/test?retryWrites=true', {
    urlencoded: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.get('/', function (req, res) {
    res.send('Hello! Welcome!');
});

app.post('/', function (req, res) {
    var name = req.body.name;
    var dob = req.body.dob;
    console.log(name);
    console.log(dob);
});

app.get('/user', function (req, res) {
    res.send('welcome to user route');
});

app.post('/user', function (req, res) {
    var name = req.body.name;
    var dob = req.body.dob;
    var phone = req.body.phone;
    var email = req.body.email;
    var branch = req.body.branch;
    var events = req.body.eventName;
    console.log(name);
    console.log(dob);
    console.log(phone);
    console.log(email);
    console.log(branch);
    console.log(events);

    var newUser = new User({
        name:name,
        dob:dob,
        email:email,
        branch:branch,
        events:events,
        phone:phone
    });

    User.create(newUser, function(err,savedData){
        if(err){
            res.send(err);
        }
        else{
            console.log(savedData);
        }
    });
});

app.get('/home', function (req, res) {
    res.send('home');
});

app.get('/register', function (req, res) {
    res.render('index');
})

app.listen(3000, 'localhost', function () {
    console.log('server started...');
})