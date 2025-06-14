<script>
    let { data } = $props();
</script>

<div class="contents">
     <h1>{data.post.title}</h1>
    <div>{@html data.post.content}</div>
</div>

<style>
    @media (min-width: 600px) {
        .contents {
            width: 100%;
        }
    }
</style>