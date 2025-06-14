<script>
    let { data, children } = $props();
</script>

<div class="layout">
    <main>
        {@render children()} 
    </main>

    <aside>
        <h2>もっと見る</h2>
        <ul>
            {#each data.summaries as { slug, title }}
            <li>
                <a href="/blog/{slug}">{title}</a>
            </li>                
            {/each}
        </ul>
    </aside>
</div>

<style>
    @media (min-width: 600px) {
        .layout {
            display: flex;
            gap: 2rem;
            grid-template-columns: 1fr 16em;
        }
    }
</style>
