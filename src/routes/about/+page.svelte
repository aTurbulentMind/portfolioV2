<script>
	import ItsMe from '$lib/img/myFace.jpg'
	import Nature1 from '$lib/img/nature1.jpg'
</script>

<div class="head_Line">
	<h1>About:</h1>
</div>

<img class="face" src={ItsMe} alt="its my face" />

<h1>Joel Rivers</h1>

<p>
	I picked up website development a few years ago. While working in a retail store. I spent down
	time learning about building a new website for the shop. Something magic happened and I easily
	found myself addicted. One realm of learning bled into another. As the wealth of knowledge grew,
	so did the interest in learning more. I've done it for fun, but I want to use my skills to help
	people who need it.
</p>

<p>
	I do spend some time with fun things like going to concerts or playing video games. To get away
	and reset the brain. Hiking and backpacking is another nice escape from being immersed in
	technology. There is something magic living in the wild serenity of the Pacific Northwest.
</p>

<img src={Nature1} alt="a sunny day on top of a mountain at a lake. It is serene" />

<!--svelte-ignore css-unused-selector -->
<style>
	img {
		width: 60%;
		margin: 0 20%;
	}

	/* Tablet Size */
	@media (min-width: 768px) {
		.face {
			width: 35%;
			margin: 0 30%;
		}
	}
</style>
