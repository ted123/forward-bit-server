// const { spawnSync} = require('child_process');
// const installBvm = spawnSync('npm', ['i', '-g', '@teambit/bvm']);
// const installBit = spawnSync('bvm', ['install']);
// const start = spawnSync('bit', ['start']);
// console.error('error bvm', installBvm.error);
// console.log('stdout bvm', installBvm.stdout);
// console.error('stderr bvm', installBvm.stderr);
// console.error('error bit', installBit.error);
// console.log('stdout bit', installBit.stdout);
// console.error('stderr bit', installBit.stderr);
// console.error('error start', start.error);
// console.log('stdout start', start.stdout);
// console.error('stderr start', start.stderr);

const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});