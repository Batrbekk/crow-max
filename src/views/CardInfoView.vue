<template>
  <div class="home-container">
    <sidebar-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <div class="flex items-center">
          <router-link to="/rocket"><img class="py-4 mb-5 mr-4" src="../assets/icon/left.png" alt=""></router-link>
          <page-title title="New Level"></page-title>
        </div>
        <div class="mb-5">
          <card-info-desc
            card-title="New Level"
            :card-progress=50
            card-sub-title="Рекламная и производственная компания"
            card-desc="Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу
                       (специалистов) участие в формировании дальнейших направлений развития. . Идейные соображения
                       высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить
                       значение новых предложений."
            :card-sum=20
            card-invest-sum="100 000"
            :time=8
            percentage="27%"
            date="12"
            :application=56
            status="A"
          />
        </div>
        <div class="mb-5 flex mob-direction-column">
          <div class="w-3/12 bg-white rounded mr-4 p-4 text-left sum-around-container">
            <h1>434 545 ₸</h1>
            <p>общий оборот за 12 мес</p>
            <div class="flex items-start mt-4">
              <div class="around-indicator-container mr-3">
                <img class="p-3" src="../assets/icon/up-arrow.png" alt="">
              </div>
              <div class="indicator-text-container">
                <h1>+ 30 000 ₸</h1>
                <p>в этом месяце</p>
              </div>
            </div>
          </div>
          <card-bar class="mr-4 w-full card-bar-container" />
          <div class="w-3/12 bg-white rounded mr-4 p-4 text-left sum-around-container">
            <h1>434 545 ₸</h1>
            <p>общий оборот за 12 мес</p>
            <div class="flex items-start mt-4">
              <div class="around-indicator-container mr-3">
                <img class="p-3" src="../assets/icon/up-arrow.png" alt="">
              </div>
              <div class="indicator-text-container">
                <h1>+ 30 000 ₸</h1>
                <p>в этом месяце</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded bg-white p-4 mb-5">
          <div class="info-desc text-left">
            <h4>
              Описание
            </h4>
            <p class="mt-1">
              В интернет-магазине NEMO.KZ представлена широкая линейка известных брендов и торговых марок.
              Каждый наш покупатель может выбрать товар, который будет соответствовать лично его требованиям,
              необходимым параметрам и характеристикам.
              Весь представленный товар является официальным и имеет соответствующие сертификаты качества.
            </p>
          </div>
          <div class="info-desc text-left mt-4">
            <h4>
              Отборный ассортимент
            </h4>
            <p class="mt-1">
              Производим детальный отбор товаров, которые Вы можете приобрести в нашем интернет-магазине.
              Отбираем только те товары, которыми мы пользуемся или пользовались бы сами. Наши менеджеры
              разбираются в тонкостях и с легкостью порекомендуют лучшие или наиболее подходящие Вам товары.
              Курьерская доставка до двери
              Собственная курьерская служба и наличие товаров позволяет нам доставить товар до двери и в удобное
              для вас время в день оформления заказа. В среднем доставка производится в течении 1-2 часов. Менджер
              предварительно согласовывает с Вами время доставки. А также вы можете самостоятельно забрать
              заказ с пункта выдачи.
            </p>
          </div>
          <div class="info-desc text-left mt-4">
            <h4>
              Экспресс доставка по крупным городам Казахстана
            </h4>
            <p class="mt-1">
              Мы доставим ваши заказы в любой город страны экспресс доставкой в течении 3-4 дней. Бесплатная доставка
              при стоимости заказа от 10 000 тенге.
            </p>
          </div>
        </div>
        <div class="rounded bg-white data-registration-container p-4 mb-5 flex items-start text-left w-full">
          <div class="w-6/12 mr-5 date-text-container">
            <h1 class="date-title pb-1.5 mb-1.5">Регистрационные данные</h1>
            <div class="flex">
              <span class="w-6/12">Название организации</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">БИН</span><p class="w-6/12">740617399017</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Сфера деятельности</span><p class="w-6/12">Предоставление прочих индивидуальных услуг</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Регион</span><p class="w-6/12">Алматинская область</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Код ОКПО</span><p class="w-6/12">96090</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Руководитель</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Дата регистрации</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Размерность организации</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Тип собственности</span><p class="w-6/12">Частная собственность</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Статус  свидетельства</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Дата выдачи свидетельства</span><p class="w-6/12">ИП Балауса</p>
            </div>
            <div class="flex">
              <span class="w-6/12">Срок действия свидетельства</span><p class="w-6/12">ИП Балауса</p>
            </div>
          </div>
          <div class="w-6/12 date-text-container">
            <h1 class="date-title pb-1.5 mb-1.5">Факторы риска</h1>
            <p>В списке должников, временно ограниченных на выезд из РК</p>
            <p>Исполнительные производства</p>
            <p>Наличие в реестре лжепредпринимателей</p>
            <p>Недобросовестный участник Государственных закупок</p>
          </div>
        </div>
        <div class="rounded bg-white p-4 text-left">
          <h1 class="date-title pb-1.5 mb-5">Вложенные документы</h1>
          <div class="flex document-container items-center mb-4">
            <img class="mr-2" src="../assets/cardInfoDesc/doc.png" alt="">
            <p>Договор o купли продаже</p>
          </div>
          <div class="flex document-container items-center mb-4">
            <img class="mr-2" src="../assets/cardInfoDesc/doc.png" alt="">
            <p>Сертификаты безопасности</p>
          </div>
          <div class="flex document-container items-center mb-4">
            <img class="mr-2" src="../assets/cardInfoDesc/doc.png" alt="">
            <p>Разрешение на использование инвестиций</p>
          </div>
          <div class="flex document-container items-center mb-4">
            <img class="mr-2" src="../assets/cardInfoDesc/doc.png" alt="">
            <p>Разрешение на работу в Казахстане</p>
          </div>
          <div class="flex document-container items-center">
            <img class="mr-2" src="../assets/cardInfoDesc/doc.png" alt="">
            <p>Отчет за последний квартал</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
import PageTitle from '@/components/PageTitle'
import CardInfoDesc from '@/components/CardInfoDesc'
import CardBar from '@/components/CardBar'
export default {
  name: 'CardInfoView',
  components: {
    CardBar,
    SidebarComponent,
    PageTitle,
    CardInfoDesc
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 300px) and (max-width: 599px) {
  .card-bar-container {
    margin-top: 1rem;
  }
  .sum-around-container {
    width: 100%!important;
    margin-right: 0!important;
    &:last-child {
      margin-top: 1rem;
    }
  }
  .mob-direction-column {
    flex-direction: column;
  }
  .d-none-mob {
    display: none;
  }
  .ml-none-mob {
    margin-left: 0!important;
  }
  .data-registration-container {
    flex-direction: column;
    .date-text-container {
      width: 100%!important;
      &:first-child {
        margin-bottom: 1rem;
      }
      span {
        margin-right: .5rem;
      }
    }
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .card-bar-container {
    margin-top: 1rem;
  }
  .sum-around-container {
    width: 100%!important;
    margin-right: 0!important;
    &:last-child {
      margin-top: 1rem;
    }
  }
  .mob-direction-column {
    flex-direction: column;
  }
  .data-registration-container {
    flex-direction: column;
    .date-text-container {
      width: 100%!important;
      &:first-child {
        margin-bottom: 1rem;
      }
      span {
        margin-right: .5rem;
      }
    }
  }
}
.indicator-text-container {
  h1 {
    font-weight: 600!important;
    font-size: 18px!important;
    line-height: 24px!important;
  }
  p {
    font-weight: 500!important;
    font-size: 14px!important;
    line-height: 18px!important;
  }
}
.around-indicator-container {
  background-color: #00A47D;
  box-shadow: 0 1px 4px rgba(0, 164, 125, 0.25), 0 3px 12px 2px rgba(0, 164, 125, 0.35);
  border-radius: 6px;
}
.sum-around-container {
  h1 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: #1A3154;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #8C98A9;
  }
}
.document-container {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1A3154;
  }
}
.info-desc {
  h4 {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #164368;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #164368;
  }
}
.date-title {
  font-family: 'Gilroy',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #164368;
  border-bottom: 2px solid #80D1BE;
}
.date-text-container {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #164368;
  }
  span {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #164368;
  }
}
</style>
