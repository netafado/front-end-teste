const  express =  require('express');
const server = express();
const port = 4000;

// arquivos staticos
server.use(express.static('./public'));

server.listen(port, function(){
    console.log('tudo ok, servidor esta rodando');
});