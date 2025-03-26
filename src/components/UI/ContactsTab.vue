<script setup lang="ts">
import useBem from 'vue3-bem'
const bem = useBem('contacts')
</script>

<template>
  <table :class="bem()">
    <tbody>
      <tr>
        <td>Email</td>
        <td>antondedyaev@gmail.com</td>
      </tr>
      <tr>
        <td>Телефон</td>
        <td>89205025834</td>
      </tr>
      <tr>
        <td>Гражданство</td>
        <td>Россия</td>
      </tr>
      <tr>
        <td>Город</td>
        <td>Липецк</td>
      </tr>
      <tr>
        <td>Язык</td>
        <td>Английский, Немецкий</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.contacts {
  padding: 24px 0;

  @include divider;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  tr {
    display: flex;
    justify-content: space-between;
  }

  td {
    color: light-dark($dark-base, $white-base);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  td:last-child {
    opacity: 0.6;
  }
}
</style>
