<template>
    <TGEDetailedListItem
        v-for="(item, idx) in items"
        :key="idx"
        :item="item.item"
        :title="item.title"
        :description="item.description"
    />
</template>
<script>
import TGEDetailedListItem from './TGEDetailedListItem.vue'

export default {
    name: 'TGEDetailedList',
    components: {
        TGEDetailedListItem,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
