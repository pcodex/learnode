const express = require('express')
const myhandlers = require('./libs/handlers')

const app = express()

const portnum = process.env.PORT || 3500


var exphandlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', exphandlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))


app.get('/', myhandlers.home)

app.get('/headers', myhandlers.headers)

app.get('/about', myhandlers.about)

app.use(myhandlers.notFound)


app.use(myhandlers.serverErr)

app.listen(portnum, () => {
    console.log('Server listening')
})