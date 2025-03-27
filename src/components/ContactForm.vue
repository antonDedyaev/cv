<template>
  <form
    id="contact-form"
    class="contact-form"
    ref="contactForm"
    @submit.prevent="submitMail"
  >
    <h5>Отправить письмо</h5>
    <div class="contact-form__main">
      <VTooltip
        placement="top-end"
        :distance="-20"
        :triggers="[]"
        :shown="result.name.$invalid"
        :autoHide="false"
      >
        <BaseInput
          v-model="mailForm.name"
          name="name"
          label="Имя"
          :is-invalid="result.name.$invalid"
        />
        <template #popper>
          {{ result.name.$messages[0] }}
        </template>
      </VTooltip>

      <VTooltip
        placement="top-end"
        :distance="-20"
        :triggers="[]"
        :shown="result.email.$invalid"
        :autoHide="false"
      >
        <BaseInput
          v-model="mailForm.email"
          name="email"
          label="Email"
          :is-invalid="result.email.$invalid"
        />
        <template #popper>
          {{ result.email.$messages[0] }}
        </template>
      </VTooltip>
    </div>
    <BaseInput
      v-model="mailForm.title"
      name="title"
      label="Тема"
    />
    <VTooltip
      placement="top"
      :distance="-20"
      :triggers="[]"
      :shown="result.message.$invalid"
      :autoHide="false"
    >
      <BaseTextarea
        v-model="mailForm.message"
        name="message"
        label="Сообщение"
        :is-invalid="result.message.$invalid"
      />
      <template #popper>
        {{ result.message.$messages[0] }}
      </template>
    </VTooltip>

    <SubmitButton
      :is-submit-valid="isButtonClicked"
      :is-submit-invalid="isButtonShaking"
    />
  </form>
</template>

<script setup lang="ts">
import 'floating-vue/dist/style.css'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseTextarea from '@/components/UI/BaseTextarea.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import emailjs from 'emailjs-com'

import useValidate from 'vue-tiny-validate'
import { reactive, ref } from 'vue'

const initialForm = {
  name: '',
  email: '',
  title: '',
  message: '',
}

const contactForm = ref(null)
const mailForm = ref(structuredClone(initialForm))
const rules = reactive({
  name: {
    name: 'required',
    test: (value: string) => Boolean(value),
    message: 'Обязательное поле!'
  },
  email: {
    name: 'required',
    test: (value: string) => Boolean(value),
    message: 'Обязательное поле!'
  },
  message: {
    name: 'required',
    test: (value: string) => Boolean(value),
    message: 'Обязательное поле!'
  }
})


const isButtonClicked = ref(false)
const isButtonShaking = ref(false)

const options = reactive({
  autoTest: true,
});

const { result } = useValidate(mailForm, rules, options);
const submitMail = () => {
  result.value.$test();
  if (result.value.$invalid) {
    options.autoTest = true
    isButtonClicked.value = false
    isButtonShaking.value = true
    setTimeout(() => {
      isButtonShaking.value = false
    }, 800)
    return
  }

  try {
    if (contactForm.value) {
      emailjs.sendForm('service_pbxi8bs', 'template_idktcae', contactForm.value,
        'Y3ErrbNfUa6cikmEv',
      )
    }
    options.autoTest = false
    isButtonClicked.value = true
    setTimeout(() => {
      isButtonClicked.value = false
    }, 1500)
  } catch (e) {
    console.log('FAILED...', e);
  } finally {
    mailForm.value = structuredClone(initialForm)
    result.value.$reset()
  }

  setTimeout(() => {
    options.autoTest = true
  }, 100)
}

</script>
<style lang="scss">
.v-popper--theme-tooltip .v-popper__inner {
  color: $orange;
}


</style>
<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  border-radius: 12px;
  padding: 40px;
  background: light-dark($white-base, rgba(255, 255, 255, 0.04));

  &__main {
    display: flex;
    width: 100%;
    gap: 24px;
  }

  h5 {
    margin-bottom: 4px;
    color: light-dark($dark-base, $white-base);
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;

  }
}
.v-popper {
  width: 100%;
}

.button {
  width: 180px;
  height: 50px;
  background: $orange;
  border-radius: 6px;
  font-size: 14px;
  transition: all .3s cubic-bezier(0.67, 0.17, 0.40, 0.83);
  cursor: pointer;


  &__circle {
    width: 50px;
    height: 50px;
    background: $green;
    border-radius: 50%;
    transform: rotate(-180deg);
    pointer-events: none;
  }

  &:hover {
    background: $orange-hover;
  }

  &.shaky {
    animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  span {
    font-size: 18px;
    transition: all .9s;
  }

  svg {
    transform: rotate(180deg);
    transition: all .5s;
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}


</style>