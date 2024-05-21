<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-bodywhite dark:text-body duration-300 p-5 dark:text-white flex flex-col gap-8" >
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