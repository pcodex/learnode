const express = require('express')
const myfortune = require('./libs/fortune')

const app = express()

const portnum = process.env.PORT || 3500

// const fortunes = [
//     'Seize the day',
//     'Do one thing well',
//     'Have faith',
//     'All will be well',
//     'Keep at it'
// ]


var exphandlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', exphandlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => {
    res.type('text/html')
    //res.send("<h1>Home Sweet Home</h1>") 
    const afortune = myfortune.getFortune()
    console.log(afortune)
    res.render('home',{fortune:afortune})
})

app.get('/about', (req,res) => {
    res.type('text/html')
    //res.send("<b> ABOUT </b>")
    res.render('about')
})
app.use((req,res) => {
    res.status(404)
    //res.type('text/plain')
    //res.send('404 Page not found')
    res.render('404')
})


app.use((err,req,res,next) => {
    //res.type('text/plain')
    res.status(500)
    //res.send('500 Server error')
    res.render('500')
})

app.listen(portnum, () => {
    console.log('Server listening')
})