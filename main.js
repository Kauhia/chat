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

/*
  var messagesBox = new Vue({
    el: '#messagesBox',
      data: {
        messages: ['Hello', 'Hi', 'Howdy']
      },
      methods: {
        appendMessage: function(msg) {
          this.$data.messages.push(msg)
        }
      }
    })

  var socket = io();
  socket.on('message', function(data) {
    console.log('received message: ', data.message);
    messagesBox.appendMessage(data.message);
  })

  var sendBox = new Vue({
    el: '#sendBox',
    data: {
      message:""
    },
    methods: {
      sendMessage: function() {
        var msg = this.$data.message;
        messagesBox.appendMessage(msg);
        socket.emit('client message', msg);
      }
    }
  })*/
