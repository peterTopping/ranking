const server = require('./server');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    server.use(routes);
    server.get('*', handle);

    server.listen(1100, () => {
        console.log('listening on 1100');
        console.log('dev:', dev)
    });
});
