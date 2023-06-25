<template>
    <component :is="iconComponent" />
</template>

<script>
import AppsIcon from './AppsIcon.vue'
import FacebookIcon from './FacebookIcon.vue'
import LayersIcon from './LayersIcon.vue'
import LayoutIcon from './LayoutIcon.vue'
import LinkedInIcon from './LinkedInIcon.vue'
import ReloadIcon from './ReloadIcon.vue'
import SlidersIcon from './SlidersIcon.vue'
import SpeedIcon from './SpeedIcon.vue'
import TwitterIcon from './TwitterIcon.vue'

export default {
    name: 'TGEIcon',
    components: {
        AppsIcon,
        FacebookIcon,
        LayersIcon,
        LayoutIcon,
        LinkedInIcon,
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
                case 'facebook':
                    return FacebookIcon
                case 'layers':
                    return LayersIcon
                case 'layout':
                    return LayoutIcon
                case 'linkedin':
                    return LinkedInIcon
                case 'reload':
                    return ReloadIcon
                case 'sliders':
                    return SlidersIcon
                case 'speed':
                    return SpeedIcon
                case 'twitter':
                    return TwitterIcon
            }
            return undefined
        },
    },
}
</script>
