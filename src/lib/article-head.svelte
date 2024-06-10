<script lang="ts">
    export let headline: string
    export let photo: string

    export let type: 'Banner' | 'Inside'

</script>

{#if type === 'Banner'}
    <div class="article-banner" style="--bg: url('{photo}')">
        <a href="/article/{encodeURI(headline)}">
            <h1>{headline}</h1>
            <p>View Article</p>
        </a>
    </div>

    {:else}
    <div class="article-head">
        <img src="{photo}" alt="">
        <h2>{headline}</h2>
    </div>
    {/if}

<style lang="scss">
    .article-head {
        display: grid;
        grid-template-columns: 12rem 1fr;
        padding: 1rem;
        gap: 1rem;

        color: var(--text);
        transition: color 250ms ease;

        &:hover {
            color: var(--accent)
        }

        img {
            max-width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
        }
    }

    .article-banner {
        position: relative;
        height: 70vh;

        background-image: var(--bg);

        a {
            text-decoration: none;

            position: absolute;
            bottom: 10vh;
            
            left: 5rem;

            color: var(--primary);
            
            h1 {
                transition: color 250ms ease;
            }

            &:hover h1 {
                color: var(--accent);
            }

            p {
                background-color: var(--accent);
                width: fit-content;
                padding: 0.5rem 1rem;

                border-radius: 0.5rem;

                font-weight: 500;
            }
            
        }
    }
</style>