<template>
    <div class="relative ml-[30px] flex items-center dark:text-white cursor-pointer">
        <div class="flex z-10" @click="toggleDropdown">
            <div class="mt-[4px]">
                <TGEFlag
                    :name="selectedLanguage.flag"
                    class="w-8 h-8 inline-block rounded-full"
                />
            </div>
        </div>
        <div
            v-if="dropdownOpen"
            class="absolute left-[-8px] top-[-18px] pt-[52px] mt-2 bg-white shadow-md rounded-md py-1 px-2 bg-red-500 bg-opacity-20 z-0"
        >
            <div
                v-for="language in filteredLanguages"
                :key="language.flag"
                class="flex items-center cursor-pointer mt-[4px] mb-[9px]"
                @click="selectLanguage(language)"
            >
                <TGEFlag
                    :name="language.flag"
                    class="w-8 h-8 inline-block rounded-full mt-1.5"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TGEFlag from "@/components/flags/TGEFlag.vue";
import { useI18n } from 'vue-i18n';

export default {
    components: {TGEFlag},
    data() {
        return {
            languages: [
                {flag: "es"},
                {flag: "en"},
                {flag: "fr"},
                {flag: "cn"},
            ],
            selectedLanguage: {flag: "es"},
            dropdownOpen: false,
        };
    },
    computed: {
        filteredLanguages() {
            return this.languages.filter(language => language.flag !== this.selectedLanguage.flag);
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        selectLanguage(language) {
            this.$i18n.locale = language.flag;
            this.selectedLanguage = language;
            this.dropdownOpen = false;
        },
    },
};
</script>
