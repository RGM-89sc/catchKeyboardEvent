const kbevent = require('./kbevent');

function callback(){
  console.log('catch it');
}

kbevent.catchKeys({
  eventType: 'keydown',  //Optional, default: 'keydown'
  keys: ['CONTROL', 'ALT', 'SPACEBAR'],  // required
  catchAgain: true  // Optional, default: false
}, callback);
