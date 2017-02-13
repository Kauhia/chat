var socket = io();
socket.on('message', function(data) {
  console.log('received message: ', data.message);
  messagesBox.appendMessage(data.message);
})


Vue.component('message-item', {
  props: ['message'],
  template: '<p>{{ message.text }}</p>'
})


var app = new Vue({
  el:'#app',
  data: {
    channels:['Cards', 'Macs', 'Kittens', 'Booze'],
    selectedCh:'Cards',
    messages:[
      {ch:'Cards', sender:'Ek', text:'The test message'},
      {ch:'Cards', sender:'Ek', text:'The test message2'},
      {ch:'Cards', sender:'Ek', text:'The test message3'}
    ]
  },
  methods:{}
})
