<script lang="ts">
	import { defaultLinks } from '$lib/constants/links';

	let qrcode: HTMLDialogElement;

	function showQrCode(): void {
		if (qrcode) {
			qrcode.showModal();
		}
	}
</script>

<div class="relative h-full w-full">
	<div class="m-4">
		{#each Object.entries(defaultLinks) as keyval}
			<div class="m-2 text-lg font-bold text-success">
				{keyval[0]}
			</div>
			<ul class="">
				{#each keyval[1] as link}
					<li>
						<a href={link.url} target="_blank">
							<div class="flex" style="margin: 0.25rem;">
								<!-- <img class="w-10 mr-2" src={link.logo} alt="" /> -->
								<div>
									{link.title}
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
	<button class="absolute right-4 top-2" onclick={showQrCode}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			width="24"
			color="oklch(var(--in))"
			><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				fill="currentColor"
				d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"
			/></svg
		>
	</button>
</div>

<dialog id="my_modal_2" class="modal" bind:this={qrcode}>
	<div class="modal-box w-fit">
		<div class="flex flex-col items-center">
			<img src="/images/qrcode.png" alt="" height="200" width="200" />
			<div class="mt-1">https://bytown.innomatic.ca</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<style>
	li {
		margin: 0.75rem 1rem;
		font-size: 0.85rem;
		line-height: 1.5rem;
	}
</style>
