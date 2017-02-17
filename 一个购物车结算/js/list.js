var shop = new Vue({
	el:'#app',

	data:{
		list:''
	},

	ready:function(){
	  this.$http.get('js/shop.json').then(function(response){ 
		var data = response.data;
		this.list = data;
	  },function(response){ 
	});
   },

   methods:{
	   delShop:function(shop){
	   	this.list.$remove(shop);
	   }

	},

   computed:{
   	sum:function(){
   		var result = 0;
   		for(var i=0;i<this.list.length;i++){
   			result=Number(this.list[i].price*this.list[i].num)+result;
   		};
   		return result;
   	}
   }
})