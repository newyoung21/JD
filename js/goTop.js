 function goTop($el){
 	this.init($el);
 }
 goTop.prototype = {

	init: function($el){
		this.$c = $el;
		this.$d = $(document);
		this.bind();
	},

	bind: function(){
		var me = this;
		this.$c.on('click',function(){
			me.gototop();
		})
	},

	gototop: function(){
		this.$d.scrollTop(0);
	}
}

var tabGotop = new goTop($('.go-top'));