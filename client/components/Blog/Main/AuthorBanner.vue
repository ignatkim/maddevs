<template>
  <div class="container">
    <div class="current-author">
      <div class="current-author__image">
        <picture>
          <source
            v-lazy-load
            :srcset="[
              `${authorImage.url}&w=128&h=128`,
              `${authorImage.url}&w=256&h=256 2x`
            ]"
            media="(max-width: 991px)"
          >
          <img
            v-lazy-load
            :src="`${authorImage.url}&w=165&h=165`"
            :srcset="`${authorImage.url}&w=330&h=330 2x`"
            :alt="authorImage.alt"
            width="165"
            height="165"
          >
        </picture>
      </div>
      <h1 class="current-author__name">
        {{ blogAuthor.name }}
      </h1>
      <p class="current-author__position">
        {{ blogAuthor.position }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthorBanner',

  computed: {
    ...mapGetters(['blogAuthor']),

    authorImage() {
      let urlWithoutSizeParams = ''
      const { image } = this.blogAuthor
      if (image && image.header) {
        // eslint-disable-next-line
        urlWithoutSizeParams = image.header.url.split('&w=')[0]
        return { ...image.header, url: urlWithoutSizeParams }
      }
      return {}
    },
  },
}
</script>

<style lang="scss" scoped>
  .current-author {
    padding-top: 82px;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $text-color--white-primary;
    &__image {
      width: 165px;
      height: 165px;
      border-radius: 50%;
      overflow: hidden;
      background: $bgcolor--black-light;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      margin-top: 29px;
      font-size: 41.5px;
      line-height: 130%;
      letter-spacing: -0.04em;
    }
    &__position {
      margin-top: 8px;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
    }
    @media only screen and (max-width: 991px) {
      padding-top: 92px;
      padding-bottom: 49px;
      &__image {
        width: 128px;
        height: 128px;
      }
      &__name {
        margin-top: 31px;
        font-size: 35px;
        letter-spacing: -1px;
      }
      &__posts-count {
        margin-top: 7px;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.02em;
      }
    }
  }
</style>
