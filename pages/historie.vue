<template>
  <div>
    <UContainer class="mb-8">
      <ULandingHero
        title="Historie"
        description="Historie tělovýchovné jednoty Sokol v Nové-Bělé"
        :ui="{
        title: 'font-decorative'
      }"
      />
      <p class="mb-10">Tělocvičná jednota Sokol byla v Nové Bělé založena 29. září 1912. Ustavující valná hromada se konala v sále hostince p. Emila Rokyty., což je nynější restaurace Na Fojství. V tomto sále se také v prvních letech cvičilo. Brzy pro velký zájem a nedostatek místa využívali novobělští Sokoli pro cvičení i tělocvičnu školy.</p>

      <p class="mb-10">V roce 1930 byl zakoupen pozemek na stavbu vlastního hřiště a v roce 1937 byl na tomto hřišti postaven zděný pavilón.</p>

      <p class="mb-10">V roce 1975 se začalo s budování tenisových dvorců na pozemcích za hřištěm, slavnostní otevření kurtů se konalo 9. května 1977. V roce 1994 byly na hřišti postaveny nové zděné toalety a antukovna,</p>

      <p class="mb-10">V roce 2012 bylo zrušeno nevyhovující sociálního zařízení a klubovny (šatny) z unimobuněk na kurtech, Rekonstrukcí sociálního zařízení s antukovnou získali nejen tenisté útulnou klubovnu.V roce 2013 byla na tenisových kurtech vybudována opěrná zeď a dostavěn třetí kurt.</p>

      <p class="mb-10">V posledních letech došlo na sokolském hřišti k velkým změnám. V rámci projektu rekonstrukce hřiště byly realizovány dvě velké stavby – víceúčelový kurt a asfaltový ovál.</p>

      <p class="mb-10">Asfaltový ovál se realizoval ve dvou etapách. Nejdříve byla provedena spodní stavba, obrubníky a první asfaltová vrstva. V druhé etapě byla realizována horní obrusná vrstva. Šířka oválu je 3 metry, délka 200 metrů. Je možno ho využívat pro jízdu na kole i na kolečkových bruslích. Na stavbu v první etapě přispěly Ostravské komunikace částkou 150 000 Kč a firma Artechnic – Schréder a.s. částkou 100 000 Kč. Ve druhé etapě na dokončení oválu přispělo Statutární město Ostrava částkou 200 000 Kč.</p>

      <p class="mb-10">Na realizaci víceúčelové hřiště přispělo statutární město Ostrava částkou 400 000 Kč. Zbylé náklady byly hrazeny z peněz, které naše jednota získala prodejem pozemku pro výstavbu mateřské školky.</p>

      <p class="mb-10">Rekonstruované hřiště využívají členové TJ Sokol Nová Bělá pro svou činnost, je k dispozici škole pro hodiny tělesné výchovy. Víceúčelové hřiště může využívat i veřejnost. S Úřadem městského obvodu Nová Bělá jsme se dohodli, že každý čtvrtek od 17 hodin bude k dispozici veřejnosti zdarma. O využití v dalších dnech informace podá a objednávky přijímá správce hřiště.</p>
      <p class="mb-10">Za kurtem je volně přístupný koš na streetball.</p>
      <p class="mb-10">Součástí areálu je i dětské hřiště, které je hojně využíváno rodiči s dětmi. Zařízení tohoto hřiště průběžně doplňujeme.</p>

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
