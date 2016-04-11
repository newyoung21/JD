function navShow($c){
	this.init($c);
}
navShow.prototype={

	init:function($el){
		this.$p = $el;
		this.$c = $el.next();
		this.bind();
	},

	bind: function(){
		var me = this;
		this.$p.on('mouseenter',function() {
			
			me.setcss();
		});

	     this.$p.on('mouseleave',function() {
			
		 		me.lear();
		 	
		});
	    this.$c.on('mouseenter',function() {
			
			me.setcss();
		});

	     this.$c.on('mouseleave',function() {
			
			me.lear();
		});

	},
	setcss:function(){
		this.$p.addClass('crea');
		this.$c.css('display','block');
		
	},

	lear:function(){
		this.$p.removeClass('crea');
		this.$c.css('display','none');
			
	}
}
