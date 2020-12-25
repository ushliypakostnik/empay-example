<template>
  <div class="card-friend">
    <div class="card-friend__image" />
    <div class="card-friend__name">{{ friend.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'FriendCard',

  props: {
    friend: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

$card-image__height--lg: 56px;

.card-friend {
  @extend %test-card;
  text-align: center;

  &__image {
    max-height: 270px;
    margin-bottom: 14px;
    background: $colors__greys--test;
    width: 100%;
    height: $card-image__height--lg;
  }

  &__name {
    color: $colors__text;
    @include text($font-size--ssmall, $font-weight--semibold);
  }
}
</style>
