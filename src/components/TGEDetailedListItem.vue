<template>
    <div class="list-item flex items-center">
        <div
            v-if="item"
            class="item-item flex items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
        >
            {{ item }}
        </div>
        <div>
            <h5 class="text-xl font-medium text-black dark:text-white">
                {{ title }}
            </h5>
            <p
                v-if="description"
                class="text-base text-body"
            >
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TGEDetailedListItem',
    props: {
        item: {
            type: String,
            default: undefined,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: undefined,
        },
    },
}
</script>

<style scoped>
.list-item {
    margin-bottom: 30px;
}
.item-item {
    margin-right: 22px;
    height: 60px;
    width: 60px;
}
</style>
