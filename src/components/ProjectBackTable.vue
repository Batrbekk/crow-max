<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full table-container border text-center">
            <thead class="">
            <tr>
              <th scope="col" class="w-1/6 text-sm text-left font-medium px-6 py-4">
                Имя проекта
              </th>
              <th scope="col" class="w-1/6 text-sm text-left font-medium px-6 py-4">
                Январь
              </th>
              <th scope="col" class="w-1/6 text-sm font-medium px-6 py-4">
                Февраль
              </th>
              <th scope="col" class="w-1/6 text-sm text-left font-medium px-6 py-4">
                Март
              </th>
              <th scope="col" class="w-1/6 text-sm text-left font-medium px-6 py-4">
                Апрель
              </th>
              <th scope="col" class="w-1/6 text-sm text-left font-medium px-6 py-4">
                Май
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b ">
              <td class="w-1/6 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                ИП-Саданов-3
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left active-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="inProcess"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-1/6 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                Sona Lab
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left active-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-1/6 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                ExWelding
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left active-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="0 ₸"></payment-checkbox>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-1/6 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                АлГеоРитм-5
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left active-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="waiting"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="w-1/6 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                Investment Solutions Astana
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="finish"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="inProcess"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left active-td text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸" status="waiting"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
              </td>
              <td class="w-1/6 text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <payment-checkbox price="20 000 ₸"></payment-checkbox>
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
import PaymentCheckbox from '@/components/PaymentCheckbox'
export default {
  name: 'ProjectBackTable',
  components: {
    PaymentCheckbox
  },
  props: {
    showInMonth: Boolean
  }
}
</script>

<style lang="scss" scoped>
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
  .active-td {
    background-color: #E5F6F2!important;
  }
}
</style>
