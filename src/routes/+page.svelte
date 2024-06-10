<script lang="ts">
	import ArticleHead from '$lib/article-head.svelte';
	import articles from '$lib/articles';

	const bannerArticle = articles[0];
    const stories = articles.slice(1);

    const images = 
        Object.keys(import.meta.glob('$lib/Photos/**/*.jpg', { query: '?url', eager: true }))

    articles.forEach(a => a.photos = a.photos.map(src => images.find(a => a.includes(src)) ?? ''))
</script>

<div id="top-stories">
	<ArticleHead
		headline={bannerArticle.headline}
		photo={bannerArticle.photos[0]}
		type="Banner"
	/>
</div>

<div id="latest-news">
    <h1>Latest News</h1>
	{#each stories as article}
			<a class="news-article" href="/article/{encodeURI(article.headline)}">
				<ArticleHead
					headline={article.headline}
					photo={article.photos[0]}
					type="Inside"
				/>
			</a>
	{/each}
</div>

<style lang="scss">
	.news-article {
        text-decoration: none;
        color: var(--text);

        transition: color 250ms ease;

        &:hover {
            color: var(--accent)
        }
	}

    #latest-news {
        display: grid;
        grid-template-columns: 1fr 1fr;

        padding: 2rem 3rem;

        h1 {
            grid-column: 1 / span 2;
        }
    }
</style>
