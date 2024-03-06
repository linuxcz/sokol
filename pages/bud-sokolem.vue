<template>
  <div v-if="page">
    <div class="hero-background">
      <ULandingHero
        title="Buď Sokolem"
        :ui="{
        title: 'text-white font-decorative'
      }"
      />
    </div>
    <ULandingSection> <ULandingCTA
      title="Sokol T.J. Nová Bělá"
      description="Přihlaš se do Sokola"
      align="left"
      card
    >
      <img
        src="/qr-code.png"
        class="w-1/2 rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </ULandingCTA>
    </ULandingSection>
    <UContainer>
    <ULandingFAQ :items="items" multiple class="mt-4" />
    </UContainer>
  </div>
</template>
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
const items = [{
  defaultOpen: true,
  label: 'Jak se mohu stát členem T. J. Sokol Nová Bělá?',
  content: 'Pro přihlášení do T. J. Sokol Nová Bělá použijte elektronickou přihlášku dostupnou na našem webu v sekci "Důležité odkazy" nebo "Ke stažení".',
}, {
  label: 'Jak a kdy obdržím průkaz členství po přihlášení?',
  content: 'Po zaplacení členského příspěvku obdržíte průkaz členství zaslán na e-mailovou adresu uvedenou v přihlášce na začátku následujícího měsíce.',
}, {
  label: 'Jaké jsou členské poplatky pro rok 2023?',
  content: 'Roční poplatek činí 320 Kč pro děti (3–18 let) a seniory (od 65 let), a 620 Kč pro dospělé (18–64 let).',
}, {
  label: 'Jakým způsobem mohu zaplatit členský příspěvek?',
  content: 'Členský příspěvek můžete zaplatit převodem na účet č. 607 207 6001/5500, použijte prvních šest čísel vašeho rodného čísla jako variabilní symbol a do zprávy pro příjemce uveďte "známky 2023" a vaše jméno a příjmení.',
}]
</script>
<style>
.hero-background {
  position: relative;
  min-height: 30vh; /* Minimální výška */
  overflow: hidden;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/sokol.jpeg'); /* Cesta k vašemu obrázku */
  background-size: cover; /* Zajistí, že obrázek pokryje celou plochu */
  background-position: center; /* Centruje obrázek */
  filter: blur(0px); /* Nastaví rozostření */
  z-index: -1; /* Ujistěte se, že pseudoelement je pod obsahem */
}
</style>
