var convertImage = require('./convertImage'); 
var config =  require('./config') ;

var app = {
	load : function(){
		console.log('App start working >>> ');
		convertImage.zipImage({
			data : config ,
			callback : function(){
				console.log('App is over >>> ');
			}
		});
	}
};

app.load();


