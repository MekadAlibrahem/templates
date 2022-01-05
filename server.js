var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath : './dest/temp1/' ,
    port : 8880 , 
    name : 'http', 
    host : 'localhost'
});

server.start(function(){
    pathserver = server.name +'//' +server.host+':'+server.port ;
    console.log('server started at  port ' , server.port);
    console.log('server files at  ' ,   pathserver );
});
