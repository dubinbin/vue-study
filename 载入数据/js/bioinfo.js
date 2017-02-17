var customer = new Vue({
	el : '#customer',
	data:{
		list:''		
	},
	ready: function(){ 
	  this.$http.get('js/customer.json').then(function(response){ 
		var data = response.data;
		this.list = data;
	},function(response){ 
	});
  }
})


var biolist = new Vue({
	el : '#biolist',
	data:{
		item:''		
	},
	ready: function(){ 
	  this.$http.get('js/bio.json').then(function(response){ 
		var data = response.data;
		this.item = data;
	},function(response){ 
	});
  }
})
