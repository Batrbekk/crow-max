<template>
  <div class="dashboard-container relative bg-white rounded-lg w-full justify-between flex items-start">
    <img v-show="type==='activePrice'" src="../assets/mainBar/activePrice.png" alt="">
    <img v-show="type==='income'" src="../assets/mainBar/income.png" alt="">
    <img v-show="type==='totalPrice'" src="../assets/mainBar/totalPrice.png" alt="">
    <div class="dashboard-text p-2 text-right">
      <h1>{{title}}</h1>
      <p class="max-w-[98%] w-full">{{subtitle}}</p>
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
}
#line-chart {
  border-radius: 12px;
}
</style>
