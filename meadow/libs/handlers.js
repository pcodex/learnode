const myfortune = require('./fortune')

exports.home = (req,res) => {
    res.render('home',{fortune:myfortune.getFortune()})
}

exports.about = (req,res) => {
    res.render('about')
}

exports.headers = (req,res) => {

         const hdrs = Object.entries(req.headers)
                            .map(([key, value]) => `${key} : ${value}` )  
                       res.send(hdrs.join('\n'))
  }



exports.notFound = (req,res) => {
    res.render('404')
}

exports.serverErr = (err,req,res,next) => {
    res.render('500')
}