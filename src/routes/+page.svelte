<script lang="ts">
	import ArticleHead from '$lib/article-head.svelte';
	import articles from '$lib/articles';

    
    import bannerImage from '$lib/Photos/Banner_Story/1.jpg'
    
    import insideStory1 from '$lib/Photos/Inside_Story_1/1.jpg'
    import insideStory2 from '$lib/Photos/Inside_Story_2/1.jpg'
    import insideStory3 from '$lib/Photos/Inside_Story_3/1.jpg'
    import insideStory4 from '$lib/Photos/Inside_Story_4/1.jpg'
    import insideStory5 from '$lib/Photos/Inside_Story_5/1.jpg'
    
	const bannerArticle = articles[0];
    const stories = articles.slice(1);

    const images = [ insideStory1, insideStory2, insideStory3, insideStory4, insideStory5 ]

</script>

<div id="top-stories">
	<ArticleHead
		headline={bannerArticle.headline}
		photo={bannerImage}
		type="Banner"
	/>
</div>

<div id="latest-news">
    <h1>Latest News</h1>
	{#each stories as article, index}
			<a class="news-article" href="/article/{encodeURI(article.headline)}">
				<ArticleHead
					headline={article.headline}
					photo={images[index]}
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
