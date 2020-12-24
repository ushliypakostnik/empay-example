<template>
  <div class="layout">
    <slot name="header">
      <Header>
        <template #right>
          <a
            href="#"
            class="link"
          >Контролы</a>
        </template>
      </Header>
    </slot>
    <main role="main">
      <slot name="body" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';

export default {
  name: 'Layout',

  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.layout {
}
</style>
