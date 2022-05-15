<template>
  <div class="rocket-card-container w-full bg-white">
    <div class="p-2.5 flex flex-col">
      <div class="flex items-start">
        <div class="w-9/12 mr-auto card-img-container">
          <img :src="require(`../assets/rocket/${cardImgSrc}.png`)" class="mb-1 w-full" alt="">
          <card-progress :bar-procent=cardProgress></card-progress>
        </div>
        <div class="mr-auto">
          <div class="flex items-center rocket-statistic-container">
            <img class="mr-2" src="../assets/rocket/icon1.png" alt="">
            <p><span>{{ procentYear }}</span> годовых</p>
          </div>
          <div class="flex items-center rocket-statistic-container my-2.5">
            <img class="mr-2" src="../assets/rocket/icon2.png" alt="">
            <p><span>{{ month }}</span> месяцев</p>
          </div>
          <div class="flex items-center rocket-statistic-container">
            <img class="mr-2" src="../assets/rocket/icon3.png" alt="">
            <p><span>{{ request }}</span> заявок</p>
          </div>
        </div>
      </div>
      <div class="flex items-start w-full card-desc-container">
        <div class="w-9/12 mr-auto">
          <div class="flex justify-between items-center mt-2">
            <div class="card-title-container">
              <h2 class="text-left">{{ cardTitle }}</h2>
              <p class="text-left">{{ cardSubTitle }}</p>
            </div>
            <div class="card-price-container">
              <h1 class="text-left w-full">{{ cardPrice }}</h1>
            </div>
          </div>
          <div class="mt-2 description-container">
            <p class="text-left max-w-2xl">
              {{ cardDesc }}
            </p>
          </div>
        </div>
        <div class="card-button-container mr-auto">
          <button @click="$router.push(pushLink)">
            <img class="p-5" src="../assets/icon/plus.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProgress from '@/components/CardProgress'
export default {
  name: 'RocketCard',
  components: { CardProgress },
  props: {
    cardProgress: Number,
    cardImgSrc: String,
    month: String,
    procentYear: String,
    request: Number,
    cardTitle: String,
    cardSubTitle: String,
    cardDesc: String,
    cardPrice: String,
    pushLink: String
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 300px) and (max-width: 599px) {
  .card-button-container {
    margin-right: 0!important;
  }
  .card-desc-container {
    margin-top: .5rem;
  }
  .card-title-container {
    width: 70%!important;
  }
  .card-price-container {
    h1 {
      font-size: 1rem!important;
      line-height: 1rem!important;
    }
  }
  .card-img-container {
    margin-right: 1rem;
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .card-img-container {
    margin-right: 1rem;
  }
}
.rocket-card-container {
  border-radius: .5rem;
  .card-title-container {
    h2 {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    p {
      color: #8C98A9;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
    }
  }
  .card-price-container {
    h1 {
      color: #1A3154;
      font-family: 'Gilroy',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }
  }
  .description-container {
    p {
      color: #8C98A9;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .rocket-statistic-container {
    p {
      color: #AEBDCA;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
    }
    span {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
    }
  }
  .card-button-container {
    button {
      background-color: #00A47D;
      border-radius: 50%;
    }
  }
}
</style>
