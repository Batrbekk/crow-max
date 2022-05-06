<template>
  <div class="payment-checkbox-container flex items-center">
    <p :style="[[status==='finish' ? {'color' : '#00A47D'} : {}], [[status==='inProcess' ? {'color': '#FFAF0B'} : {}]]]"
       class="mr-2">{{price}}</p>
    <img v-show="price !== '0 ₸' && status==='finish'" src="../assets/icon/checked.png" alt="">
    <img v-show="price !== '0 ₸' && status==='inProcess'" src="../assets/icon/wait.png" alt="">
    <img v-show="price !== '0 ₸' && status==='waiting'" src="../assets/icon/clock.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'PaymentCheckbox',
  props: {
    price: String,
    status: String
  }
}
</script>

<style lang="scss" scoped>
.payment-checkbox-container {
  p {
    color: #1A3154;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
