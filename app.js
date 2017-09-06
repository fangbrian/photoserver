var express = require('express');
var app = express();
var session = require('client-sessions');
var http = require('http');
var locals = require('./locals');
var _url = require('url');
var request = require('request');
var bodyParser = require('body-parser');
var queryString = require('querystring');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.get('/photos', function(req, res) { 
	res.send({
		"photos" : [ "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/AWEH8SQCHN.jpg",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/SplitShire-2065.jpg",
					"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/JOLX6RBATD.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/07/wild-1921316-1.jpg",
					"https://thumb7.shutterstock.com/display_pic_with_logo/64397/321651011/stock-photo-image-of-wooden-table-in-front-of-abstract-blurred-background-of-resturant-lights-321651011.jpg",
					"http://68.media.tumblr.com/7a03d187ea9ad84964748805caea0ade/tumblr_ove08nIBpB1ta0hnbo1_1280.jpg",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/SplitShire-1165.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/07/p1080530.jpg",	
					"https://thumb1.shutterstock.com/display_pic_with_logo/619663/115679980/stock-photo-bunch-of-flowers-115679980.jpg",
					"http://www.designerspics.com/wp-content/uploads/2014/12/from_kitchen_free_photo.jpg",
					"https://picography.co/wp-content/uploads/2017/08/dark-path.jpg?ch=Width,DPR&auto=compress,format&fit=crop&w=1170&cs=tinysrgb&fit=max&q=40&dpr=2",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/SplitShire-08332.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/06/lion-pack-play-fighting.jpg",
					"https://thumb1.shutterstock.com/display_pic_with_logo/3963953/367937186/stock-photo-underside-panoramic-and-perspective-view-to-steel-blue-glass-high-rise-building-skyscrapers-367937186.jpg",
					"http://deathtothestockphoto.com/wp-content/uploads/SAM_1035-1024x683.jpeg",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/SplitShire-0025.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/06/dscf1852.jpg",
					"https://thumb1.shutterstock.com/display_pic_with_logo/2402987/467823860/stock-photo-table-with-food-top-view-467823860.jpg",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/SplitShire-08126.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/06/0g8a3053r.jpg",
					"https://thumb7.shutterstock.com/display_pic_with_logo/2797510/567919597/stock-photo-collage-picture-of-different-cheerful-adult-people-expressing-happiness-beautiful-white-human-567919597.jpg",
					"https://3hsyn13u3q9dhgyrg2qh3tin-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/SplitShire-3600.jpg",
					"http://www.lifeofpix.com/wp-content/uploads/2017/06/beach-1-of-1-2.jpg"
					]
	});
});

app.listen(process.env.PORT || 8080);