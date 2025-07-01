/**
 * @desc ExpressJS 로 Rest API 만들기
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>'); // send 는 ExpressJS 메서드이다.
});

app.get('/post', (req, res) => {
    res.send('<h1>post page</h1>'); // send 는 ExpressJS 메서드이다.
});

app.get('/cat', (req, res) => {
    res.send('<h1>cat page</h1>'); // send 는 ExpressJS 메서드이다.
});

// app.post()
// app.put()
// app.patch()
// app.delete()

// 미들웨어
app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1>'); // send 는 ExpressJS 메서드이다.
});

const port = 3000;

app.listen(port, () => {
    console.log(`server runing on [http://localhost:${port}]`);
});
