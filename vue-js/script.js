var app = new Vue({
 el: '#root',
 data:{
   messageInput:'il valore che passerò sarà una stringa',
   messageH1:'ciao! sopravvivi a vue !',
   image:'img/vue.png',
   formaDiv:'input-box',
   button:'box-button',
   colorOne:'coloreP',
   colorTwo:'red'
 },
methods:{
  changeColor:function() {
    this.colorOne = 'colorPclass';
  },
  changeColorTwo:function() {
    this.colorTwo = 'pink';
  },




}


});

Vue.config.devtools = true;
