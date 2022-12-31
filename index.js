const http = require('http')

const fs = require('fs')
const { type } = require('os')


// sync
const server = http.createServer((req, res) => {
    //writing file 
    let date =new Date()
    let timeStamp = date.getTime()
    fs.writeFileSync(`${timeStamp}.txt`, `${date}`, 'utf-8')
    let data = fs.readFileSync(`${timeStamp}.txt`, 'utf-8')
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(`${data}`)

})

server.listen(8000, () => { console.log("sever is running on 8000") })