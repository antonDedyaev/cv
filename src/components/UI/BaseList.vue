<template>
  <ul class="base-list">
    <BaseListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      v-intersect="() => visibleItems.add(item.id)"
      :class="{ 'slide-in-from-bottom': visibleItems.has(item.id) }"
    />
  </ul>
</template>

<script setup lang="ts">
import BaseListItem from '@/components/UI/BaseListItem.vue'
import type ListRecord from '@/models/listRecord.model'
import { type DirectiveBinding, ref } from 'vue'

interface IBaseListProps {
  items: ListRecord[]
}
defineProps<IBaseListProps>()

const visibleItems = ref(new Set())
const vIntersect = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          binding.value(entry)
          observer.unobserve(el)
        }
      },
      { threshold: 0.18 }
    )
    observer.observe(el)
  }
}
</script>

<style scoped lang="scss">
.base-list {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  background: light-dark($white-base, $dark-base);
  border-radius: 8px;

  li:not(:last-child) {
    border-bottom: 1.5px solid light-dark(#FAFAFA, rgba(255, 255, 255, 0.1));
  }
}

li {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.3s ease-out, transform 0.6s ease-out;
}

.slide-in-from-bottom {
  opacity: 1;
  transform: translateY(0);
  animation: slideInFromBottom 0.6s ease-out forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>