const http= require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);//request object
    res.statusCode = 200;//many status code 
    res.setHeader('Content-Type','text/html')
    res.end('<h1> This is journey njoy it </h1> <p>always use backtick to use dollor sym </p>');
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port} `);//use backtice
})