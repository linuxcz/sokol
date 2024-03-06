<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div v-if="page">
    <ULandingHero

      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      :ui="{
        title: 'font-decorative'
      }"
    >

      <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />

      <template #headline>
        <Logo class="w-auto h-14 text-center mx-auto" />

      </template>
    </ULandingHero>
    <div data-aos="fade-up">

    <ULandingSection
      headline="Vztah k pohybu"
      title="Sport"
      description="Sokol přináší sport pro každého bez rozdílu věku a příjmu. Rozvíjí tělesnou zdatnost svých členů i ostatních. Pohyb považuje za součást zdravého životního stylu. Lidem pomáhá nacházet v pohybu radost."
      align="left"
      :ui="{
        title: 'font-decorative'
      }"
    >
<Alphabet alphabet="S" background-image="https://www.sokol.eu/assets/img/sections/sport.png" />




    </ULandingSection>
    </div>

    <div data-aos="fade-right">

    <ULandingSection
      headline="Vztak k zemi"
      title="Občanství"
      description="Sokol je vlastenecký v nejlepším smyslu slova. Své členy vede k lásce k rodné zemi a k úctě k duchovnímu dědictví našeho národa. Sokolové jsou hrdými, angažovanými občany své země, České republiky."
      align="right"
      :ui="{
        title: 'font-decorative'
      }"
    >
      <Alphabet alphabet="O" background-image="https://www.sokol.eu/assets/img/sections/obcanstvi.png" />
    </ULandingSection>
    </div>
    <div data-aos="fade-right">

    <ULandingSection
      headline="Vztah k Obci"
      title="Komunita"
      description="Sokol je místem setkávání a společné činnosti. Sokolové jsou aktivní silou ve své obci, hybatelem sportovních a kulturních aktivit. Sokolové jsou hrdí na svou vlastní tradici, kterou drží v úctě."
      align="left"
      :ui="{
        title: 'font-decorative'
      }"
    >
      <Alphabet alphabet="K" background-image="https://www.sokol.eu/assets/img/sections/i7l3BlNZwL.png" />
    </ULandingSection>
      </div>
    <div data-aos="fade-left">

    <ULandingSection
      headline="Vztah k Sobě"
      title="Osobnost"
      description="Sokol usiluje o celkový rozvoj osobnosti člověka. Vede své členy k čestnému a spravedlivému jednání, k aktivitě, samostatnosti a ke schopnosti pomáhat. Sokolským ideálem je člověk silný tělem i duchem."
      align="right"
      :ui="{
        title: 'font-decorative'
      }"
    >
      <Alphabet alphabet="O" background-image="https://www.sokol.eu/assets/img/sections/osobnost.png" />
    </ULandingSection>
    </div>
    <div data-aos="fade-right">

    <ULandingSection
      headline="Vztah k druhému"
      title="Laskavost"
      description="Sokol je otevřený všem, kdo věří v sokolské hodnoty. Vede své členy ke skromnosti, k respektu k druhým, k pomoci slabším a ke vzájemné snášenlivosti. Buduje sounáležitost mezi generacemi. "
      align="left"
      :ui="{
      title: 'font-decorative'
      }"
      >
      <Alphabet alphabet="L" background-image="https://www.sokol.eu/assets/img/sections/laskavost.png" />
      </ULandingSection>
    </div>
<UContainer>
  <ULandingSection title="Partneři a sponzoři"
                   :ui="{
      title: 'font-decorative'
      }"
  >
  <NuxtMarquee auto-fill>

  <ULandingLogos title="" align="center">

    <img src="https://www.novabela.cz/assets/Image.ashx?id_org=81205&id_obrazky=2177" class="w-auto h-32 flex-shrink-0" />
      <img src="https://www.novabela.cz/assets/Image.ashx?id_org=81205&id_obrazky=2175" class="w-auto h-10 flex-shrink-0" />
      <img src="https://sokol.eu/assets/img/footer/nsa.svg" class="w-auto h-10 flex-shrink-0" />
      <img src="https://sokol.eu/assets/img/footer/Ministerstvo%20skolstvi_logo.svg" class="w-auto h-10 flex-shrink-0" />
      <img src="https://www.cuscz.cz/images/logo_header.png" class="w-auto h-10 flex-shrink-0" />
      <img src="https://www.novabela.cz/assets/Image.ashx?id_org=81205&id_obrazky=1788&datum=12%2F11%2F2014+9%3A23%3A09+AM" class="w-auto h-10 flex-shrink-0" />
      <img src="https://www.sokol.eu/assets/img/logo.svg" class="w-auto h-10 mr-10 flex-shrink-0" />


    </ULandingLogos>
  </NuxtMarquee>
  </ULandingSection>

</UContainer>
    <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description"     :ui="{
        title: 'font-decorative'
      }">
      <UPageColumns class="xl:columns-4">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" class="bg-gray-100/50 dark:bg-gray-800/50" />
        </div>
      </UPageColumns>
    </ULandingSection>
    <div data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">

    <ULandingSection>
      <ULandingCTA v-bind="page.cta" class="bg-gray-100/50 dark:bg-gray-800/50"     :ui="{
        title: 'font-decorative'
      }" />
    </ULandingSection>
    </div>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}
</style>
