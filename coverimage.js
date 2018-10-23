// Cover image
$.fn.coverImage = function(contain) {
	
	this.each(function() {
		var $this = $(this),
		src = $this.get(0).src,
		$wrapper = $this.parent();

		if (contain) {
			$wrapper.css({
  				'background': 'url(' + src + ') 50% 50%/contain no-repeat'
			});
		} else {
			$wrapper.css({
  				'background': 'url(' + src + ') 50% 50%/cover no-repeat'
			});
		}

		$this.remove();
	});

	return this;
};
jQuery('.img-cover').coverImage();