/**
 * Created by taguchimunetaka on 2015/11/17.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.NESTING_ANCHOR = function($target){
	this.$target = $target;
	this.init();
};

SYUKOU.COMMON.NESTING_ANCHOR.prototype = {
	init : function(){
		this.setParameters();
		this.prepare();
		this.bindEvent();
	},
	setParameters : function(){
		this.$triggerBlock = this.$target;
		this.$childAnchor = this.$target.find($('.jsc-block-anchor-child'));
	},
	prepare : function(){
		this.$triggerBlockAnchor = this.$target.find($('.jsc-block-anchor'));
		this.$triggerBlockHref = this.$triggerBlockAnchor.attr('href');
	},
	bindEvent : function(){
		var _self = this;

		this.$triggerBlock.on('click', function(){
			location.href = _self.$triggerBlockHref;
			return false;
		});

		this.$childAnchor.on('click', function(e){
			e.stopPropagation();
		})
	}
};


$(function(){
	$('.jsc-blog-article-list').each(function(){
		new SYUKOU.COMMON.NESTING_ANCHOR($(this));
	});
});