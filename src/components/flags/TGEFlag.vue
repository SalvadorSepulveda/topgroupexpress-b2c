<template>
  <component :is="flagComponent" />
</template>

<script>
import Spain from './es.vue'
import France from './fr.vue'
import China from './cn.vue'
import England from './gb.vue'

export default {
  name: 'TGEFlag',
  components: {
    Spain,
    France,
    China,
    England,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    flagComponent() {
      switch (this.name) {
        case 'es':
          return Spain
        case 'fr':
          return France
        case 'cn':
          return China
        case 'en':
          return England
      }
      return undefined
    },
  },
}
</script>
