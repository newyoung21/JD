var cententNav = {

	init :function(){
		this.$l = $('.m-aside li');
		this.$d = $('.dropdown');
		this.bind();
	},

	bind : function(){
		var me = this;
		this.$l.each(function() {
			$(this).on('mouseenter',function(){
				me.show(this);
			})
		});

		this.$l.each(function() {
			$(this).on('mouseleave',function(){
				me.hide(this);
			})
		});

	},

	show : function(el){
		var $a = $(el).find('a');
			idx = $(el).attr('index');
			$i = $a.find('i');
		$a.addClass('ahover');
		$i.addClass('ihover');	
		$s = this.$d.children().eq(idx);
		$s.css('display','block');
		$s.on('mouseenter',function(el){
			$(this).css('display','block');
			$a.addClass('ahover');
			$i.addClass('ihover');	
		})
	},

	hide : function(el){
		var $a = $(el).find('a');
			idx = $(el).attr('index');
			$i = $a.find('i');
		$a.removeClass('ahover');
		$i.removeClass('ihover');
		$s = this.$d.children().eq(idx);
		$s.css('display','none');
		$s.on('mouseleave',function(el){
			$(this).css('display','none');
		    $a.removeClass('ahover');
		    $i.removeClass('ihover');
		})

	}
}
cententNav.init();