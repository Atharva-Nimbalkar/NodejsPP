const http= require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    // res.statusCode = 200;//many status code 
    res.setHeader('Content-Type','text/html')
    console.log(req.url);//request object
    if(req.url=='/'){
        res.statusCode=200;
        const data  = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url=="/aan"){
        res.statusCode=200;
        res.end('<h1>Patience is a skill</h1>')
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> This is journey njoy it </h1> <p>always use backtick to use dollor sym </p>');
    }
    else{
        res.statusCode=404;
        res.end('<h1>Oops! Page not found</h1>')
    }

})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port} `);//use backtice
})