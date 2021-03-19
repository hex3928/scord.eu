<script>
	import Nav from "./components/Nav.svelte";
	import DiscordWidget from "./components/DiscordWidget.svelte";
	import Footer from "./components/Footer.svelte";

	const tags = [
		"social",
		"games",
		"english",
		"custom bot",
		"fun",
		"music",
		"bots",
	];
</script>

<Nav />

<div id="home" class="h-0" />

<main class="mt-20 md:mt-28">
	<section class="bg-skyblue p-0 m-0">
		<div class="m-2 inline-flex flex-wrap select-none whitespace-nowrap">
			{#each tags as tag}
				<p
					class="text-md md:text-lg m-1 px-6 py-2 md:px-8 md:py-3 bg-lightgray font-semibold rounded-md md:rounded-xl"
				>
					{tag}
				</p>
			{/each}
		</div>
		<p class="max-w-5xl mx-auto p-6 text-xl text-justify">
			A Discord community focused on socializing and games. A good place
			to chat, look for friends or someone to play games with. There are
			no rules here other than those enforced by Discord etc, you may be
			kicked if your an as**hole tho. The main language is english, but
			there are channels for other langs. There's a ton of bots for games,
			music and more. We also have a <b>custom&nbsp;bot</b> that can do some
			pretty neat stuff.
		</p>
	</section>
	<svg
		class="fill-current text-skyblue"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		><path
			d="M0,128L120,144C240,160,480,192,720,197.3C960,203,1200,181,1320,170.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
		/></svg
	>
	<section class="max-w-5xl mx-auto p-6 text-md md:text-lg text-justify">
		<p>
			<b>Why join?</b><br />
			Well, the website is rly cool, and look at the logo-
		</p>
		<p class="mt-5">
			The server is barely few weeks old, we just began building our
			community. There are some <b>big plans</b> (mostly for our bot and this
			website)!
		</p>
	</section>
	<section class="p-6">
		<DiscordWidget />
	</section>
	<section class="max-w-5xl mx-auto p-6 text-md text-justify">
		<p>Wonder where the name came from? Me too lol</p>
	</section>
</main>

<Footer />
