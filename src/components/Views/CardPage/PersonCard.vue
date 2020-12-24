<template>
  <div class="card-person">
    <div class="card-person__image" />
    <div class="card-person__name">{{ person.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',

  props: {
    person: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

$card-image__height--lg: 14.07vw;
$card-image__height--md: 17.257vw;
$card-image__height--sm: 35.17vw;
$card-image__height--xs: 41.7vw;

.card-person {
  @extend %test-card;

  &__image {
    max-height: 270px;
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
