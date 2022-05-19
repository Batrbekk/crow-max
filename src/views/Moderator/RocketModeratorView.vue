<template>
  <div class="home-container">
    <sidebar-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Заявки"></page-title>
        <div class="filter-container flex items-center mb-5">
          <p class="mr-2">Фильтр:</p>
          <select class="form-select appearance-none w-2/12 block px-4 mr-3 py-2 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                  aria-label="Default select example">
            <option selected value="1">Опубликованные</option>
            <option value="2">Не опубликованные</option>
            <option value="3">В обработке</option>
          </select>
          <select class="form-select appearance-none w-2/12 block px-4 py-2 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                  aria-label="Default select example">
            <option selected value="1">Все</option>
            <option value="2">Не все</option>
            <option value="3">Еще какой-то вариант</option>
          </select>
        </div>
        <div class="mb-5 grid lg:grid-cols-2 gap-5 ">
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
          <div class="">
            <rocket-card
              card-img-src="card-img"
              :card-progress=58
              card-price="20 млн ₸"
              card-desc="Рекламная и производственная компания, производит какойто очень важный товар. а также
                         большой рынок наружней рекламы и еще какойто очень важный текст..."
              card-title="New Level"
              card-sub-title="Рекламная и производственная компания"
              procent-year="27%"
              month="12"
              :request=56
              push-link="card-info"
            ></rocket-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
import PageTitle from '@/components/PageTitle'
import RocketCard from '@/components/RocketCard'
export default {
  name: 'RocketModeratorView',
  components: {
    SidebarComponent,
    PageTitle,
    RocketCard
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 300px) and (max-width: 599px) {
  .d-none-mob {
    display: none;
  }
  .ml-none-mob {
    margin-left: 0!important;
  }
  .form-select {
    width: 100%!important;
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .form-select {
    width: 100%!important;
  }
}
.home-container {}
.main-container {
  .filter-container {
    p {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
    select {
      border-radius: .5rem;
      border-color: #00A47D;
      color: #00A47D;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
    .form-select {
      background-image: url('../assets/icon/down.svg');
    }
  }
}
</style>
