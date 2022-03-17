'use strict';
const events = require('../events');
const { faker } = require('@faker-js/faker');

let delivery={
    "store": 'Amazon',
    "orderId": faker.datatype.uuid(),
    "customer": faker.name.findName(),
    "address": faker.address.city(),
}

const vendore = (payload)=>{
    console.log('VENDOR: Thank you for delivering ',payload.delivery.orderId);
    events.emit('deliveryEvent',{delivery: payload.delivery});
}
events.on('vendor',vendore);

setInterval(() => {
    console.log('-------------------Start Order--------------------------------');
    events.emit('createOreder',{delivery})
    console.log('--------------------------------------------------------------');
}, 1000);
