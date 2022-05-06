<template>
  <div class="flex items-center w-full justify-center">
    <img v-show="iconType==='success'" src="../assets/icon/success.png" class="mr-2.5" alt="">
    <img v-show="iconType==='unsuccess'" src="../assets/icon/unsuccess.png" class="mr-2.5" alt="">
    <img v-show="iconType==='warning'" src="../assets/icon/warning.png" class="mr-2.5" alt="">
    <p>{{price}}</p>
  </div>
</template>

<script>
export default {
  name: 'SumTable',
  props: {
    price: String,
    iconType: String
  }
}
</script>

<style lang="scss" scoped></style>
