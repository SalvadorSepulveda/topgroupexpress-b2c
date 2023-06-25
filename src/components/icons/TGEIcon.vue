<template>
    <component :is="iconComponent" />
</template>

<script>
import AppsIcon from './AppsIcon.vue'
import LayersIcon from './LayersIcon.vue'
import LayoutIcon from './LayoutIcon.vue'
import ReloadIcon from './ReloadIcon.vue'
import SlidersIcon from './SlidersIcon.vue'
import SpeedIcon from './SpeedIcon.vue'

export default {
    name: 'TGEIcon',
    components: {
        AppsIcon,
        LayersIcon,
        LayoutIcon,
        ReloadIcon,
        SlidersIcon,
        SpeedIcon,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        iconComponent() {
            switch (this.name) {
                case 'apps':
                    return AppsIcon
                case 'layers':
                    return LayersIcon
                case 'layout':
                    return LayoutIcon
                case 'reload':
                    return ReloadIcon
                case 'sliders':
                    return SlidersIcon
                case 'speed':
                    return SpeedIcon
            }
            return undefined
        },
    },
}
</script>
