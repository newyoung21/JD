
var toolbar = {

	init:function($el){
		this.$p = $el;
		this.fun();
	},

	fun: function(){
		var me = this;
		this.$p.each(function(){
			var	$t = $(this)
			 	$c=$(this).next();
			me.bind($t,$c);
		});
	},
	bind: function($t,$c){
		var me = this;
		$t.on('mouseenter',function() {
			
			me.setcss($t,$c);
		});

	     $t.on('mouseleave',function() {
			
		 	me.lear($t,$c);
		 	
		});
	    $c.on('mouseenter',function() {
			
			me.setcss($t,$c);
		});

	    $c.on('mouseleave',function() {
			
			me.lear($t,$c);
		});

	},
	setcss:function($t,$c){
		$t.addClass('clr');
		$c.css('display','block');
		
	},

	lear:function($t,$c){
		$t.removeClass('clr');
		$c.css('display','none');
			
	}
}
toolbar.init($('.tab-ico'));
