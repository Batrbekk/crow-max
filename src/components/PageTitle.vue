<template>
  <div class="page-title-component mb-5">
    <h1 class="py-4 text-left">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.page-title-component {
  h1 {
    color: #161E54;
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
