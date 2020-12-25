<template>
  <div class="card-project">
    <div class="card-project__image" />
    <div class="card-project__name">{{ project.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    project: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

$card-image__height--lg: 18.3vw;
$card-image__height--md: 21.46vw;
$card-image__height--sm: 38.81vw;
$card-image__height--xs: 54.54vw;

.card-project {
  @extend %test-card;

  &__image {
    max-height: 350px;
    margin-bottom: 14px;
    background: $colors__greys--test;
    width: 100%;

    @include lg {
      height: $card-image__height--lg;
    }

    @include md {
      height: $card-image__height--md;
    }

    @include sm {
      height: $card-image__height--sm;
    }

    @include xs {
      height: $card-image__height--xs;
    }
  }

  &__name {
    color: $colors__text;
    @include text($font-size--ssmall, $font-weight--semibold);
  }
}
</style>
