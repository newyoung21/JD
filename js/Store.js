 
function Store(a,b){
	this.init(a,b);
}
 Store.prototype = {

	init: function($el,$cl){
		this.$l = $el;
		this.$main =$cl;
		this.bind();
	},

	bind: function(){
		var me = this;
		this.$l.each(function() {
			$(this).on('mouseenter',function(){
				me.getidx(this);
			})
		});
	},

	getidx: function(n){
		var $n = $(n);
			idx = $n.attr('index');
		this.$l.children().removeClass('bor-a')
		$n.find('a').addClass('bor-a');
		this.show(idx);
	},

	show: function(nub){
		this.$main.children().removeClass('main-show').eq(nub).addClass('main-show');
	}
}
var manClothes = new Store($('.c-n-r li'),$('.clo-main '));