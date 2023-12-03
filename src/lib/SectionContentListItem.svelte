<script lang="ts">
    export let title="";
    export let align="left";
</script>

<tr style="--text-align: {align};">
    {#if title != ""}
        <td class="item_head">{title}</td>
    {:else}
        <td></td>
    {/if}
    <td><slot/></td>
</tr>

<style lang="scss">
    tr {
        .item_head {
            font-weight: bold;
            padding-right: 1rem;
            color: white;
            text-align: left;
        }
        td {
            text-align: var(--text-align); 
            color: #cccccc;
            font-weight: light;
        }

        @media (max-width: 640px) {
            .item_head {
                display: block;
                font-size: 1.1rem;
                font-weight: bold;
                padding: 0rem;
                color: white;
                text-align: var(--text-align);
            }
            td {
                display: block;
                display: flex;
                color: #cccccc;
                font-weight: light;
                text-align: var(--text-align);
            }
        }
    }
</style>