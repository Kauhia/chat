var socket = io();

socket.on('server message', function(data) {
  app.messages.push({ch:data.ch, sender:data.sender, text:data.text});
});


Vue.component('message-item', {
  props: ['message'],
  template: '<p>{{message.sender}}: {{ message.text }}</p>'
});

var app = new Vue({
  el:'#app',
  data: {
    nickname:'Ek',

    channels:['Cards', 'Macs', 'Kittens', 'Booze'],
    selectedCh:'Cards',
    joinedChs:['Cards'],

    messages:[],
    message:'',
  },
  methods:{
    sendMessage: function() {
      socket.emit('client message', {
        sender:this.nickname,
        text:this.message,
        ch:this.selectedCh
      });
      this.message = '';
    },
    selectCh: function(ch) {
      this.selectedCh = ch;
    },
    messagesByCh: function() {
      return this.messages.filter(function(message) {
        return message.ch === this.selectedCh;
      }.bind(this))
    },
    joinRoom: function() {
      this.joinedChs.push(this.selectedCh);
      socket.emit('join', { ch:this.selectedCh });
    }
  },
  mounted: function() {
    this.joinRoom();
  }
});
