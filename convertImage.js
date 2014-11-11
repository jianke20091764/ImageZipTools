var fs = require('fs');
var cp = require('child_process');

var tools = {
	regExpFile : /\.(png|jpg|gif|jpeg|bmp)$/gi,
	exec : 'convert' ,
	convertExec : function(inDir,obj,outDir,version,setting,rename){
		var args = [] ,pro  ;
		args.push(tools.exec);
		args.push(inDir + obj.file);
		args.push('-strip');
		
		for(pro in setting){
			args.push('-' + pro);
			args.push(setting[pro]);
		}
		
		if(!rename){
			args.push(outDir + obj.file);
		}else{
			args.push(outDir + obj.name + '.v.' + version + obj.postfix);
		}
		
		console.log(args.join(' '));
		cp.exec(args.join(' '),function(error,stdout,stderr){
			//console.log(args.join(' '));
		});
		
	},
	
	cmd : function(args){
		cp.exec(args,function(){
		
		});
	},

	parseFileName : function(fileName){
		if(typeof fileName != 'string'){
			throw Error ('not file name >>>> ');
		}
		
		tools.regExpFile.lastIndex = 0;
		var len = fileName.search(tools.regExpFile);
		if(len == -1){
			throw Error ('file\'name has some errors >>>> ');con
		}
		
		var ret = {
			file : fileName ,
			name : fileName.substr(0,len),
			postfix : fileName.substr(len)
		};
		
		return ret ;
	}
};

var convertImage = {
	zipImage : function(config){
		var outDir = config.data.dir , imageDirs = config.data.data, version = config.data.version,setting = config.data.setting ,rename = config.data.rename ;
		var i, j, len ,fileLen ; 
		
		if(!fs.existsSync(outDir)){
			fs.mkdirSync(outDir);
		}
		
		for( i = 0 , len = imageDirs.length ; i < len ; i ++ ){
			var files = fs.readdirSync(imageDirs[i]);
			var child = [] ;
			for(j = 0 ,fileLen = files.length ; j < fileLen ; j ++ ){
				tools.regExpFile.lastIndex = 0;				
				if(tools.regExpFile.test(files[j])){
					console.log('Start convert ' + files[j] + ': ...  ');
					tools.convertExec(imageDirs[i],tools.parseFileName(files[j]),outDir,version,setting,rename);
					console.log('convert ' + files[j] + ': done >>> ');	
				}else{					
					console.log('\n@Error : ' + files[j] + ' >>> \n');
				}							
			};
		};
		
		config.callback && config.callback();
	}
};

module.exports = convertImage ;




