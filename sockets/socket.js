const {io} = require('../index')

io.on('connection', client => {
    console.log('Hola');
    client.on('mensaje', data => { 
        console.log('Mensaje',data); 
        io.emit('mensaje',{admin:'mensaje'});
    });

  });