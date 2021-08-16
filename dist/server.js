var http = require('http');
var fs = require("fs");
var qs = require("querystring");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017"

//create a server object:
http.createServer(function (req, res) {
    
    if(req.url === "/apple"){
		res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
	}else if(req.url === "/aaa"){
		sendFileContent(res, "index.html", "text/html");
	}else if(req.url === "/bbb"){
		sendFileContent(res, "regist.html", "text/html");
	}else if(req.url === "/ccc"){
		sendFileContent(res, "login.html", "text/html");
	}else if(req.url === "/ddd"){
		sendFileContent(res, "FoodSelect.html", "text/html");
	}else if(req.url === "/rest1"){
		sendFileContent(res, "properties/Rest1.html", "text/html");
	}else if(req.url === "/rest2"){
		sendFileContent(res, "properties/Rest2.html", "text/html");
	}else if(req.url === "/rest3"){
		sendFileContent(res, "properties/Rest3.html", "text/html");
	}else if(req.url === "/rest4"){
		sendFileContent(res, "properties/Rest4.html", "text/html");
	}else if(req.url === "/rest5"){
		sendFileContent(res, "properties/Rest5.html", "text/html");
	}else if(req.url === "/rest6"){
		sendFileContent(res, "properties/Rest6.html", "text/html");
	}else if(req.url === "/rest7"){
		sendFileContent(res, "properties/Rest7.html", "text/html");		
	
	}else if(/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/jpg");
    }else if(/^\/[a-zA-Z0-9\/]*.png$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/png");
    }else if(/^\/[a-zA-Z0-9\/]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "application.js");
	}else if(/^\/[a-zA-Z0-9\/-/]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^\/[a-zA-Z0-9\/-/]*.bundle.min.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^\/[a-zA-Z0-9\/-]*.min.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}else if(/^\/[a-zA-Z0-9-._\/]*.min.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^\/[a-zA-Z0-9-]*.min.css.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^\/[a-zA-Z0-9\/-/]*.min.js.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^\/[a-zA-Z0-9\/-/]*.css.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^\/[a-zA-Z0-9\/-/]*.ico$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/ico");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.ttf$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/font");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.woff$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/woff");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.woff2$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/woff2");
	}else if(req.url === "/check_fav"){
		//console.log(req.url);
		//console.log(req.method);
		console.log("Requested URL is url" +req.url);
		//check server個status   vvvvv
		if(req.method==="POST"){
			formData = '';
			
			//後面個data係接收返黎既data     vvvv
			return req.on('data', function(data) {
						
			    formData='';
				formData+=data;
				console.log(formData);
			return req.on('end', function() {
				var usr;
				var data;
				data = qs.parse(formData);
				var myobj = {
					'un': data["un"],
					'pw': data["pw"],
					'email': data["email"],
					'birth': data["birth"]
				};
					MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("wow");
					
							//var myobj = stringMsg;
							dbo.collection("oldnewsisso").insertOne(myobj, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted ll");
								//res.end("Account created!!");
								db.close();
							});
					});
			});
			});
		}
	}else if(req.url === "/check_common"){
		//console.log(req.url);
		//console.log(req.method);
		console.log("Requested URL is url" +req.url);
		//check server個status   vvvvv
		if(req.method==="POST"){
			formData = '';
			
			//後面個data係接收返黎既data     vvvv
			return req.on('dataM', function(data) {
						
			    formData='';
				formData+=dataM;
				console.log(formData);
			return req.on('end', function() {
				var usr;
				var data;
				data = qs.parse(formData);
				var myobj = {
					'inputName': data["inputName"],
					'inputEmail': data["inputEmail"],
					'inputPhone': data["inputphone"],
					'inputMessage': data["inputMessage"]
				};
					MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("wow");
					
							//var myobj = stringMsg;
							dbo.collection("ShowMeYourLove").insertOne(myobj, function(err, res) {
								if (err) throw err;
								console.log("1 common inserted ll");
								//res.end("Account created!!");
								db.close();
							});
					});
			});
			});
		}
	}else if(req.url === "/login"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['apple'];
				pwd=data['orange'];
				console.log(user);
				console.log(pwd);
				console.log("jhgfjgfjgf");
				//res.end("dat="+ user + pwd);
				
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
				MongoClient.connect(dbUrl, function(err, db) {
						if (err) throw err;
							var dbo = db.db("wow");
							dbo.collection("oldnewsisso").findOne(query).then(result => {
							//console.log(query);
							//dbo.collection("oldnewsisso").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								
								res.end(JSON.stringify(result));
								db.close();
								//return res.end(JSON.stringify(result));
							});
						});
				
				
				
			
			    });
			});
		}
	}else{
				
			     res.end("abc");
				
			}
			
		
	
//console.log("Requested URL is: " + req.url);
//res.end();

}).listen(1234); //the server object listens on port 8080


function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}
function initialize(){
		var mapOptions = {
			center: {lat: 34.397 ,lng: 150.644}, 
			zoom: 19
		};
		map = new google.maps.Map(
			document.getElementById("map"),
			options);
		
		const marker = new google.maps.Marker({
			
			position:{lat: 22.37166518, lng: 114.1833326},
			map:map
		});
			
			
	}
		
		
/*		google.maps.event.addDomListener(
			window, 'load', initialize);

*/