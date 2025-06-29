<script lang="ts">
    import { page, navigating } from '$app/state';
    import { base } from '$app/paths';
    let {children} = $props();

    export const LinkHandler = (link: string) => {
        if (import.meta.env.MODE === 'development') {
            return link
        }
    
        if (link === '/') {
            return base + '/';
        }
        return base + link;
    }
</script>

<nav>
    <a href="{LinkHandler('/')}" aria-current={page.url.pathname === base + '/'}>home</a>
    <a href="{LinkHandler('/about')}" aria-current={page.url.pathname === base + '/about'}>about</a>
    <a href="{LinkHandler('/blog')}" aria-current={page.url.pathname === base + '/blog'}>blog</a>
    <a href="{LinkHandler('/todos')}" aria-current={page.url.pathname === base + '/todos'}>todos</a>

    {#if navigating.to}
    navigating to {navigating.to.url.pathname}
    {/if}
</nav>

{@render children()}

