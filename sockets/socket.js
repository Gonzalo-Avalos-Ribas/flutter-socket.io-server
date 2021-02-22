const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');
const bands = new Bands();

bands.addBand(new Band('Soda Estereo'));
bands.addBand(new Band('Queen'));
bands.addBand(new Band('Red hot chillie peers'));
bands.addBand(new Band('My chemical romance'));

io.on('connection', client => {
    console.log('Cliente conectado');
    client.emit('active-bands',bands.getBands());
    client.on('nuevo-mensaje', data => { 
        io.emit('nuevo-mensaje',data);
    });
    client.on('vote-band',(payload) => {
           bands.voteBand(payload.id);
           io.emit('active-bands',bands.getBands());
    });
    client.on('add-band',(payload) => {
        bands.addBand(new Band(payload.name));
        io.emit('active-bands',bands.getBands());
 });
 client.on('delete-band',(payload) => {
    bands.deleteBand(payload.id);
    io.emit('active-bands',bands.getBands());
});
 
  });