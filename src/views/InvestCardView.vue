<template>
  <div class="home-container">
    <sidebar-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <div class="flex items-center">
          <router-link to="/rocket"><img class="py-4 mb-5 mr-4" src="../assets/icon/left.png" alt=""></router-link>
          <page-title title="Инвестирование в проект"></page-title>
        </div>
        <div class="mb-5">
          <card-invest-desc
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
            :card-invest-precent=2
          />
        </div>
        <div class="rounded bg-white data-registration-container p-4 text-left w-full">
          <h1 class="mb-4">Инвестирование в проект</h1>
          <div>
            <ul class="nav nav-tabs flex flex-col justify-center lg:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                role="tablist">
              <li class="nav-item" role="presentation">
                <a href="#tabs-home" class="nav-link block font-medium text-center text-xs leading-tight w-full
                                            border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
                                            hover:border-transparent hover:bg-gray-100
                                            focus:border-transparent active opacity-50"
                   id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home"
                   role="tab" aria-controls="tabs-home"
                   aria-selected="true">
                  <div class="mb-2 px-4 py-2 tab-icon-container rounded-lg text-center">
                    <p class="text-white">1</p>
                  </div>
                  В проекте</a>
              </li>
              <li class="nav-item" role="presentation">
                <a href="#tabs-profile" class="nav-link block font-medium text-center text-xs leading-tight w-full
                                            border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
                                            hover:border-transparent hover:bg-gray-100
                                            focus:border-transparent opacity-50"
                   id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                   aria-controls="tabs-profile" aria-selected="false">
                  <div class="mb-2 px-4 py-2 tab-icon-container rounded-lg text-center">
                    <p class="text-white">2</p>
                  </div>
                  Подписание договора</a>
              </li>
              <li class="nav-item" role="presentation">
                <a href="#tabs-messages" class="nav-link block font-medium text-center text-xs leading-tight w-full
                                            border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
                                            hover:border-transparent hover:bg-gray-100
                                            focus:border-transparent opacity-50"
                   id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                   aria-controls="tabs-messages" aria-selected="false">
                  <div class="mb-2 px-4 py-2 tab-icon-container rounded-lg text-center">
                    <p class="text-white">3</p>
                  </div>
                  Зачисление денег</a>
              </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent">
              <div class="tab-pane fade show active mb-32" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                <div class="flex loading-step flex-col items-center mt-4 px-28 py-24">
                  <div class="mb-16">
                    <img class="animate-spin duration-700" src="../assets/cardInvest/icon.png" alt="">
                  </div>
                  <h1>Ожидаем завершение сбора денежных средств</h1>
                </div>
              </div>
              <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <div>
                  <p>
                    Пожалуйста ознакомтесь и подпишите договор, для дальнейшего участия в проекте. в случае не
                    подписания договора, по истечению времени Вы автоматически будете исключены из проекта.
                    <span class="text-red-500">Осталось 23 часа 53 мин</span>
                  </p>
                  <div class="confirm-document-container mt-4">
                    <h4 class="mb-4">Вложенные документы</h4>
                    <div class="flex items-center sign-document-container">
                      <div class="confirm-document flex items-center mr-4">
                        <img class="mr-2" src="../assets/cardInvest/document-icon.png" alt="">
                        <p>Договор №2545 по проекту</p>
                      </div>
                      <button class="hover:shadow-xl flex items-center rounded-lg p-4 green-btn text-white mr-2">
                        <img src="../assets/cardInvest/confirm-icon.png" class="mr-2.5" alt="">Подписать через NCALayer
                      </button>
                      <button class="hover:shadow-xl flex items-center rounded-lg p-4 text-white">
                        <img src="../assets/cardInvest/confirm-icon.png" class="mr-2.5" alt="">Подписать c передачей ключа
                      </button>
                    </div>
                  </div>
                  <div class="mt-4 confirm-ecp-container border rounded-lg border-slate-600">
                    <div class="p-2">
                      <h4 class="mb-4">Подписание ЭЦП</h4>
                      <div class="attention-text-container flex items-start">
                        <img class="mr-2" src="../assets/cardInvest/warning.png" alt="">
                        <p>
                          Внимание, Вы принимаете риск, что данным способом вы передаете вашу ЭЦП на сервер для
                          подписания документа, мы не храним его на сервере, после выполнения подписания сертификат
                          автоматически будет удален. Данный способ предназначер только в крайнем случае использования,
                          когда нет возможности воспользыватся прослойкой NCALayer.
                        </p>
                      </div>
                      <div class="">
                        <div class="form-container mt-4">
                          <label for="document" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Ключ
                          </label>
                          <input
                            type="file"
                            class="form-control block w-full lg:w-1/3 p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="document"
                          />
                        </div>
                        <div class="form-container mt-4">
                          <label for="examplePassword0" class="flex items-start form-label inline-block mb-1 text-gray-700">
                            Пароль
                          </label>
                          <input
                            type="password"
                            class="form-control block w-full lg:w-1/3 p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                            id="examplePassword0"/>
                        </div>
                        <button class="w-full lg:w-1/3 py-4 mt-4 rounded-lg disabled:bg-gray-600" disabled>
                          Отправить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <div>
                  <p class="mb-4">
                    Пожалуйста ознакомтесь и подпишите договор, для дальнейшего участия в проекте. в случае не
                    подписания договора, по истечению времени Вы автоматически будете исключены из проекта.
                    <span class="text-red-500">Осталось 23 часа 53 мин</span>
                  </p>
                  <div class="check-container flex flex-col items-center">
                    <h4 class="mb-4">Счет на оплату</h4>
                    <div class="border rounded-lg border-slate-600">
                      <div class="p-2">
                        <div class="flex items-center">
                          <b class="mr-4">Наименование</b><p>ООО "Продавец"</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">Полное наименование</b><p>Общество с ограниченной ответственностью "Продавец"</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">ИНН</b><p>7701001234</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">КПП</b><p>770101001</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">ОГРН</b><p>1197746123456</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">БИК</b><p>044525225</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">Адрес</b><p>115201, Москва, Котляковская ул, д.13, стр.3, офис 20</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">Наименование банка и город</b><p>ПАО Сбербанк Москва</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">Расчетный счет </b><p>40702810938000000011</p>
                        </div>
                        <div class="flex items-center mt-2">
                          <b class="mr-4">Наименование платежа</b>
                          <p class="">
                            Оплата основного долга, процентов и пени займодавцам по процентным договорам займа,
                            заключенным посредством онлайн-сервиса.
                          </p>
                        </div>
                        <div class="w-full flex justify-end">
                          <button class="py-2 px-4 rounded-lg mt-2">
                            Печать
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
import PageTitle from '@/components/PageTitle'
import CardInvestDesc from '@/components/CardInvestDesc'

export default {
  name: 'InvestCardView',
  components: {
    SidebarComponent,
    PageTitle,
    CardInvestDesc
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
  .data-registration-container {
    .sign-document-container {
      flex-direction: column;
      align-items: start;
      .confirm-document {
        margin-bottom: 1rem!important;
      }
      button {
        margin-bottom: 1rem;
        width: 100%!important;
        justify-content: center;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .loading-step {
      padding: 3rem 0 0 0!important;
    }
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .data-registration-container {
    .sign-document-container {
      flex-direction: column;
      align-items: start;
      .confirm-document {
        margin-bottom: 1rem!important;
      }
      button {
        margin-bottom: 1rem;
        width: 100%!important;
        justify-content: center;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .loading-step {
      padding: 5rem 0 0 0!important;
    }
  }
}
.nav-item {
  .active {
    opacity: 1!important;
    border: none;
  }
  .nav-link {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #164368;
  }
  .tab-icon-container {
    background-color: #164368;
    p {
      font-family: 'Gilroy',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }
  }
}
.data-registration-container {
  h1 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #1A3154;
  }
  #tabs-home {
    h1 {
      font-family: 'Gilroy',sans-serif!important;
      font-style: normal!important;
      font-weight: 600!important;
      font-size: 18px!important;
      line-height: 26px!important;
      color: #1A3154!important;
    }
  }
  #tabs-profile {
    .confirm-document-container {
      p {
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #53647F;
      }
      .confirm-document {
        p {
          font-family: 'Inter',sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #1A3154;
        }
      }
      h4 {
        font-family: 'Gilroy',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #1A3154;
      }
      .green-btn {
        background-color: #00A47D!important;
      }
      button {
        border-radius: 8px;
        background-color: #50728E;
      }
    }
    .confirm-ecp-container {
      h4 {
        font-family: 'Gilroy',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #1A3154;
      }
      .attention-text-container {
        p {
          font-family: 'Inter',sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #1A3154;
        }
      }
      button {
        color: #fff;
        background-color: #00A47D;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        &:disabled {
          color: #8C98A9;
          background-color: #E8EAEE;
        }
      }
    }
  }
  #tabs-messages {
    .check-container {
      h4 {
        font-family: 'Gilroy',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #1A3154;
      }
      b, p {
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 18px;
        color: #53647F;
      }
      button {
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #00A47D;
        border: 1px solid #00A47D;
      }
    }
  }
}
</style>
