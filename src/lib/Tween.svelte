<script>
	import gsap from 'gsap'

	let { tween = $bindable(), vars, children } = $props()
	let target

	$effect(() => {
		tween = gsap.to(target, vars)
		return () => tween.kill()
	})
</script>

<div class="box" bind:this={target}>
	{@render children?.()}
</div>
