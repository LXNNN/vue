let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

router.get('/project',function (req,res) {
    let data = Mock.mock({
        'code':200,
        'data|1-9':[{
            'id|+1':1
        }]
    });
    return res.json(data);
})

module.exports = router;