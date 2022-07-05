<template>
  <div class="home-container">
    <sidebar-component active="1" class="fixed d-none-mob"/>
    <div class="flex ml-none-mob ml-80 px-4">
      <div class="main-container py-5 container flex-col">
        <page-title title="Главная"></page-title>
        <div class="mb-5 flex main-dashboard-container justify-between ">
          <div class="mr-5 w-1/3 dashboard-container">
            <main-bar-dashboard :with-dashboard="true" type="activePrice" title="4 700 000 ₸" subtitle="Общая сумма активов" />
          </div>
          <div class="w-1/3 mr-5 dashboard-container">
            <main-bar-dashboard :with-dashboard="true" type="income" title="17.4 %" subtitle="Средняя доходность по портфелю" />
          </div>
          <div class="w-1/3 dashboard-container">
            <main-bar-dashboard :with-dashboard="false" type="totalPrice" title="4 700 000 ₸" subtitle="Общая сумма за весь период" />
          </div>
        </div>
        <div class="flex items-start flex-col xl:flex-row">
          <div class="p-4 w-5/12 donuts-dashboard rounded bg-white mb-5 mr-5">
            <table-title title="Конвертация"></table-title>
            <Doughnut
              :chart-options="chartOptions"
              :chart-data="chardData"
              :width="width"
              :height="height"
              :css-classes="cssClasses"
            />
          </div>
          <div class="p-4 w-full rounded bg-white mb-5">
            <div class="statistic-dash-container flex items-start">
              <div class="text-left static-container mr-4">
                <div class="mb-4 static-title">
                  <h1>434 545 ₸</h1>
                  <p class="sub-title-statistic">общий доход за весь период</p>
                </div>
                <div class="flex">
                  <div class="statistic-indicator mr-3">
                    <img class="p-3" src="../assets/icon/up-arrow.png" alt="">
                  </div>
                  <div>
                    <h4>+ 30 000 ₸</h4>
                    <p class="sub-price">в этом месяце</p>
                  </div>
                </div>
              </div>
              <div class="sum-in-month-table-container">
                <div class="flex flex-col sum-in-month-table">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full border text-center">
                          <tbody>
                          <tr class="border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                              25.02.2022
                            </td>
                            <td class="plus-color price-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              + 3 000 ₸
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                              25.02.2022
                            </td>
                            <td class="divide-color price-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              - 4 000 ₸
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                              25.02.2022
                            </td>
                            <td class="plus-color price-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                              + 3 000 ₸
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                              25.02.2022
                            </td>
                            <td class="plus-color price-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                              + 3 000 ₸
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded bg-white mb-5">
          <img src="../assets/port/card-main.svg" alt="">
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <img src="../assets/port/card-main2.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
import PageTitle from '@/components/PageTitle'
import TableTitle from '@/components/TableTitle'
import MainBarDashboard from '@/components/MainBarDashboard'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'HomeView',
  components: {
    SidebarComponent,
    PageTitle,
    TableTitle,
    Doughnut,
    MainBarDashboard
  },
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    cssClasses: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      chardData: {
        labels: ['VueJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            data: [40, 20, 12],
            backgroundColor: ['#164368', '#AEBDCA', '#50728E']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
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
    .main-dashboard-container {
      flex-direction: column!important;
      .dashboard-container {
        width: 100%!important;
        margin-top: 1rem!important;
        &:first-child {
          margin-top: 0!important;
        }
      }
    }
    .donuts-dashboard {
      width: 100%!important;
    }
    .statistic-dash-container {
      flex-direction: column!important;
      .static-container {
        display: flex!important;
        .static-title {
          margin-right: 1rem!important;
        }
        h4 {
          font-size: 1rem!important;
        }
        .statistic-indicator {
          max-width: 60px!important;
          max-height: 60px!important;
        }
      }
      .sum-in-month-table-container {
        width: 100%!important;
      }
    }
  }
  @media only screen and (min-width: 600px) and (max-width:1000px) {
    .main-dashboard-container {
      flex-direction: column;
      .dashboard-container {
        width: 100%!important;
        margin-top: 1rem;
        &:first-child {
          margin-top: 0!important;
        }
      }
    }
    .donuts-dashboard {
      width: 100%!important;
    }
    .statistic-dash-container {
      flex-direction: column;
      .static-container {
        display: flex;
        .static-title {
          margin-right: 1rem!important;
        }
        h4 {
          font-size: 1rem;
        }
        .statistic-indicator {
          max-width: 60px;
          max-height: 60px;
        }
      }
      .sum-in-month-table-container {
        width: 100%!important;
      }
    }
  }
  .home-container {}
  .main-container {}
  .sum-in-month-table {
    td {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    .price-td {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    .plus-color {
      color: #00C48C;
    }
    .divide-color {
      color: #FF5583;
    }
  }
  .static-container {
    h1 {
      font-family: 'Gilroy',serif;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: #1A3154;
    }
    h4 {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #1A3154;
    }
    .sub-price {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #8C98A9;
    }
    .sub-title-statistic {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #8C98A9;
    }
    .statistic-indicator {
      background-color: #00A47D;
      box-shadow: 0 1px 4px rgba(0, 164, 125, 0.25), 0 3px 12px 2px rgba(0, 164, 125, 0.35);
      border-radius: 6px;
    }
  }
</style>
