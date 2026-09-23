<script lang="ts">
	export let path: string;
	export let size = '1em';
	export let color = 'currentColor';
</script>

<svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
	<path d={path} fill={color} />
</svg>
