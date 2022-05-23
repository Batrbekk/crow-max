<template>
  <div class="dashboard-container relative bg-white rounded-lg w-full justify-between flex items-start">
    <img v-show="type==='activePrice'" src="../assets/mainBar/activePrice.png" alt="">
    <img v-show="type==='income'" src="../assets/mainBar/income.png" alt="">
    <img v-show="type==='totalPrice'" src="../assets/mainBar/totalPrice.png" alt="">
    <img v-show="type==='date'" src="../assets/mainBar/date.png" alt="">
    <div class="dashboard-text p-2 text-right">
      <h1>{{title}}</h1>
      <p class="max-w-[100%] w-full">{{subtitle}}</p>
    </div>
    <button
      type="button"
      v-if="type==='date'"
      class="date-print-btn flex items-center bottom-0 right-0 m-2 absolute rounded-lg py-2 px-4 border bg-transparent"
      data-bs-toggle="modal" data-bs-target="#clientPrintModal">
      <img class="mr-1.5" src="../assets/icon/print.png" alt="">
      Печать
    </button>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
         id="clientPrintModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Реквизиты для пополнения счета заемщика</h5>
            <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4">
            <div class="rounded bg-gray-300 border border-rose-600">
              <div class="flex items-start req-container w-full p-4">
                <div class="text-left">
                  <p>Наименование</p> <b>ТОО "ДЖЕТЛЕНД"</b>
                  <p class="mt-2">ИИН</p> <b class="mt-2">7724451748</b>
                  <p class="mt-2">Расчетный счёт</p> <b class="mt-2">0000000011223344</b>
                  <p class="mt-2">Название банка</p> <b class="mt-2">БАНК ЦЕНТР КРЕДИТ</b>
                  <p class="mt-2">БИК</p> <b class="mt-2">044525999</b>
                  <p class="mt-2">Город</p> <b class="mt-2">АЛМАТЫ</b>
                  <p class="mt-2">Корр.счет</p>  <b class="mt-2">30101810845250000999</b>
                  <p class="mt-2">Наименование платежа</p> <b class="mt-2">Оплата основного долга, процентов и тд и тп</b>
                  <p class="mt-2">Сумма к оплате</p> <b class="mt-2 text-rose-600">2 375 000 ₸</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="withDashboard" class="line-dashboard absolute w-full bottom-0">
      <Line
        :chart-options="chartOptions"
        :chart-data="chardData"
        :width="width"
        :height="height"
        :css-classes="cssClasses"
        chart-id="lineChart"
      />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Filler, Legend, LineElement, PointElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler
)
export default {
  name: 'MainBarDashboard',
  props: {
    title: String,
    subtitle: String,
    type: String,
    withDashboard: Boolean,
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 80
    },
    cssClasses: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      gradientBg: null,
      chardData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: this.gradientBg,
            data: [40, 39, 10, 40, 39, 80, 40],
            fill: true,
            tension: 0.4
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            display: false
          },
          x: {
            display: false
          }
        }
      }
    }
  },
  components: { Line },
  mounted () {
    const ctx = document.getElementById('lineChart').getContext('2d')
    this.gradientBg = ctx.createLinearGradient(0, 0, 0, 400)
    this.gradientBg.addColorStop(1, '#00A47D')
    this.gradientBg.addColorStop(0, 'rgba(255, 255, 255, 0)')
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  .dashboard-text {
    h1 {
      font-family: 'Gilroy',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      color: #1A3154;
    }
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
      color: #1A3154;
      opacity: 0.5;
    }
  }
  .line-dashboard {
  }
  .date-print-btn {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #00A47D;
    border-color: #00A47D;
  }
}
#line-chart {
  border-radius: 12px;
}
</style>
