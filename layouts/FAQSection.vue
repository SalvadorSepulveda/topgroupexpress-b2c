<template>
	<section id="faq" class="relative z-10 bg-[#F8FAFB] py-[110px] dark:bg-[#15182B] duration-300"	>
		<SectionTitle :title="$t('frequentAnswerTitle')" >
			{{ $t('frequentAnswerDescription')}}
		</SectionTitle>

		<div class="container">
			<div class="faqs mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark duration-300" >

				<FAQCard :title="$t('question1')">
					{{ $t('answer1') }}
				</FAQCard>

				<FAQCard :title="$t('question2')">
					{{ $t('answer2') }}
					<br><br>
					{{ $t('question2_1') }}
					<br><br>
					{{ $t('answer2_1') }}
					<br><br>
					{{ $t('question2_2') }}
					<br><br>
					{{ $t('answer2_2') }}
				</FAQCard>

				<FAQCard :title="$t('question3')">
					{{ $t('answer3')  }}
					<br><br>
					{{ $t('question3_1') }}
					<br><br>
					{{ $t('answer3_1') }}
					<br><br>
					{{ $t('question3_2') }}
					<br><br>
					{{ $t('answer3_2') }}
					<br><br>
					{{ $t('information1') }}
					<br>
					{{ $t('information2') }}
					<br>
					{{ $t('information3') }}
					<br><br>
					{{ $t('answer3_3') }}
				</FAQCard>

				<FAQCard :title="$t('question4')">
					{{ $t('answer4') }}
				</FAQCard>

				<FAQCard :title="$t('question5')">
					{{ $t('answer5') }}
					<a href="https://agencies.topgroupexpress.com/" class="text-primary">{{ $t('answer5TextLink')}}</a>
					{{ $t('answer5_1') }}
				</FAQCard>
			</div>
		</div>

		<!-- Graphics -->
		<div class="absolute right-0 -top-24 -z-10">
			<svg
				width="95"
				height="190"
				viewBox="0 0 95 190"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="95"
					cy="95"
					r="77"
					stroke="url(#paint0_linear_47_27)"
					stroke-width="36"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_47_27"
						x1="0"
						y1="0"
						x2="224.623"
						y2="130.324"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EA621F" />
						<stop offset="1" stop-color="#ffddb4" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="absolute left-0 -bottom-24 -z-10">
			<svg
				width="95"
				height="190"
				viewBox="0 0 95 190"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cy="95"
					r="77"
					stroke="url(#paint0_linear_47_26)"
					stroke-width="36"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_47_26"
						x1="-117.84"
						y1="190"
						x2="117.828"
						y2="25.9199"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EA621F" />
						<stop offset="0.541667" stop-color="#EA621F" />
						<stop offset="1" stop-color="#FF765D" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</section>
</template>
