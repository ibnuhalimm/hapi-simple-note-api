import Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server run on ${server.info.uri}`);
};

init();
