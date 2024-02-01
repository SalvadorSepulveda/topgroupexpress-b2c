<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-body p-5 dark:text-white flex flex-col gap-8" >
			<div class="flex flex-col gap-2">
				<div class="w-full flex justify-center pb-8">
					<FancyText class="text-primary text-6xl font-bold">{{ $t('titleTerms') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionTerms1') }}
				</p>
				<p>
					{{ $t('descriptionTerms2') }}
				</p>
				<p>
					{{ $t('descriptionTerms3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleSocial') }}</FancyText>
				</div>
				<ul>
					<li>
						{{ $t('razonSocial') }}
					</li>
					<li>
						{{ $t('titular') }}
					</li>
					<li>
						{{ $t('domicilioSocial') }}
					</li>
					<li>
						{{ $t('codigoPostal') }}
					</li>
					<li>
						{{ $t('poblacion') }}
					</li>
					<li>
						{{ $t('provincia') }}
					</li>
					<li>
						{{ $t('cif') }}
					</li>
					<li>
						{{ $t('telefonoSocial') }}
					</li>
					<li>
						{{ $t('correoElectronico') }} product@topgroupexpress.com
					</li>
					<li>
						{{ $t('datosRegistrales') }}
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titlePrincipios') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionPrincipios') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle1') }}
				</span>
						<span>
					{{ $t('principioText1') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle2') }}
				</span>
						<span>
					{{ $t('principioText2') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle3') }}
				</span>
						<span>
					{{ $t('principioText3') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle4') }}
				</span>
						<span>
					{{ $t('principioText4') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titlePersonales') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionPersonales') }}
				</p>
				<p>
					{{ $t('textPersonales') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleDerechos') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionDerechos') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('derecho1') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho2') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho3') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho4') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho5') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('derechop1') }}
				</p>
				<p>
					{{ $t('derechop2_1') }} product@topgroupexpress.com {{ $t('derechop2_2') }}
				</p>
				<p>
					{{ $t('derechop3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleTratamiento') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionTratamiento') }}
				</p>
				<p>
					{{ $t('tratamientoSection1') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('tratamientoTitle1') }}
				</span>
						<span>
					{{ $t('tratamientoText1') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('tratamientoSection2') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('tratamiento1') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento2') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento3') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento4') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho5') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('tratamientoSection3') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
						<a href="">
							Facebook
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Twitter
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Linkedin
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Youtube
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Instagram
						</a>
					</li>
				</ul>
				<p>
					{{ $t('tratamientop2') }}
				</p>
				<p>
					{{ $t('tratamientop3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleSeguridad') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionSeguridad') }}
				</p>
				<p>
					{{ $t('textSeguridad1') }} Cloudflare. {{ $t('textSeguridad2') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleContenido') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionContenido') }}
				</p>
				<p>
					{{ $t('textContenido') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleCookies') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionCookies') }}
				</p>
				<p>
					{{ $t('textCookies') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleLegitimacion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionLegitimacion') }}
				</p>
				<p>
					{{ $t('textLegitimacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleCategorias') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionCategorias') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
						{{ $t('categorias1') }}
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleConservacion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionConservacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleNavegacion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionNavegacion1_1') }} https://topgroupexpress.com {{ $t('descriptionNavegacion1_2') }}
				</p>
				<p>
					{{ $t('textNavegacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleExactitud') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionExactitud') }}
				</p>
				<p>
					{{ $t('textExactitud') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleAceptacion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionAceptacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleRevocabilidad') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionRevocabilidad1_1') }} product@topgroupexpress.com {{ $t('descriptionRevocabilidad1_2') }}
				</p>
				<p>
					{{ $t('textRevocabilidad') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleCambio') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionCambio') }}
				</p>
				<p>
					{{ $t('textCambio') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{{ $t('lastUpdateTerms') }}
				</p>
			</div>
		</div>
		<!-- Graphics -->
		<div class="absolute top-0 right-0 -z-10">
			<NuxtImg loading="lazy" src="graphics/purple-shadow-right.svg" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute left-0 bottom-1/2 -z-10">
			<NuxtImg loading="lazy" src="graphics/purple-shadow-left.svg" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute left-0 bottom-20 -z-10">
			<NuxtImg loading="lazy" src="graphics/orange-shadow-left.svg" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute right-0 top-1/2 -z-10">
			<NuxtImg loading="lazy" src="graphics/orange-shadow-right.svg" class="w-[622px] h-[1236px]" />
		</div>
	</div>
</template>
<script setup lang="ts">
</script>