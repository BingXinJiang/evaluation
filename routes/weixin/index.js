/**
 * Created by Administrator on 2017/3/28 0028.
 */
var express = require('express'),
    router = express.Router(),
    query = require('../../db/DB'),
    Error = require('../Error');

/* GET weixin page. */
router.get('/', function(req, res, next) {
    res.redirect('/leader');
});
router.get('/commit', function(req, res, next) {
    res.redirect('/leader');
});
router.get('/question', function(req, res, next) {
    res.redirect('/leader');
});
router.get('/resolve', function(req, res, next) {
    res.redirect('/leader');
});
router.get('/leader', function(req, res, next) {
    res.render('weixin');
});

router.post('/commit',function (req,res) {

    var body = req.body;
    var userid=body.name+body.phone, name=body.name, gender=body.gender, age=body.age, phone=body.phone,
        fun=body.fun, industry=body.industry, workplace=body.workplace, birthplace=body.birthplace,
        position=body.position, ques1=body.ques1, ques2=body.ques2, ques3=body.ques3, ques4=body.ques4,
        ques5=body.ques5, ques6=body.ques6, ques7=body.ques7, ques8=body.ques8, ques9=body.ques9,
        ques10=body.ques10, ques11=body.ques11, ques12=body.ques12, ques13=body.ques13, ques14=body.ques14,
        ques15=body.ques15, ques16=body.ques16, ques17=body.ques17, ques18=body.ques18, ques19=body.ques19,
        ques20=body.ques20, ques21=body.ques21, ques22=body.ques22, ques23=body.ques23, ques24=body.ques24,
        ques25=body.ques25, ques26=body.ques26, ques27=body.ques27, ques28=body.ques28, ques29=body.ques29,
        ques30=body.ques30, ques31=body.ques31, ques32=body.ques32;


    var into_sql = "REPLACE INTO evaluation (" +
        "userid,name,gender,age,phone,fun,industry,workplace,birthplace,position," +
        "ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10," +
        "ques11,ques12,ques13,ques14,ques15,ques16,ques17,ques18,ques19,ques20," +
        "ques21,ques22,ques23,ques24,ques25,ques26,ques27,ques28,ques29,ques30," +
        "ques31,ques32) " +
        "VALUES('"+userid+"','"+name+"','"+gender+"','"+age+"','"+phone+"','"+fun+"'," +
        "'"+industry+"','"+workplace+"','"+birthplace+"','"+position+"'," +
        ques1+","+ques2+","+ques3+","+ques4+","+ques5+","+ques6+","+ques7+","+ques8+","+ques9+"," +
        ques10+","+ques11+","+ques12+","+ques13+","+ques14+","+ques15+","+ques16+","+ques17+"," +
        ques18+","+ques19+","+ques20+","+ques21+","+ques22+","+ques23+","+ques24+","+ques25+"," +
        ques26+","+ques27+","+ques28+","+ques29+","+ques30+","+ques31+","+ques32+")";

    query(into_sql,function(qerr,valls,fields){
        if(qerr){
            Error.responseDataErr(res);
        }else{
            var response = {
                status:1,
                data:{
                    msg:'success'
                }
            }
            res.json(response);
        }
    })

})

module.exports = router;