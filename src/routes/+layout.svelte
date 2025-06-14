<script>
    import { page, navigating } from '$app/state';
    let {children} = $props();
</script>

<nav>
    <a href="/" aria-current={page.url.pathname === '/'}>home</a>
    <a href="/about" aria-current={page.url.pathname === 'about'}>about</a>
    <a href="/blog" aria-current={page.url.pathname === 'blog'}>blog</a>
    <a href="/todos" aria-current={page.url.pathname === 'todos'}>todos</a>

    {#if navigating.to}
    navigating to {navigating.to.url.pathname}
    {/if}
</nav>

{@render children()}

