<script lang="ts">
	import articles from '$lib/articles';

    import ArticleHead from '$lib/article-head.svelte'
	import { onMount } from 'svelte';

	export let data;

    const links = [
        'Top Stories',
        'Latest News',
        'Features',
        'Editorial',
        'Columns',
        'Sports',
        'From the archives',
        'Cartoons',
    ]

    onMount(() => {
        const hash = window.location.hash
        if (!links.includes(hash)) {
            data.slug += hash
        }
    })

	$: headline = decodeURI(data.slug);
    
	$: article = Object.values(articles).find((a) => a.headline === headline);

    $: paragraphs = article?.contents.split('\n')
    $: otherArticles = Object.values(articles).filter(a => a !== article)

</script>

{#if article}
<div class="article-contents">
        <a href="/"><i class="ph ph-arrow-bend-up-left"></i>Back to Home</a>
		<h1>{article.headline}</h1>
		<div class="details">
			<p class="date">Published {article.date}</p>
			<p class="writer">Story by {article.writer.map((w) => w.name).join(' and ')}</p>
		</div>

		<div class="photos">
			{#if article.photos}
				<div class="scrollable">
                    {#each article.photos as photo}
                        <img src="/Photos/{photo}" alt={photo} />
                    {/each}
				</div>
				<p class="photojourn">{typeof article.pj === 'string' ? article.pj : ('Photos by ' + article?.pj.name)}</p>
			{/if}
		</div>

		<p class="contents">
            {#if paragraphs}
                {#each paragraphs as par}
                    <p class="paragraph">{par}</p>
                {/each}
            {/if}
		</p>
	</div>

    <br>
    <hr>
    <br>
    {#each article.writerphoto as photo, index}
    <div class="profile">
        <img src="/src/lib/Photos/{photo}" alt="{article.writer[index].name}">
        <span>
            <i>AUTHOR</i>
            <hr>
            <h3>{article.writer[index].name}</h3>
            <p class="desc">{article.writer[index].desc}</p>
        </span>
    </div>
    {/each}
{/if}

<hr>
<div class="article-contents">
    <h1>Read More</h1>

    {#each otherArticles as article}
			<a class="news-article" href="/article/{encodeURI(article.headline)}">

				<ArticleHead
					headline={article.headline}
					photo="/Photos/{article.photos[0]}"
					type="Inside"
				/>
			</a>
	{/each}
</div>

<style lang="scss">
	.article-contents {
		padding-block: 5rem;

		display: grid;
		gap: 1rem;

		margin-inline: auto;

		max-width: 80vw;
		overflow-x: hidden;

        > a {
            color: var(--accent);
            text-decoration: none;

            i {
                margin-right: 0.5rem;
            }
        }

        h1 {
            text-wrap: pretty;
        }
	}

	.scrollable {
		display: flex;
		max-width: 80vw;

		overflow-x: auto;

		img {
			max-height: 70vh;
		}
	}

	.photos p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}

	p.contents {
		max-width: 100%;
        .paragraph {
            margin-top: 1rem;
        }
	}

    .profile {
        display: flex;
        gap: 1rem;

        padding: 1rem 3rem;
        margin-inline: auto;

        i {
            font-family: 'Graphik';
            font-style: normal;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
        }

        span {
            display: grid;
            gap: 0.25rem;
            width: 100%;

            hr {
                height: 4px;
                background-color: var(--accent);
            }
        }

        img {
            width: 8rem;
            height: 8rem;
            object-fit: cover;
        }
    }
</style>
