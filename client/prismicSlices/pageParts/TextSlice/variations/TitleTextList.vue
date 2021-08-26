<template>
  <div class="text-slice__content">
    <div class="text-slice__content-text">
      <h2 v-html="title" />
      <p>{{ text }}</p>
    </div>
    <ul class="text-slice__content-list">
      <li
        v-for="listItem in listItems"
        :key="listItem"
      >
        <span>―</span>
        {{ listItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TitleTextList',

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    text: {
      type: String,
      required: true,
      default: '',
    },

    list: {
      type: Array,
      required: true,
      default: () => ([]),
    },

    colorTheme: {
      type: String,
      default: 'white',
    },
  },

  computed: {
    listItems() {
      const items = []
      if (Array.isArray(this.list) && this.list.length) {
        this.list.forEach(({ listItem }) => (listItem ? items.push(listItem) : null))
      }
      return items
    },
  },
}
</script>

<style lang="scss" scoped>
.text-slice__content {
  width: 100%;
  max-width: 1242px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  h1, h2, h3 {
    @include font('Inter', 60px, 800);
    line-height: 65px;
    letter-spacing: -0.04em;
    @media screen and (max-width: 1024px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media screen and (max-width: 768px) {
      font-size: 34px;
    }
  }

  p {
    @include font('Inter', 20px, 400);
    line-height: 29px;
    letter-spacing: -0.013em;
    margin-top: 21px;
    @media screen and (max-width: 1300px) {
      margin-bottom: 30px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (max-width: 768px) {
      font-size: 17px;
      margin-bottom: 15px;
    }
  }

  &-text {
    width: 100%;
    max-width: 692px;
    margin-right: 20px;
    @media screen and (max-width: 1300px) {
      margin-right: 0;
    }
  }

  &-list {
    width: 100%;
    max-width: 437px;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        margin-right: 10px;
        color: $text-color--red;
      }
    }
  }
}
</style>
