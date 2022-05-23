<template>
  <div class="home-container">
    <sidebar-moderator-component active="1" class="fixed d-none-mob"/>
    <div class="flex ml-none-mob ml-80 px-4">
      <div class="main-container py-5 container flex-col">
        <page-title title="Dashboard"></page-title>
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
            <table-title title="Какойто график"></table-title>
            <Doughnut
              :chart-options="chartOptions"
              :chart-data="chardData"
              :width="width"
              :height="height"
              :css-classes="cssClasses"
            />
          </div>
        </div>
        <div class="p-4 rounded bg-white mb-5">
          <table-title title="Ваши проекты"></table-title>
          <project-moderator-table />
        </div>
        <div class="mb-5">
          <notification-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import TableTitle from '@/components/TableTitle'
import MainBarDashboard from '@/components/MainBarDashboard'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import SidebarModeratorComponent from '@/components/SidebarModeratorComponent'
import NotificationComponent from '@/components/NotificationComponent'
import ProjectModeratorTable from '@/components/ProjectModeratorTable'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'HomeModeratorView',
  components: {
    NotificationComponent,
    SidebarModeratorComponent,
    PageTitle,
    TableTitle,
    Doughnut,
    MainBarDashboard,
    ProjectModeratorTable
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
