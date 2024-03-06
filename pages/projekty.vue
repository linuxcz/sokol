<template>
  <div>
    <ULandingHero
      title="Projekty"
      description="Projekty pořádané T.J. Sokol Nová Bělá"
      :ui="{
        title: 'font-decorative'
      }"
    />
    <UContainer class="mb-8">
      <ULandingGrid>
        <ULandingCard
          class="col-span-6 row-span-4"
          title="Tábory"
          description="Od roku 1999 jsme se podíleli na organizování sokolských táborů ve spolupráci s Beskydskou župou Jana Čapka, od roku 2005 je hlavním organizátorem Tělocvičná jednota Sokol Nová Bělá."
          to="/bud-sokolem"
        >
        <img
          src="/camp.jpeg"
          class="w-full rounded-md"
        />
        </ULandingCard>
        <ULandingCard
          class="col-span-6 row-span-4"
          title="Turistika"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
          to="/bud-sokolem"
        >
          <img
            src="/turist.jpeg"
            class="w-full rounded-md"
          />
        </ULandingCard>

      </ULandingGrid>
      <ULandingGrid>
        <ULandingCard
          class="col-span-6 row-span-4"
          title="Tábory"
          description="Od roku 1999 jsme se podíleli na organizování sokolských táborů ve spolupráci s Beskydskou župou Jana Čapka, od roku 2005 je hlavním organizátorem Tělocvičná jednota Sokol Nová Bělá."
          to="/bud-sokolem"
        >
          <img
            src="/camp.jpeg"
            class="w-full rounded-md"
          />
        </ULandingCard>
        <ULandingCard
          class="col-span-6 row-span-4"
          title="Turistika"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
          to="/bud-sokolem"
        >
          <img
            src="/turist.jpeg"
            class="w-full rounded-md"
          />
        </ULandingCard>

      </ULandingGrid>

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
</script>
