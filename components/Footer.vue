<script setup lang="ts">
const links = [{
  label: 'Povinnné informace',
  children: [{
    label: 'Stanovy ČOS'
  }, {
    label: 'Souhlas se zpracováním osobních údajů'
  }, {
    label: 'Stránky ČOS'
  }]
}, {
  label: 'Ke stažení',
  children: [{
    label: 'Přihláška do Sokola'
  }, {
    label: 'Přihláška na tábor'
  }]
}, {
  label: 'Důležité odkazy',
  children: [{
    label: 'Statutární město Ostrava'
  }, {
    label: 'Moravskoslezská župa'
  }, {
    label: 'ÚMOb Nová Bělá'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit () {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Přihlášen!',
      description: 'Přihlášen k odběru novinek'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup label="Chcete dostávat aktuální informace o dění v Sokole? Nechte nám tu váš email!" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" placeholder="Vložte svůj e-mail" :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl" autocomplete="off" class="max-w-sm" input-class="rounded-full">
                <template #trailing>
                  <UButton type="submit" size="xs" color="primary" :label="loading ? 'Registruji' : 'Registrovat'" :loading="loading" />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. Autorská práva vyhrazena
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton to="#" target="_blank" icon="i-simple-icons-facebook" aria-label="GitHub" color="gray" variant="ghost" />
    </template>
  </UFooter>
</template>
