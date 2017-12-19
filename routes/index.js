var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
		var index=req.params.id;
	}
	else{
		var index='index';
		}
	Themas.findOne({'url':index},function(err,ttext){
		if(!ttext){
			ttext={
				name:'Добро пожаловать на сайт',
				body:'Извините, страница не найдена',
			}
		}
	});
  res.render('index', { title: index });
});

router.post('/reg',function(req,res,next){
	console.log(req.body.login);
	console.log(req.body.email);
	console.log(req.body.pass);
	res.redirect('/');
});
router.get('/add/:url/:name/:body?',function(req,res,next){
	if(req.params.name){
		var p_name=req.params.name;
	}else{
		var p_name='default';
	}
	if(req.params.url){
		var p_url=req.params.url;
	}else{
		var p_url='index';
	}
	if(req.params.body){
		var p_body=req.params.body;
	}else{
		var p_body='default';
	}
	var themas=new Themas({
		name: p_name,
		url: p_url,
		body: p_body
	});
	themas.save(function(err, user, affected){
		console.log('ok');
	});
});
module.exports = router;
