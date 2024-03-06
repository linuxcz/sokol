<!--<template>
  <div class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4">

    <div class="aspect-w-16 aspect-h-9 rounded-lg border border-dashed border-gray-900/10 dark:border-white/10 flex justify-center items-center bg-red-600">
      <div class="flex items-center justify-center h-full w-full">
        <p class="text-center text-white font-decorative text-9xl">{{ props.alphabet }}</p>
      </div>
    </div>
  </div>
</template>-->
<template>
  <div class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4">

    <div class="aspect-w-16 aspect-h-9 rounded-lg border border-dashed border-gray-900/10 dark:border-white/10 flex justify-center items-center bg-cover" :style="{ backgroundImage: 'url(' + props.backgroundImage + ')' }">
      <div class="flex items-center justify-center h-full w-full">
        <p class="text-center text-white font-decorative text-9xl">{{ props.alphabet }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// Definice typu pro props
type Props = {
  alphabet: string;
  backgroundImage: string
}

// Definice props s typem
const props = defineProps<Props>();
</script>
