<template>
  <div class="rounded bg-white card-info-desc-container flex items-start p-4 w-full">
    <div class="slider-container">
      <img class="slider-main-img" :src="require(`../assets/cardInfoDesc/${currentImage}.png`)" alt="">
      <div class="flex items-center mt-4 slider-image w-full">
        <img v-on:click="changeImg" class="mr-2" :id="image1" :src="require(`../assets/cardInfoDesc/${image1}.png`)" alt="">
        <img v-on:click="changeImg" class="mr-2" :id="image2" :src="require(`../assets/cardInfoDesc/${image2}.png`)" alt="">
        <img v-on:click="changeImg" class="mr-2" :id="image3" :src="require(`../assets/cardInfoDesc/${image3}.png`)" alt="">
        <img v-on:click="changeImg" :id="image4" :src="require(`../assets/cardInfoDesc/${image4}.png`)" alt="">
      </div>
    </div>
    <div class="ml-6 card-desc-container w-full">
      <div class="card-title-container">
        <h2 class="text-left">{{ cardTitle }}</h2>
        <p class="text-left">{{ cardSubTitle }}</p>
      </div>
      <card-progress class="mt-4" :bar-procent=cardProgress></card-progress>
      <div class="flex items-start card-text-container w-full mt-4">
        <div class="w-full">
          <p class="card-desc text-left">
            {{ cardDesc }}
          </p>
          <div class="card-sum-container mt-4 text-left">
            <p class="mb-1">Общая сумма</p>
            <h1>
              {{ cardSum }} млн ₸
            </h1>
          </div>
          <div class="one-row-container flex items-center mt-1">
            <div class="card-sum-container mr-12 text-left">
              <p class="mb-1">Сумма  доступная для инвестирования</p>
              <h1>
                {{ cardInvestSum }} ₸
              </h1>
            </div>
            <div class="card-sum-container mr-12 text-left">
              <p class="mb-1">Сумма  доступная для инвестирования</p>
              <h1>
                {{ cardInvestPrecent }}%
              </h1>
            </div>
            <div class="card-button-container text-left">
              <button @click="$router.push('card-info')" class="px-4 py-2">Выйти из проекта</button>
            </div>
          </div>
        </div>
        <div class="ml-2 w-2/12">
          <div class="flex items-center card-info-taq mb-4 text-left">
            <img src="../assets/cardInfoDesc/time.png" class="mr-2" alt="">
            <span>{{ time }}</span>
            <p class="w-full ml-1">дней осталось</p>
          </div>
          <div class="flex items-center card-info-taq mb-4 text-left">
            <img src="../assets/cardInfoDesc/justice.png" class="mr-2" alt="">
            <span>{{ percentage }}</span>
            <p class="w-full ml-1">годовых</p>
          </div>
          <div class="flex items-center card-info-taq mb-4 text-left">
            <img src="../assets/cardInfoDesc/date.png" class="mr-2" alt="">
            <span>{{ date }}</span>
            <p class="w-full ml-1">месяцев</p>
          </div>
          <div class="flex items-center card-info-taq mb-4 text-left">
            <img src="../assets/cardInfoDesc/add.png" class="mr-2" alt="">
            <span>{{ application }}</span>
            <p class="w-full ml-1">заявок</p>
          </div>
          <div class="flex items-center card-info-taq mb-4 text-left">
            <img src="../assets/cardInfoDesc/like.png" class="mr-2" alt="">
            <span :style="[[status==='B' || 'B+' || 'B-' || 'A' || 'A+' || 'A-' ? {'color' : '#00C48C'} : {}]]">{{ status }}</span>
            <p class="w-full ml-1">риск</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProgress from '@/components/CardProgress'

export default {
  name: 'CardInvestDesc',
  components: { CardProgress },
  props: {
    cardProgress: Number,
    cardTitle: String,
    cardSubTitle: String,
    cardDesc: String,
    cardSum: Number,
    cardInvestSum: String,
    time: Number,
    percentage: String,
    date: String,
    application: Number,
    status: String,
    cardInvestPrecent: Number
  },
  data () {
    return {
      image1: 'image',
      image2: 'like',
      image3: 'date',
      image4: 'add',
      currentImage: 'image'
    }
  },
  methods: {
    changeImg (event) {
      const imgID = event.currentTarget.id
      this.currentImage = imgID
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 300px) and (max-width: 599px) {
  .card-info-desc-container {
    flex-direction: column;
    align-items: center;
    .slider-container {
      width: 100%!important;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      .slider-image {
        display: flex;
        justify-content: center;
      }
    }
    .card-desc-container {
      margin-left: 0!important;
      .card-text-container {
        flex-direction: column-reverse;
      }
    }
    .one-row-container {
      flex-direction: column;
      align-items: start!important;
      .card-sum-container {
        margin-top: 2px;
        margin-right: 0!important;
      }
      .card-button-container {
        margin-top: 16px;
      }
    }
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .card-info-desc-container {
    flex-direction: column;
    align-items: center;
    .slider-container {
      width: 100%!important;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      .slider-image {
        display: flex;
        justify-content: center;
      }
    }
    .card-desc-container {
      margin-left: 0!important;
      .card-text-container {
        flex-direction: column-reverse;
      }
    }
    .one-row-container {
      flex-direction: column;
      align-items: start!important;
      .card-sum-container {
        margin-top: 2px;
        margin-right: 0!important;
      }
      .card-button-container {
        margin-top: 16px;
      }
    }
  }
}
.slider-container {
  .slider-main-img {
    max-width: 360px;
    max-height: 314px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .slider-image {
    img {
      max-width: 84px;
      max-height: 84px;
    }
  }
}
.card-title-container {
  h2 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #1A3154;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8C98A9;
  }
}
.card-desc {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #8C98A9;
}
.card-sum-container {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8C98A9;
  }
  h1 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #1A3154;
  }
}
.card-button-container {
  button {
    background-color: transparent;
    border-radius: .5rem;
    font-family: 'Inter',sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #164368;
    border: 1px solid #164368;
  }
}
.card-info-taq {
  span {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #1A3154;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #AEBDCA;
  }
}
</style>
