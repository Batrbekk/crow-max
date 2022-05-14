<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto project-table-container sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full table-container border text-center">
            <thead class="">
            <tr>
              <th scope="col" class="w-3/12 text-sm text-left font-medium px-6 py-4">
                Имя проекта
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Срок
              </th>
              <th v-show="showInMonth" scope="col" class="text-sm font-medium px-6 py-4">
                В этом месяце
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Ставка
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Сумма займа
              </th>
              <th scope="col" class="text-sm text-left font-medium px-6 py-4">
                Дата
              </th>
              <th scope="col" class="w-4/12 text-sm text-left font-medium px-6 py-4">
                Остаток
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b">
              <td class="w-3/12 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                ИП-Саданов-3
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                12
              </td>
              <td v-show="showInMonth" class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <sum-table price="4200" icon-type="success"></sum-table>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                21%
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                12 янв 2022
              </td>
              <td class="w-4/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <proggress-bar month="3 мес" :success=true :bar-procent=85></proggress-bar>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-3/12 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                Sona Lab
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                6
              </td>
              <td v-show="showInMonth" class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <sum-table price="5000" icon-type="success"></sum-table>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                25%
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                10 дек 2021
              </td>
              <td class="w-4/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <proggress-bar month="3 мес" :bar-procent=35 :success=false></proggress-bar>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-3/12 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                ExWelding
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                8
              </td>
              <td v-show="showInMonth" class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <sum-table price="4000" icon-type="unsuccess"></sum-table>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                20%
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                01 дек 2021
              </td>
              <td class="w-4/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <proggress-bar month="3 мес" :bar-procent=50 :success=false></proggress-bar>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-3/12 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                АлГеоРитм-5
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                12
              </td>
              <td v-show="showInMonth" class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <sum-table price="4 600" icon-type="warning"></sum-table>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                23%
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                12 янв 2022
              </td>
              <td class="w-4/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <proggress-bar month="3 мес" :success="true" :bar-procent=58></proggress-bar>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-3/12 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                Investment Solutions Astana
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                5
              </td>
              <td v-show="showInMonth" class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <sum-table price="4 200" icon-type="warning"></sum-table>
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                21%
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                200 000 ₸
              </td>
              <td class="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                12 янв 2022
              </td>
              <td class="w-4/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <proggress-bar month="3 мес" :bar-procent=20 :success=true></proggress-bar>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SumTable from '@/components/SumTable'
import ProggressBar from '@/components/ProggressBar'
export default {
  name: 'ProjectTable',
  components: {
    SumTable,
    ProggressBar
  },
  props: {
    showInMonth: Boolean
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .project-table-container {
    overflow-x: scroll!important;
  }
}
.table-container {
  thead {
    background-color: #E8EAEE;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.25);
    th {
      color: #1A3154;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>
