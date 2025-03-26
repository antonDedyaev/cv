<template>
  <ul class="contacts-list">
    <ContactsListCard
      v-for="item in contactsMedia"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>
<script setup lang="ts">
import ContactsListCard from '@/components/UI/ContactsListCard.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconHabr from '@/components/icons/IconHabr.vue'

const contactsMedia = [
  {
    id: 1,
    name: 'Telegram',
    component: IconTelegram,
    address: '@dedyaev_anton',
    link: 'https://t.me/dedyaev_anton'
  },
  {
    id: 2,
    name: 'LinkedIn',
    component: IconLinkedIn,
    address: 'linkedin.com/in/antondedyaev',
    link: 'https://www.linkedin.com/in/antondedyaev'
  },
  {
    id: 3,
    name: 'Habr Career',
    component: IconHabr,
    address: 'career.habr.com/antonnewby',
    link: 'https://career.habr.com/antonnewby'
  }
]
</script>


<style scoped lang="scss">
.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
}
</style>