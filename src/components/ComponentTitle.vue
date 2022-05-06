<template>
  <div class="component-title-container pb-1.5 text-left">
    <h1 class="py-1.5">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ComponentTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.component-title-container {
  border-bottom: 2px solid #80D1BE;
  h1 {
    color: #164368;
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
