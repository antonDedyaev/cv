<template>
  <div :class="bem()">
    <div :class="bem('title')">
      <span>{{ title }}</span>
      <span>{{ level }}%</span>
    </div>
    <div :class="bem('bar-underlay')">
      <div :class="bem('bar-progress')" :data-progress="level" ref="progressRef"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useBem from 'vue3-bem'
const bem = useBem('skill')

defineProps({
  title: { type: String, required: true },
  level: { type: Number, required: true }
})

const progressRef = ref<HTMLDivElement | null>(null)

const showProgress = () => {
  const widthValue = progressRef.value?.dataset.progress
  if (progressRef.value && widthValue) {
    progressRef.value.style.opacity = '1'
    progressRef.value.style.width = `${widthValue}%`
  }
}

const hideProgress = () => {
  const widthValue = progressRef.value?.dataset.progress
  if (progressRef.value && widthValue) {
    progressRef.value.style.opacity = '0'
    progressRef.value.style.width = '0'
  }
}

onMounted(() => {
  const sectionPosition = document.querySelector('.major-skills__list')?.getBoundingClientRect().top
  const screenPosition = window.innerHeight

  window.addEventListener('scroll', () => {
    if (sectionPosition && sectionPosition < screenPosition) {
      showProgress()
    } else {
      hideProgress()
    }
  })
})
</script>


<style lang="scss">
.skill {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__title {
    display: flex;
    justify-content: space-between;

    margin-bottom: 8px;

    span {
      color: light-dark($dark-base, $white-base);
      font-style: normal;
    }

    span:nth-child(1) {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }

    span:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;

      opacity: 0.6;
    }
  }
  &__bar-underlay {
    width: 100%;
    height: 4px;

    border-radius: 4px;
    background: $bar-black;
  }

  &__bar-progress {
    width: 0;
    height: 4px;

    border-radius: 4px;
    background: $orange;

    opacity: 0;
    transition: width 1s ease;
  }
}
</style>
