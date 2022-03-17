'use strict';

const events = require('../events');

const pickedUpelivery=(payload)=>{
    console.log('DRIVER: ',` picked up ${payload.delivery.orderId}`);
}

const delivered =(payload)=>{
    console.log('DRIVER:  ',` delievered: ${payload.delivery.orderId}`);
    events.emit('vendor',{delivery: payload.delivery});
}

events.on('pickedUpelivery',pickedUpelivery);
events.on('delivered',delivered);