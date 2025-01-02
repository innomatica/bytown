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
		<div class="text-3xl font-bold text-secondary">Bytown</div>
		<div>One Stop Information Source for Ottawa Vistors</div>
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

	<div class="text-center">
		<a
			href="https://commons.wikimedia.org/w/index.php?curid=5769878"
			target="_blank"
			class="my-0 text-[0.38rem] text-slate-500 md:text-sm"
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

	<p class="text-success">Bytown brings you</p>
	<ul>
		<li>Free Internet Radio</li>
		<li>Daily News Headlines</li>
		<li>Digital Alarm Clock</li>
		<li>Weather Forecast</li>
		<li>Map (transit info and tourist attractions)</li>
		<li>Links to Event Calendars and Other Informations</li>
	</ul>
	<br />

	<p>
		Unique design makes it fit nicely on your smartphones or tablets, particulary in the landscape
		mode. If you like this site, please <button onclick={showQrCode} class="text-info"
			>share with others.</button
		>
	</p>
	<br />

	<div class="font-medium text-success">Attributions</div>
	<ul>
		<li>
			Radio Stations: <a href="https://www.radio-browser.info/">RadioBrowser</a>
		</li>
		<li>
			News: <a href="https://ottawa.ctvnews.ca/" target="_blank">CTV News Ottawa</a> RSS feed
		</li>
		<li>
			Weather: <a href="https://open.canada.ca/en/open-data" target="_blank">Environment Canada</a> Open
			Data
		</li>
		<li>
			GIS Data: <a
				href="https://ottawa.ca/en/city-hall/open-transparent-and-accountable-government/open-data"
				target="_blank">City of Ottawa</a
			>
			and
			<a
				href="https://www.arcgis.com/home/item.html?id=cdb843a5dbf74467a511076328ca2463"
				target="_blank">NCC</a
			>
		</li>
		<li>
			Parliament and Person Icons: created by <a
				href="https://www.flaticon.com/free-icons/parliament"
				title="parliament icons">Freepik - Flaticon</a
			>
		</li>
		<li>
			Other Icons: <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
		</li>
	</ul>
	<br />

	<div class="font-medium text-success">Disclaimer</div>
	<p class="text-sm">
		To the best knowledge of the developer, all information in this site belong to the public
		domain. If you have any concern about the copyright of the material, please feel free to
		<a href="mailto:info@innomatic.ca" class="text-info">contact us.</a>
	</p>

	<div class="mt-6">
		<a href="https://www.buymeacoffee.com/infoRr" target="_blank">
			<img
				src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
				alt="Buy Me A Coffee"
				width="140"
			/>
		</a>
	</div>

	<dialog bind:this={qrcode} class="modal">
		<div class="modal-box">
			<div class="flex flex-col items-center">
				<img src="/images/qrcode.png" alt="" />
				<p class="mt-1">https://bytown.innomatic.ca</p>
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
