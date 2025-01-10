<script lang="ts">
	let qrcode: HTMLDialogElement;

	function showQrCode(): void {
		if (qrcode) {
			qrcode.showModal();
		}
	}
</script>

<article>
	<!-- title -->
	<div class="my-4 text-center">
		<div class="text-5xl font-black text-primary">Bytown</div>
		<div class="my-8 mt-4 text-lg font-light">Information for Ottawa Vistors and Newcomers</div>
	</div>

	<!-- diff image -->
	<div class="diff aspect-[16/9] rounded-md">
		<div class="diff-item-1">
			<img alt="ottawa now" src="/images/PXL_20230618_1245.webp" />
		</div>
		<div class="diff-item-2">
			<img alt="ottawa then" src="/images/Thomas_Burrowes_1834.webp" />
		</div>
		<div class="diff-resizer"></div>
	</div>

	<div class="mt-2 text-center">
		<a
			href="https://commons.wikimedia.org/w/index.php?curid=5769878"
			target="_blank"
			class="my-0 text-sm opacity-50 md:text-sm"
		>
			<div>
				Thomas Burrowes: First Eight Locks of the Rideau Canal, the North entrance from the Ottawa
				River, 1834
			</div>
			<div>
				This image is available from the Archives of Ontario, item code C 1-0-0-0-13, Public Domain
			</div>
		</a>
	</div>
	<br />

	<p class="my-2 font-semibold text-success">Bytown brings you</p>
	<ul>
		<li>Internet radio</li>
		<li>Daily news headlines</li>
		<li>Alarm clock with dual timezones</li>
		<li>Weather forecast</li>
		<li>City of Ottawa GIS data on map</li>
		<li>Other useful links during your visit</li>
	</ul>
	<br />

	<p>
		This site does not collect any user information whatsoever. It is even cookie-free. If you like
		this site, please <button onclick={showQrCode} class="text-info">share with others.</button>
	</p>
	<br />

	<div class="my-2 font-semibold text-success">Attributions</div>
	<ul>
		<li>Radio Stations: Radio Stations around Ottawa</li>
		<li>News: News Outlets around Ottawa</li>
		<li>
			Weather: <a class="text-info" href="https://open.canada.ca/en/open-data" target="_blank"
				>Environment Canada</a
			>
		</li>
		<li>
			GIS Data: <a
				class="text-info"
				href="https://ottawa.ca/en/city-hall/open-transparent-and-accountable-government/open-data"
				target="_blank">City of Ottawa</a
			>
		</li>
		<li>
			Parliament Icons: created by <a
				class="text-info"
				href="https://www.flaticon.com/free-icons/parliament"
				title="parliament icons">Freepik - Flaticon</a
			>
		</li>
		<li>
			Other Icons: <a class="text-info" href="https://fontawesome.com/" target="_blank"
				>Font Awesome</a
			>
		</li>
	</ul>
	<br />

	<div class="mb-2 text-sm text-success">Disclaimer</div>
	<p class="text-xs font-light">
		To the best knowledge of the developer, all data in this site belong to the public domain. If
		you have any concern about the copyright of the material, please feel free to
		<a href="mailto:info@innomatic.ca" class="text-info">contact us.</a>
	</p>

	<!-- <div class="mt-6">
		<a href="https://www.buymeacoffee.com/infoRr" target="_blank">
			<img
				src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
				alt="Buy Me A Coffee"
				width="140"
			/>
		</a>
	</div> -->

	<dialog bind:this={qrcode} class="modal">
		<div class="modal-box w-fit">
			<div class="flex flex-col items-center">
				<img class="rounded-md" src="/images/qrcode.png" alt="" />
				<p class="mt-2">https://bytown.innomatic.ca</p>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</article>

<style>
	article {
		padding: 1rem;
	}
	ul {
		margin-left: 1rem;
		list-style-type: disc;
	}
</style>
