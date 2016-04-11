function carousel($el){
	this.init($el);
}
carousel.prototype = {

	init: function($el){
		this.$img = $el;
		this.$ul = this.$img.parents('ul');
		this.$r = $('.a-right');
		this.$l = $('.a-left');
		this.$nav =this.$ul.nextAll('ul').find('li');
		this.b=true;
		this.bind();
		this.autoplay();
	},
	bind: function(){
		var me = this;

		this.$ul.on('mouseover',function(){
			me.b=false;
			me.setStyle();
		});

		this.$ul.on('mouseleave',function(){
			me.b=true;
			me.removeStyle();
		});

		this.$l.on('mouseover',function(){
			me.b=false;
			me.setStyle();
		});

		this.$l.on('mouseleave',function(){
			me.b=true;
			me.removeStyle();
		});

		this.$r.on('mouseleave',function(){
			me.b=true;
			me.removeStyle();
		});

		this.$r.on('mouseover',function(){
			me.b=false;
			me.setStyle();
		});

		this.$r.on('click',function(){
			me.gonext();
		});
		this.$l.on('click',function(){
			me.goprev();
		});

		this.$nav.on('click',function(){
			 me.b=false;
			var $hidx = $(this).index(),
				$didx = $('.back').index();
			if($hidx>$didx){
				me.gonext($hidx-$didx);
			}

			if($hidx < $didx){
				me.goprev($didx-$hidx);
			}
		})
	},

	setStyle: function(){
		this.$r.css('display','block');
		this.$l.css('display','block');
	},

	removeStyle: function(){

		this.$r.css('display','none');
		this.$l.css('display','none');
		
	
	},

	gonext: function(i){
		var me = this;
			i = i || 1;
			imgH= this.$img.height();
		this.$ul.animate({'left':-(i*imgH)},400,function(){
			for(var k = 0; k<i; k++){
				me.$ul.find('li').last().after(me.$ul.find('li').first());
			}
			me.$ul.css('left','0');
			me.setindex(me.$ul.find('li').first().attr('data-idx'));
		});

	},

	goprev: function(i){
		var me = this;
			i = i || 1;
			imgH= this.$img.height();
		this.$ul.css('left',-(i*imgH));
		for(var k = 0; k<i; k++){
		    this.$ul.find('li').first().before(me.$ul.find('li').last());
		}
		this.$ul.animate({'left':0},400,function(){
			me.setindex(me.$ul.find('li').first().attr('data-idx'));
		});
		
		
	},

	autoplay: function(){
		var me = this;

		setInterval(function(){
			if(me.b){me.gonext();}
				
				},3000);
	},

	setindex: function(idx){
		this.idx = idx;
		this.add(idx);
	},

	add: function(idx){
		this.$nav.removeClass('back').eq(idx).addClass('back');
	}
	
}
