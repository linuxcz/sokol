<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [
  {
    label: 'Úvodní stránka',
    to: '/'
  },
  {
  label: 'Aktuality',
  to: '/blog'
},
  {
    label: 'Buď Sokolem',
    to: 'bud-sokolem'
  },
  {
    label: 'Projekty',
    to: 'projekty'
  },
  {
    label: 'Historie',
    to: 'historie'
  },
  {
    label: 'Kontakty',
    to: 'kontakty'
  },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
      <span class="font-decorative">Sokol</span><UBadge label="T.J. Nová Bělá" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Administrace" color="gray" to="/login" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
