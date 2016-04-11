var like = {

	init: function($el,$cl){
		this.$e = $el;
		this.$c =$cl ;
		this.bind();
	},

	bind: function(){
		var me = this;
		this.$c.on('click',function(){
			me.show();
		})
	},

	show: function(){
		var idx = this.$e.find('.dpl').index();
		idx++;
		if(idx>2){
			idx=0;
		}
		this.$e.find('.dpl').removeClass('dpl');
		this.$e.children().eq(idx).addClass('dpl');
		
	}
}
like.init($('.like-b'),$('.l-t-r'));