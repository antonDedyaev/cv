<template>
  <aside :class="bem()">
    <AvatarTab />
    <ContactsTab />
    <MajorSkillsTab />
    <ExtraSkillsTab />
    <div :class="bem('download')">
      <MainButton
        href="/Dedyaev_AN_Frontend_CV.pdf"
        download="Dedyaev_AN_cv.pdf"
        shape="square"
      >
          Скачать мое резюме
        <img src="/cloud-download.svg" alt="Avatar photo"/>
      </MainButton>
    </div>
  </aside>
</template>

<script setup lang="ts">
import useBem from 'vue3-bem'
import AvatarTab from '@/components/UI/AvatarTab.vue'
import ContactsTab from '@/components/UI/ContactsTab.vue'
import MajorSkillsTab from './UI/MajorSkillsTab.vue'
import ExtraSkillsTab from './UI/ExtraSkillsTab.vue'
import MainButton from './UI/MainButton.vue'
const bem = useBem('side-menu')
</script>

<style lang="scss">
.side-menu {
  position: sticky;
  top: 30px;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  border-radius: 12px;
  background: light-dark($white-base, $dark-base);
  font-family: "Marmelad", sans-serif;

  &__download {
    display: flex;
    justify-content: center;
    padding: 24px 0;
  }
}
</style>
