<template>
<div>
	<clientOnly>
		<div id="disqus_thread"></div>
		<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	</clientOnly>
</div>
</template>

<script>
export default {
	mounted () {
		const self = this;
		(function() { // DON'T EDIT BELOW THIS LINE
			let d = self.$el, s = document.createElement('script');
			s.src = 'https://lyrical-hanakuso.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			d.insertAdjacentElement('afterbegin', s);
		})();
	}
}
</script>