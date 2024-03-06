<template>
  <ULandingHero
    title="Kontakty"
    :ui="{
        title: 'font-decorative'
      }"
  />
  <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
    <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
      <div class="py-6 md:py-0 md:px-6">
        <h1 class="text-4xl font-bold">
Kontakty        </h1>

        <p class="pt-2 pb-4">
T.J. Sokol Nová Bělá        </p>
        <div class="space-y-4">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span>
Mitrovická 446/501, Ostrava - Nová Bělá, 724 00</span>
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>776705634 - Náčelnice Karla Motyčková</span>
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>sokol.nova.bela(zavináč)email.cz</span>
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>nova_bela(zavináč)sokol.eu</span>
          </p>
        </div>
      </div>
      <form novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        <label class="block">
          <span class="mb-1">Jméno</span>
          <input type="text" placeholder="Zadejte jméno" class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800">
          <div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;" />
        </label>
        <label class="block">
          <span class="mb-1">Email</span>
          <protonpass-control style="" />
          <input type="email" placeholder="Zadejte email" class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" data-protonpass-base-css="{&quot;paddi" style="padding 41.6px !important;">
        </label>
        <label class="block">
          <span class="mb-1">Zpráva</span>
          <textarea rows="3" class="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800" />
        </label>
        <UButton type="submit" size="xs" color="primary" label="Odeslat" class="self-center px-8 py-3"  />
      </form>
    </div>
  </section>
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
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({ targets: '.title', translateX: 250, duration: 800 })
})
</script>
