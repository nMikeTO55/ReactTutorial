const http = require('http');

const server = http.createServer((request, response)=>{

  const book = {
    author:'Mike Parish',
    title:'My Life'
  };

  response.setHeader('Content-Type', 'application/json')
  response.write(JSON.stringify(book));
  response.end();
});

server.listen(9000);