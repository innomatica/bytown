<script lang="ts">
	import { newsfeeds } from '$lib/constants/newsfeeds';

	const myNewsfeeds: Newsfeed[] = $state(newsfeeds);
	const contentStyle = '<style> .noimage > img { display: none;} </style>';

	async function getFeed(event: Event, newsfeed: Newsfeed) {
		const checked = (event.target as HTMLInputElement).checked;
		if (checked) {
			const newsitems: NewsItem[] = [];
			const res = await fetch(`/api/feed?url=${newsfeed.feed}`);
			// console.log('status:', res.status);
			const data = await res.text();
			// console.log('text:', data);
			const parser = new DOMParser();
			const doc = parser.parseFromString(data, 'application/xml');
			// console.log('doc:', doc);
			// select news items
			const items = doc.querySelectorAll('rss channel item');
			for (const item of items) {
				// console.log('item:', item);
				newsitems.push({
					title: item.querySelector('title')?.innerHTML.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1'),
					link: item.querySelector('link')?.innerHTML,
					description: item
						.querySelector('description')
						?.innerHTML.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1'),
					image: '', // Dont care about the embedded images for now
					pubDate: item.querySelector('pubDate')
						? new Date(item.querySelector('pubDate')!.innerHTML)
						: new Date()
				});
			}
			newsfeed.items = newsitems;
			// console.log(newsfeed.items);
		}
	}
</script>

<div class="flex flex-col gap-2 p-4">
	{#each myNewsfeeds as newsfeed}
		<div class="collapse bg-base-200">
			<input type="radio" name="my-accordiion-1" onchange={(e) => getFeed(e, newsfeed)} />
			<div class="collapse-title flex items-center">
				<div class="mr-2 h-6 w-6">
					<img class=" object-fit rounded-sm" src={newsfeed.logo} alt={newsfeed.title} />
				</div>
				<div class="line-clamp-1 text-lg font-medium sm:text-xl">{newsfeed.title}</div>
			</div>
			<div class="collapse-content flex flex-col gap-4">
				{#if newsfeed.items}
					{#each newsfeed.items as item}
						<a href={item.link} class="flex flex-col" target="_blank">
							<div class="mb-1 line-clamp-2 font-semibold text-primary">{item.title}</div>
							<div class="noimage line-clamp-3 font-light">
								{@html item.description + contentStyle}
							</div>
						</a>
					{/each}
				{:else}
					<div class="text-center">
						<span class="loading loading-spinner text-primary"></span>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
