var socket = io();

socket.on('server message', function(data) {
  console.log('received message: ', data.text);
  app.messages.push({ch:data.ch, sender:data.sender, text:data.text});
})


Vue.component('message-item', {
  props: ['message'],
  template: '<p>{{message.sender}}: {{ message.text }}</p>'
})

var app = new Vue({
  el:'#app',
  data: {
    nickname:'Ek',

    channels:['Cards', 'Macs', 'Kittens', 'Booze'],
    selectedCh:'Cards',
    joinedChs:[],


    messages:[],
    message:'',
  },
  methods:{
    sendMessage: function() {
      socket.emit('client message', { sender:this.nickname,
        text:this.message,
        ch:this.selectedCh
      });
      this.message = '';
    }
  }
})
