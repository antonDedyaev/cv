<template>
  <div class="base-textarea">
    <label :for="`${label}-textarea`">{{ label }}</label>
    <textarea
      v-model="model"
      :id="`${label}-textarea`"
      :name="name"
      :class="{ invalid: isInvalid }"
      rows="12"
    />
  </div>
</template>

<script setup lang="ts">
interface IBaseTextareaProps {
  name: string;
  label: string;
  isInvalid?: boolean;
}

defineProps<IBaseTextareaProps>()
const model = defineModel({ type: String, required: true })
</script>

<style scoped lang="scss">
.base-textarea{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: light-dark($dark-base, $white-base);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    opacity: 80%;
  }

  textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    resize: none;
    background-color: light-dark($light, $black);
    color: light-dark($dark-base, $white-base);
    opacity: 60%;
  }

  textarea.invalid {
    border: 2px solid $orange;
  }
}
</style>