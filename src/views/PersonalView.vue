<template>
  <div :class="bem()">
    <SidePanelVue />
    <PageMain>
      <PageHeader @scroll-to-contacts="scrollToContacts"/>
      <PageSection title="Опыт работы" description="Делай свою работу с удовольствием — и тебе не придется работать всю жизнь.">
        <BaseList :items="experienceEntries" />
      </PageSection>
      <PageSection title="Образование" description="Инвестиции в знания дают наибольшую прибыль.">
        <BaseList :items="educationEntries" />
      </PageSection>
      <PageSection title="Контакты" description="Связаться со мной удобным способом">
        <div
          ref="contactsRef"
          class="contacts-section"
        >
          <ContactForm />
          <ContactsList />
        </div>
      </PageSection>
    </PageMain>
  </div>
</template>

<script setup lang="ts">
import SidePanelVue from '@/components/SidePanel.vue'
import useBem from 'vue3-bem'
import PageHeader from '@/components/PageHeader.vue'
import PageMain from '@/components/PageMain.vue'
import PageSection from '@/components/PageSection.vue'
import BaseList from '@/components/UI/BaseList.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactsList from '@/components/UI/ContactsList.vue'
import { ref } from 'vue'
const bem = useBem('cv-page')

const experienceEntries = [
  {
    id: 'exp-1',
    place: 'ITpelag',
    description:
      [
        `CRM для управления заказами ресторанной сети
      • реализовал миграцию с GQL на REST со стороны фронта
      • реализовал бизнес-задачи
      • внедрил новый функционал, в том числе экраны пользователей по ролевой модели, взаимодействие с кассой (r_keeper) в части печати счетов-фактур через вебсокеты, добавление функционала примечаний для цехов/ресторанов
      • реализовал unit-тесты для админ-модуля
      • проводил рефакторинг кода
      • проводил код-ревью`,
      `Маркетплейс для размещения объявлений о продаже оборудования/услуг в сфере майнинга
      • реализовал пользовательскую часть личного кабинета продавца
      • реализовал страницу блога с загрузкой статей с внешнего API
      • реализовал ui kit и переиспользуемые компоненты
      • реализовал динамические формы создания услуг и товаров по различным категориям
      • реализовал страницу с перечнем услуг конкретного продавца
      • проводил рефакторинг кода`,
      `Сервис по предоставлению функциональности выпуска банковских карт и управлению ими
      • реализовал пользовательскую часть сервиса
      • реализовал ui kit и множество переиспользуемых компонентов
      • реализовал jwt авторизацию с обновлением токенов
      • реализовал выгрузку в csv файл и скачивание файлов с бекенда
      • реализовал графики для отображения пользовательской статистики
      • проводил рефакторинг кода`
      ],
    role: 'Frontend-разработчик',
    period: 'Январь 2024 — настоящее время'
  },
  {
    id: 'exp-2',
    place: 'Only',
    description:
      [
        `Стажировка в компании, в рамках которой:
      • реализовывал адаптивную кроссбраузерную верстку лендингов по макетам Figma согласно БЭМ-методологии
      • разрабатывал классовые компоненты с использованием шаблонизатора PUG
      • разрабатывал и настраивал валидацию форм`
      ],
    role: 'Frontend-разработчик',
    period: 'Сентябрь 2023 - Ноябрь 2023'
  },
  {
    id: 'exp-3',
    place: 'Hotels.ru',
    description:
      [
        `Стажировка в компании, в рамках которой:
        • разрабатывал SPA на стеке TypeScript + React / NextJS
        • разрабатывал переиспользуемые компоненты с добавлением в Storybook
        • писал unit-тесты на фреймворке Jest / RTL`
      ],
    role: 'Frontend-разработчик',
    period: 'Февраль 2023 — Июнь 2023'
  },
  {
    id: 'exp-4',
    place: 'Фриланс',
    description:
      [
        `Приложение CampWeek ("Неделя вожатства")
        • написал логику формы создания эвента и индивидуальной страницы эвента
        • написал и реализовал валидацию формы создания эвента с помощью zod + react-hook-form
        • написал логику запросов через REST API к бэкенду с использованием React-Query и кастомных хуков`
      ],
    role: 'Frontend-разработчик',
    period: 'Декабрь 2022 — Январь 2023'
  },
  {
    id: 'exp-5',
    place: 'NLMK',
    description:
      [
        `• Управление проектом внедрения сервисов автоматизации в отделе переводов (на корпоративном портале)
        • Управление командой переводчиков в рамках оказания переводческих услуг в ГК НЛМК`
      ],
    role: 'Руководитель группы переводов',
    period: 'Май 2015 — Декабрь 2022'
  },
]

const educationEntries = [
  {
    id: 'ed-1',
    place: 'Хекслет',
    description:
      [
        'Курс позволил закрепить и улучшить навыки верстки. В рамках курса делается упор на использование Flex и Grid, дается основательная информация по работе с препроцессорами, а также подробно разбирается применение фреймворка Bootstrap.'
      ],
    role: 'Верстальщик',
    period: 'Ноябрь 2022 - Январь 2023'
  },
  {
    id: 'ed-2',
    place: 'Хекслет',
    description:
      [
        'Курс помог освоить JS и верстку с нуля. В рамках курса, в частности, закреплена теоретическая база по ООП, освоены основы тестирования, написаны и задеплоены SPA на фреймворке React. Основательный теоретический фундамент подкреплен 6 завершенными проектами.'
      ],
    role: 'Frontend-разработчик',
    period: 'Февраль 2022 - Декабрь 2022'
  },
  {
    id: 'ed-3',
    place: 'НГЛУ',
    description:
      [
        'Получил диплом с отличием по специальности лингвист-переводчик. Освоил навыки устного и письменного перевода с немецкого и английского языков.'
      ],
    role: 'Лингвист-переводчик',
    period: 'Сентябрь 2004 - Июнь 2009'
  },
]

const contactsRef = ref<HTMLDivElement | null>(null);

const scrollToContacts = () => {
  if (contactsRef.value) {
    contactsRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<style lang="scss">
.cv-page {
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 32px 0;
}

.contacts-section {
  width: 100%;
  display: flex;
  gap: 24px;
}
</style>
