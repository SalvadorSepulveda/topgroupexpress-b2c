<template>
  <div>
    <Navbar/>
  </div>
  <div>
      <div class="flex justify-center pt-14 relative">
        <span class="text-2xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl inline bg-gradient-1 bg-clip-text text-transparent">Instale nuestras apps</span>
      </div>
    <div class="flex flex-col justify-center items-center pt-12 gap-2">
      <span class="text-lg xl:text-3xl lg:text-2xl md:text-xl sm:text-lg flex items-center bg-gradient-1 bg-clip-text text-transparent">Interfaz de agencias</span>
    </div>
    <div class="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row items-center justify-center">
      <span class="justify-center p-8 text-sm xl:text-lg lg:text-lg md:text-lg sm:text-lg font-light dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
      <NuxtImg width="600" class="xl:w-[600px] lg:w-[500px] md:[400px] sm:[300px] w-[200px]" src="https://cdn.topgroups.travel/websites/assets/images/agencies.png" />
    </div>

    <div class="flex items-center justify-center gap-8 shadow-card rounded-xl">
      <span class="text-2xl p-2 inline bg-gradient-1 bg-clip-text text-transparent">Codigo QR para la descarga de la app</span>
      <NuxtImg src="/codigoQR.svg"
               width="180"
               class="p-2 xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] w-[100px]"
      />
    </div>

    <div class="flex flex-col items-center xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center xl:gap-4 lg:gap-4 md:gap-4 sm:gap-2">

      <a class="flex" href="https://play.google.com/store/apps/details?id=com.tge.t3agencies&hl=es_419&gl=US">
        <div class="flex flex-items-center justify-center pt-10 xl:gap-8 xl:pt-8 lg:gap-6 lg:pt-8 sm:gap-6 sm:pt-8 md:gap-8 md:pt-8 rounded-lg text-base font-medium text-white">
          <div class="flex gap-2 rounded-lg bg-primary xl:px-8 xl:py-1 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-2 py-1 hover:bg-opacity-90">
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
          <div class="flex gap-2 rounded-lg bg-primary xl:px-8 xl:py-1 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-2 py-1 hover:bg-opacity-90">
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
          <div class="flex gap-2 rounded-lg bg-primary xl:px-10 xl:py-2 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-2 py-1 hover:bg-opacity-90">
            <button>
              <NuxtImg src="/download.svg"
                       width="40"
              />
            </button>
          </div>
        </div>
      </a>
    </div>
    <div class="duration-300" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
    <div class="flex flex-col justify-center items-center p-10 pt-44 gap-2 duration-300">
      <span class="text-lg xl:text-3xl lg:text-2xl md:text-xl sm:text-lg flex items-center bg-gradient-1 bg-clip-text text-transparent">Interfaz de hoteleros</span>
    </div>
    <div class="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row items-center justify-center">
      <NuxtImg width="600" class="xl:w-[600px] lg:w-[500px] md:[400px] sm:[300px] w-[200px]" src="https://cdn.topgroups.travel/websites/assets/images/hoteliers.png" />
      <span class="p-10 justify-center font-light text-sm xl:text-lg lg:text-lg md:text-lg sm:text-lg dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
    </div>


    <div class="flex items-center justify-center gap-8 shadow-card rounded-xl">
      <span class="text-2xl p-2 inline bg-gradient-1 bg-clip-text text-transparent">Codigo QR para la descarga de la app</span>
      <NuxtImg src="/codigoQR.svg"
               width="180"
               class="p-2 xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] w-[100px]"
      />
    </div>

    <div class="flex flex-col items-center xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center xl:gap-4 lg:gap-4 md:gap-4 sm:gap-2">

      <a class="flex" href="https://play.google.com/store/apps/details?id=com.tge.t3hotelier&hl=es&gl=US">
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

      <a class="flex" href="https://apps.apple.com/co/app/hoteliers-top-group-express/id1661978182">
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
          <div class="flex gap-2 rounded-lg bg-primary xl:px-10 xl:py-2 lg:px-10 lg:py-1 md:px-9 md:py-1 sm:px-8 sm:py-1 px-4 py-2 hover:bg-opacity-90">
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
    </div>
      <back-to-top-button/>

</template>
<script>
export default{
  name: 'download'
}
</script>