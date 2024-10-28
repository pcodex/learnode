const myfortune = require('./fortune')

const authorname = {
    name:'Prabhu\'s'
}
exports.home = (req,res) => {
    
    res.render('home',{fortune:myfortune.getFortune(),authorname})
}

exports.about = (req,res) => {
    const reqobj = {

    aparams : req.params,
    aurl : req.url,
    ahostname : req.hostname,
    apath : req.path,
    aroute : req.route,
    aip : req.ip,
    aproto : req.protocol
}
    res.render('about',{reqobj,authorname})
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