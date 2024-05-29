<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-bodywhite dark:text-body duration-300 p-5 dark:text-white flex flex-col gap-8" >
			<div class="flex flex-col gap-2">
				<div class="w-full flex justify-center pb-8">
					<generic-fancy-text class="text-primary text-6xl font-bold pt-14 leading-[5rem]">{{ $t('titlePrivacy') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionPrivacy') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleResponsable') }}</generic-fancy-text>
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
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleNormativo') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionNormativo') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleProteccion') }}</generic-fancy-text>
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
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleObtencion') }}</generic-fancy-text>
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
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleDerechosUsuario') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionDerechosUsuario1_1') }} product@topgroupexpress.com {{ $t('descriptionDerechosUsuario1_2') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleFinalidad') }}</generic-fancy-text>
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
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleSeguridadPersonales') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionSeguridadPersonales') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleContenidoTerceros') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionContenidoTerceros') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleLegitimacionDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionLegitimacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleConservacionDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionConservacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleExactitudDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionExactitudDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleCambioPrivacidad') }}</generic-fancy-text>
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
		<div class="absolute top-0 right-0 -z-10">
			<svg
				width="602"
				height="1154"
				viewBox="0 0 602 1154"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.25" filter="url(#filter0_f_26_84)">
					<circle
						cx="577"
						cy="577"
						r="317"
						fill="url(#paint0_linear_26_84)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_26_84"
						x="0"
						y="0"
						width="1154"
						height="1154"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="130"
							result="effect1_foregroundBlur_26_84"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_26_84"
						x1="183.787"
						y1="894"
						x2="970.173"
						y2="346.491"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#8EA5FE" />
						<stop offset="0.541667" stop-color="#BEB3FD" />
						<stop offset="1" stop-color="#90D1FF" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute left-0 bottom-1/2 -z-10 hidden md:block">
			<svg
				width="632"
				height="1179"
				viewBox="0 0 632 1179"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.25" filter="url(#filter0_f_38_24)">
					<circle
						cx="42.5"
						cy="589.5"
						r="329.5"
						fill="url(#paint0_linear_38_24)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_38_24"
						x="-547"
						y="0"
						width="1179"
						height="1179"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="130"
							result="effect1_foregroundBlur_38_24"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_38_24"
						x1="-366.218"
						y1="919"
						x2="451.176"
						y2="349.901"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#8EA5FE" />
						<stop offset="0.541667" stop-color="#BEB3FD" />
						<stop offset="1" stop-color="#90D1FF" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute left-0 bottom-20 -z-10 hidden md:block">
			<svg
				width="622"
				height="1236"
				viewBox="0 0 622 1236"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.2" filter="url(#filter0_f_26_85)">
					<circle
						cx="4"
						cy="618"
						r="368"
						fill="url(#paint0_linear_26_85)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_26_85"
						x="-614"
						y="0"
						width="1236"
						height="1236"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="125"
							result="effect1_foregroundBlur_26_85"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_26_85"
						x1="-364"
						y1="250"
						x2="506.12"
						y2="754.835"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FF8FE8" />
						<stop offset="1" stop-color="#FFC960" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute right-0 top-1/2 -z-10">
			<svg
				width="637"
				height="1277"
				viewBox="0 0 637 1277"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.2" filter="url(#filter0_f_38_23)">
					<circle
						cx="638.5"
						cy="638.5"
						r="388.5"
						fill="url(#paint0_linear_38_23)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_38_23"
						x="0"
						y="0"
						width="1277"
						height="1277"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="125"
							result="effect1_foregroundBlur_38_23"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_38_23"
						x1="250"
						y1="250"
						x2="1168.59"
						y2="782.957"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FF8FE8" />
						<stop offset="1" stop-color="#FFC960" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>