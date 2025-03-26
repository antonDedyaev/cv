<template>
  <li>
    <a class="contacts-list-card"
       :href="item.link"
       target="_blank"
    >
      <div class="contacts-list-card__header">
        <Component :is="item.component" />
        <h1>{{ item.name }}</h1>
      </div>
      <h4>{{ item.address }}</h4>
    </a>
  </li>
</template>

<script setup lang="ts">
import type ContactsItem from '@/models/contactsItem.model'

interface IContactsListCardProps {
  item: ContactsItem
}

defineProps<IContactsListCardProps>()
</script>


<style scoped lang="scss">
.contacts-list-card {
  width: 324px;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border-radius: 12px;
  background: light-dark($white-base, rgba(255, 255, 255, 0.04));
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background: light-dark($white-base, rgba(255, 255, 255, 0.08));
  }

  h1 {
    font-size: 30px;
    max-width: 0;
    height: 30px;
    overflow: hidden;
    color: light-dark($dark-base, $white-base);
    white-space: nowrap;
    transition: max-width 0.35s linear 0.1s;
  }

  h4 {
    text-decoration: none;
    color: light-dark($dark-base, $white-base);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__header:hover {
    h1 {
      max-width: 200px;
    }
  }
}
</style>