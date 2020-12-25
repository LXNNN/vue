let express = require('express');
let app = express();
let Mock = require('mockjs');
let router = express.Router();

app.get('/',function (req,res) {
    res.send(`<h1>Hello, World</h1>`)
});

router.use('/test',require('./test'));

app.use('/api',router)

app.listen(8081,function(){
    console.log('服务器已启动')
})