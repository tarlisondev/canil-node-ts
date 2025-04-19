import express from 'express';
import mustache from 'mustache-express';
import { join } from 'path';

import config from '../config';
import route from '../routes';

const server = express();

// Configuração view do site
server.set('view engine', 'mustache');
server.set('views', join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(join(__dirname, '../public')));

// Rotas
server.use(route);

// Rotas error
server.use((req, res) => {
    res.send('pagina não encontrada')
})


export default ({
    run(){
        server.listen(config.port, () => {
            console.log(`http://localhost:${config.port}`);
        })
    }
})
