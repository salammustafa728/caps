'use strict';

const events = require('./events');
require('../src/lib/driver');

const pickUp = (payload)=>{
    const data ={
        event: 'pickup',
        time: new Date().toString(),
        payload: payload.delivery,
    };
    console.log('EVENT ', data);
    events.emit('pickupDrive',{delivery:payload.delivery});
}

const inTransit =(payload)=>{
    const data ={
        event: 'in-transit',
        time: new Date().toString(),
        payload: payload.delivery,
    };
    console.log('EVENT ', data);
}

const deliveryEvent =(payload)=>{
    const data ={
        event: 'delivered',
        time: new Date().toString(),
        payload: payload.delivery,
    };
    console.log('payload ', data);
    console.log(`VENDOR :  Thank You ${payload.delivery.customer}`);
}

events.on('pickUp',pickUp);
events.on('in-transit',inTransit);
events.on('deliveryEvent',deliveryEvent);