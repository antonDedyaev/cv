<template>
  <li :class="bem()">
    <div :class="bem('content-block', 'left')">
      <h3>{{ item.place }}</h3>
      <ColoredTag :text="item.period" shape="square"/>
    </div>
    <div
      ref="descriptionRef"
      :class="[bem('content-block', 'right'), { expandable: !isExpanded, expanded: isExpanded } ]"
    >
      <h3>{{ item.role }}</h3>
      <p
        v-for="(paragraph, index) in item.description"
        :key="paragraph"
        :class="{ visible: index === 0 || isExpanded }"
        :style="{ transitionDelay: `${index * 0.11}s` }"
      >
        {{ paragraph }}
      </p>
    </div>
    <div :class="bem('expand-btn')">
      <ExpandButton
        v-if="isExpandable"
        :is-expanded="isExpanded"
        @click="toggleExpandContent"
      />
    </div>
  </li>

</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
import type ListRecord from '@/models/listRecord.model'
import ColoredTag from '@/components/UI/ColoredTag.vue'
import { ref } from 'vue'
import ExpandButton from '@/components/UI/ExpandButton.vue'

const bem = useBem('list-item')

interface IListItemProps {
  item: ListRecord
}

const props = defineProps<IListItemProps>()

const isExpanded = ref(false)
const isExpandable = ref(props.item.description.length > 1)

const toggleExpandContent = () => {
  isExpanded.value = !isExpanded.value
}

</script>

<style scoped lang="scss">
.list-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 40px 0 50px;

  &__content-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: light-dark($dark-base, $white-base);

    &--left {
      width: 25%;

      h3 {
        font-weight: 600;
      }
    }

    &--right {
      width: 75%;

      h3 {
        font-weight: 500;
      }

      p {
        opacity: 0;
        white-space: pre-line;
      }

      p.visible {
        opacity: 0.5;
      }
    }
  }

  &__expand-btn {
    position: absolute;
    bottom: 15px;
    left: 45%;
  }

  .expandable {
    max-height: 180px;
    overflow: hidden;
    transition: max-height 0.5s ease 0.05s;

    p {
      transition: opacity 1.2s ease;
    }
  }

  .expanded {
    max-height: 1000px;
    transition: max-height 0.7s ease 0.05s;

    p {
      transition: opacity 0.5s ease;
    }
  }


}
</style>