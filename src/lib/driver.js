'use strict';
const events = require('../events.js');

events.on('pickup', pickUp);

function pickUp(payload){
    console.log(`DRIVER: picked up ${payload.orderID}`);
    setTimeout(() => {
      events.emit('in-transit', payload);
    }, 2000);
    setTimeout(() => {
      console.log(`DRIVER: delivered up ${payload.orderID}`);
      events.emit('delivered', payload);
    }, 2000);
    
  }