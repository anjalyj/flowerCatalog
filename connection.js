var http=require('http');
var fs=require('fs');
var load=function(url){
	console.log('THIS IS WHAT I WANT'+url);
	var fileName = url=="/" ? "./home.html" : "."+url;
	var file=fs.readFileSync(fileName);
	return file;
};

var requestListener=function(req,res){
	res.end(load(req.url));
}

var server=http.createServer(requestListener);
server.listen(4000);
