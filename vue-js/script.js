var app = new Vue({
 el: '#root',
 data:{
   messageInput:'il valore che passerò sarà una stringa',
   messageH1:'ciao! sopravvivi a vue !',
   image:'img/vue.png',
   formaDiv:'input-box',
   button:'box-button',
   color:'coloreP',
 },
methods:{
  changeColor:function() {
    this.color = 'colorPclass'
  }


}


});

Vue.config.devtools = true;
