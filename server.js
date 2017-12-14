var http=require('http');
fs=require('fs');
var server=http.createServer(function(req,res){
	getData(res);
}).listen(2556);

function getData(res){
	fs.readFile('data.json',function(err,data){
		if(err){
			myError(err,res);
		}else{
			getTemp(data.toString(),res)
		}
	});
	
}

function getTemp(titles,res){
	fs.readFile('temp.html',function(err,data){
		if(err){
			myError(err,res);
		}else{
			formatHtml(titles,data.toString(),res);
		}
	})
}

function formatHtml(titles,tmp,res){
	var htmldata=tmp.replace('$$',titles);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(htmldata);
}

function myError(err,res){
	console.log(err);
	res.end('server error');
}