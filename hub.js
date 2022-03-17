const events = require('./src/events');
require('./src/lib/driver');
require('./src/lib/vendor');
require('./src/caps');


const createDataOredered = (payload)=>{
   setInterval(() => {
     events.emit('pickUp',{delivery: payload.delivery});
   }, 1000);
   setInterval(() => {
    events.emit('in-transit',{delivery: payload.delivery});
  }, 2000);
  setInterval(() => {
    events.emit('delivered',{delivery: payload.delivery});
  }, 3000);
}

events.on('createOreder', createDataOredered);