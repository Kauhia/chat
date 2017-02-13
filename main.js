var socket = io();
socket.on('message', function(data) {
  console.log('received message: ', data.message);
  app.messages.push({ch:'Cards', sender:'Ek', text:data.message});
  console.log(app.messages);
})




Vue.component('message-item', {
  props: ['message'],
  template: '<p>{{ message.text }}</p>'
})

var app = new Vue({
  el:'#app',
  data: {
    nickname:'Ek',

    channels:['Cards', 'Macs', 'Kittens', 'Booze'],
    selectedCh:'Cards',
    joinedChs:[],


    messages:[
      {ch:'Cards', sender:'Ek', text:'The test message'},
      {ch:'Cards', sender:'Ek', text:'The test message2'},
      {ch:'Cards', sender:'Ek', text:'The test message3'}
    ],
    message:''
  },
  methods:{
    sendMessage: (input) => {
      console.log("send: " + input)
      socket.emit('client message', input);
    }
  }
})
