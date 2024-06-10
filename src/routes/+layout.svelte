<script lang="ts">
	import logo from '$lib/logo.png';
	import '$lib/main.scss';
	import '@phosphor-icons/web/regular';
</script>

<svelte:head>
	<title>Forum-Dimensions</title>
    <link rel="icon" href="{logo}" />
</svelte:head>

<header>
	<a href="/">
		<img src={logo} alt="" class="logo" />
	</a>
	<span>
		<h1>Forum-Dimensions</h1>
		<p>For the truth, by the truth</p>
	</span>
	<nav>
		<a href="/#top-stories">Top Stories</a>
		<a href="/#latest-news">Latest News</a>
		<a href="/#features">Features</a>
		<a href="/#editorials">Editorial</a>
		<a href="/#columns">Columns</a>
		<a href="/#sports">Sports</a>
		<a href="/#archives">From the archives</a>
		<a href="/#cartoons">Cartoons</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<span>
		<img src={logo} alt="" class="logo" />
		<h2>Forum-Dimensions</h2>
		<p>The Official Student Publication of<br />West Visayas State University</p>
	</span>

	<span>
		<h4>Follow Us</h4>
		<span class="links">
			<a href="https://web.facebook.com/forumdimensions" target="_blank"
				><i class="ph ph-facebook-logo"></i></a
			>
			<a href="https://instagram.com/forumdimensions" target="_blank"
				><i class="ph ph-instagram-logo"></i></a
			>
		</span>
	</span>
</footer>

<style lang="scss">
	header {
		background-color: var(--accent);
		color: var(--primary);

		display: grid;

		row-gap: 1rem;

		position: relative;

		.logo {
			width: 12rem;
			justify-self: center;

			position: absolute;
			top: 0.5rem;
			left: 1rem;
		}

		> span {
			display: grid;
			place-items: center;
            place-content: center;
		}

		> nav {
			display: flex;
			justify-content: space-evenly;

			background-color: var(--secondary);
			color: var(--text);

			a {
				padding: 0.6rem 1rem;
				font-weight: 500;

                transition: color 250ms ease, background-color 250ms ease;

				&:hover {
                    background-color: var(--primary);
                    color: var(--accent);
				}

			}
		}
	}

	.logo {
		max-width: 6vw;
	}

	footer {
		background-color: var(--text);
		color: var(--primary);

		display: grid;
		gap: 2rem;

        padding: 2rem 5rem;
		place-items: center;

		> span {
			display: grid;
			place-items: center;
			text-align: center;

            &:last-child {
                gap: 1rem;

                h4 {
                    font-family: 'Graphik';
                    letter-spacing: 0.5px;
                }
            }
		}

		.links {
            i {
                font-size: 1.5rem;
            }
        }
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
