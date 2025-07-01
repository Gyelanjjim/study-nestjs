/**
 * @desc nodeJS 서버 만들기 & Path 별로 다른 응답
 */
const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 3000;
const log = {
    info: (v) => {
        console.log(v);
    },
};

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        log.info('success - go to home page');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Home page</h1>'); // send 는 ExpressJS 메서드이다.
        return;
    } else if (path === '/post') {
        log.info('success - go to post page');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>post page</h1>'); // send 는 ExpressJS 메서드이다.
        return;
    } else if (path === '/cat') {
        log.info('success - go to cat page');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>cat page</h1>'); // send 는 ExpressJS 메서드이다.
        return;
    } else {
        log.info('fail');
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>Not Found</h1>'); // send 는 ExpressJS 메서드이다.
        return;
    }
});

server.listen(port, host, () => {
    console.log(`server runing on [http://${host}:${port}]`);
});
