<template>
    <main>
        <section class="pt-[150px] pb-[110px] lg:pt-[220px]">
            <div class="container overflow-hidden lg:max-w-[1250px]">
                <div class="mx-auto w-full max-w-[570px]">
                    <div
                        class="wow fadeInUp mb-8 w-full"
                        data-wow-delay=".2s"
                    >
                        <img
                            src="@/assets/images/404/404.svg"
                            alt="404"
                            class="mx-auto max-w-full"
                        />
                    </div>

                    <div
                        class="wow fadeInUp text-center"
                        data-wow-delay=".2s"
                    >
                        <h2
                            class="mb-[18px] text-[28px] font-bold text-black dark:text-white sm:text-[35px]"
                        >
                            Lo siento, la página no existe
                        </h2>
                        <p
                            class="mb-[30px] text-base font-medium text-body sm:text-lg"
                        >
                            La página que estas buscando parece que ha sido
                            movida, eliminada o no existe.
                        </p>

                        <router-link
                            to="/"
                            class="inline-flex justify-center rounded-md bg-primary py-3 px-8 text-base font-medium text-white hover:bg-opacity-90"
                        >
                            Ir al Inicio
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
