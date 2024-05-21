<template>
  <div>
    <Navbar/>
  </div>
  <div>
      <div class="flex justify-center pt-14 relative">
        <span class="text-2xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl inline bg-gradient-1 bg-clip-text text-transparent">Instale nuestra app</span>
      </div>



      <div class="flex items-center justify-center gap-8 shadow-card rounded-xl">
        <span class="text-2xl p-2 inline bg-gradient-1 bg-clip-text text-transparent">Codigo QR para la descarga de la app</span>
        <NuxtImg src="/codigoQR.svg"
          width="180"
            class="p-2"
        />
      </div>
    <div class="flex justify-center gap-4">

      <a class="flex" href="https://play.google.com/store/apps/details?id=com.tge.t3agencies&hl=es_419&gl=US">
        <div class="flex flex-items-center justify-center pt-10 xl:gap-8 xl:pt-8 lg:gap-6 lg:pt-8 sm:gap-6 sm:pt-8 md:gap-8 md:pt-8 rounded-lg text-base font-medium text-white">
          <div class="flex gap-2 rounded-lg bg-primary xl:px-8 xl:py-1 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-4 py-2 hover:bg-opacity-90">
                <button>
                  <NuxtImg src="/playStore.svg"
                    width="40"
                  />
                </button>
              <div class="flex flex-col">
                <span class="text-sm">Get in on</span>
                <span class="text-lg font-semibold">Google Play</span>
              </div>
          </div>
        </div>
      </a>

      <a class="flex" href="https://apps.apple.com/gt/app/agencies-top-group-express/id1669486980">
        <div class="flex flex-items-center justify-center pt-10 xl:gap-8 xl:pt-8 lg:gap-6 lg:pt-8 sm:gap-6 sm:pt-8 md:gap-8 md:pt-8 rounded-lg text-base font-medium text-white">
          <div class="flex gap-2 rounded-lg bg-primary xl:px-8 xl:py-1 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-4 py-2 hover:bg-opacity-90">
            <button>
              <NuxtImg src="/appStore.svg"
                       width="40"
              />
            </button>
            <div class="flex flex-col">
              <span class="text-sm">Download on the</span>
              <span class="text-lg font-semibold">App Store</span>
            </div>
          </div>
        </div>
      </a>


      <a class="flex" href="https://go.microsoft.com/fwlink/?LinkId=2265055">
        <div class="flex flex-items-center justify-center pt-10 xl:gap-8 xl:pt-8 lg:gap-6 lg:pt-8 sm:gap-6 sm:pt-8 md:gap-8 md:pt-8 rounded-lg text-base font-medium text-white">
          <div class="flex gap-2 rounded-lg bg-primary xl:px-8 xl:py-1 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-4 py-2 hover:bg-opacity-90">
            <button>
              <NuxtImg src="/download.svg"
                       width="40"
              />
            </button>
          </div>
        </div>
      </a>
      </div>
    </div>
      <back-to-top-button/>

</template>
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import BackToTopButton from "~/components/BackToTopButton.vue";
</script>