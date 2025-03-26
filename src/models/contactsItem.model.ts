import type { Component } from 'vue'

export default interface ContactsItem {
  id: number;
  name: string;
  component: Component | string;
  address: string;
  link: string;

}