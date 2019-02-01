/*
'use strict': ajuda o javascrip ser mais criterioso, 
falhando já na compilação como na falta de um ; por exemplo
*/
'use strict' 
/* npm install:
- http: servidor http que ficará monitorando a porta definida
- express: possui módulos como MVC, por exemplo
- debug: pacote para debugar a aplicação
- nodemon: pacote para escutar sua aplicação e a cada alteração ela reestartar seu servidor, salvar 
apenas em dev
obs. usar --save para que possa ser salvo como dependência do projeto,
assim quando estiver versionado no GIT haverá apenas um arquivo de dependência
e executando o npm install ele instalará todos os pacotes
*/

/*
    quando n for informado ./ ele ira buscar na sua aplicação, 
    caso contrário ele irá buscar no node_modules
*/
const http = require('http'); 
const debug = require('debug')('nodestore:server');
const app = require('../src/app');

const port = normalizePort(process.env.port || '3000');
app.set('port', port);

//criando o servidor
const server = http.createServer(app);

//configura o servidor para ficar ouvindo a porta que configuramos
server.listen(port);
//Configura para escutar erros no servidor e chamar a function onError
server.on('error', onError);
//Configura para escuta para ajudar o debug
server.on('listening', onListening);

console.log('API rodando na porta: ' + port);

//função responsável por normalizar uma porta disponível no servidor
function normalizePort(val){
    const port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    
    return false;
}

//função responsável pelo tratamento de erro no servidor
function onError(error) {
    if(error.syscall !== 'listen')    {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch(error.code){
        case 'EACCESS':
            console.error(bind + ' required elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug ('Listening on ' + bind);
}