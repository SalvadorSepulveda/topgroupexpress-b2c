<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-body p-5 dark:text-white flex flex-col gap-8" >
			<div class="flex flex-col gap-2">
				<div class="w-full flex justify-center pb-8">
					<FancyText class="text-primary text-6xl font-bold">{{ $t('titlePrivacy') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionPrivacy') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleResponsable') }}</FancyText>
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
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleNormativo') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionNormativo') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleProteccion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionProteccion') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Proteccion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Proteccion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Proteccion') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleObtencion') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionObtencion') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Obtencion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Obtencion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Obtencion') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleDerechosUsuario') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionDerechosUsuario1_1') }} product@topgroupexpress.com {{ $t('descriptionDerechosUsuario1_2') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleFinalidad') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionFinalidad') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Finalidad') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Finalidad') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Finalidad') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleSeguridadPersonales') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionSeguridadPersonales') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleContenidoTerceros') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionContenidoTerceros') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleLegitimacionDatos') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionLegitimacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleConservacionDatos') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionConservacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleExactitudDatos') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionExactitudDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<FancyText class="text-primary text-3xl font-bold">{{ $t('titleCambioPrivacidad') }}</FancyText>
				</div>
				<p>
					{{ $t('descriptionCambioPrivacidad') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<p>
					{{ $t('lastUpdateTerms') }}
				</p>
			</div>
		</div>
		<!-- Graphics -->
		<div class="absolute top-0 -right-24 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/purple-shadow-right.png" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute -left-24 bottom-1/2 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/purple-shadow-left.png" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute -left-24 bottom-20 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/orange-shadow-left.png" class="w-[622px] h-[1236px]" />
		</div>
		<div class="absolute -right-24 top-1/2 -z-10">
			<NuxtImg loading="lazy" src="https://cdn.topgroups.travel/websites/assets/images/orange-shadow-right.png" class="w-[622px] h-[1236px]" />
		</div>
	</div>
</template>
<script setup lang="ts">
</script>