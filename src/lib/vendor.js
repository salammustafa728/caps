'use strict';
const {faker} = require('@faker-js/faker');
const events = require('../events');

events.on('pickup', pickUp);
events.on('in-transit', inTransit);
events.on('delivered', delivered);

let data ={};
setInterval(() => {
    data = {
        store: "Amzon",
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.city(),
    }
    events.emit('pickup',  data);
 
}, 5000);

function pickUp(payload){
  let eventData = {
    event : 'pickup',
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT', eventData);
}
function inTransit(payload){
    let eventData = {
      event : 'in-transit',
      time: new Date(),
      payload: payload,
    };
    console.log('EVENT', eventData);
}
function delivered(payload){
    let eventData = {
      event : 'delivered',
      time: new Date(),
      payload: payload,
    };
    console.log('EVENT', eventData);
    console.log(`VENDOR :  Thank you for delivering ${payload.orderID}`);
}
