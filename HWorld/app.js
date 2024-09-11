const http = require('http')
const portnum = process.env.PORT || 3000

const server = http.createServer((req,res) => {

    const path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()

    switch(path){
        case '':
            res.writeHead(200, {'Content-Type':'text/plain'})
            res.end('Hello World')
            break
        case '/about':
            res.writeHead(200, {'Content-Type':'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(200, {'Content-Type':'text/plain'})
            res.end('Not Found')
            break
    }

    
})

server.listen(portnum, () => {
    console.log('Server is running')
})

