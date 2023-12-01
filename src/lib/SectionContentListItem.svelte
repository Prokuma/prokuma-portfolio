<script lang="ts">
    export let title="";
</script>

<tr>
    {#if title != ""}
        <td class="item_head">{title}</td>
    {:else}
        <td></td>
    {/if}
    <td><slot/></td>
</tr>

<style lang="scss">
    tr {
        td {
            &:first-child {
                font-weight: bold;
                padding-right: 1rem;
                color: white;
                text-align: right;
            }
            color: #cccccc;
            font-weight: light;
        }

        @media (max-width: 640px) {
            td {
                display: flex;
                .item_head {
                    font-size: 1.1rem;
                    font-weight: bold;
                    padding-right: 1rem;
                    color: white;
                }
                color: #cccccc;
                font-weight: light;
            }
        }
    }
</style>