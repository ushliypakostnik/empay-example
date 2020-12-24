<template>
  <Layout class="page404">
    <template #body>
      <div class="container">
        <div>
          <h1>404</h1>
          <h3>{{ $t('page404.text') }}</h3>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'NotFound',

  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    .container {
      height: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        text-align: center;
      }
    }

    h1 {
      color: $colors__primary;
      margin: 0;
      @include text($font-size--large, $font-weight__bold);
    }

    h3 {
      margin: 0;
      @include text($font-size--normal, $font-weight__bold);
    }
  }
</style>
