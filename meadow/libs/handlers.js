const myfortune = require('./fortune')

exports.home = (req,res) => {
    res.render('home',{fortune:myfortune.getFortune()})
}

exports.about = (req,res) => {
    res.render('about')
}

exports.notFound = (req,res) => {
    res.render('404')
}

exports.serverErr = (err,req,res,next) => {
    res.render('500')
}