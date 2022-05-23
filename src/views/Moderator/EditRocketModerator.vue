<template>
  <div class="home-container">
    <sidebar-moderator-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Заявка №5544"></page-title>
        <div class="mb-5 bg-white rounded p-4">
          <component-title class="mb-1.5" title="Заявка" />
          <div class="mt-4">
            <div class="form-container w-full">
              <label for="project-name" class="flex justify-between mb-1">Наименование проекта</label>
              <input
                type="text"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="project-name"
                placeholder="Наименование проекта"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container w-full">
              <label for="sum-invest" class="flex justify-between mb-1">Необходимая сумма финансирования</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="sum-invest"
                placeholder="0"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container w-full">
              <label for="goal" class="flex justify-between mb-1">Цель</label>
              <input
                type="text"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="goal"
                placeholder="Цель"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container w-full">
              <label for="month" class="flex justify-between mb-1">Срок займа в месяцах</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="month"
                placeholder="0"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container w-full">
              <p class="text-left mb-1">Дата</p>
              <div class="datepicker form-container relative form-floating w-full" data-mdb-with-icon="false" id="input-toggle-datepicker">
                <input type="text"
                       class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                       placeholder="Select a date" data-mdb-toggle="input-toggle-datepicker" />
                <label for="floatingInput" class="text-gray-700">Дата</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div>
              <p class="text-left mb-1">Описание проекта</p>
              <quill-editor
                v-model:value="state.content"
                :options="state.editorOption"
                :disabled="state.disabled"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @change="onEditorChange($event)"
              />
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96 mr-0 xl:mr-4">
              <label for="select-project" class="flex items-start form-label inline-block mb-1 text-gray-700">
                Вид деятельности
              </label>
              <select id="select-project" class="form-select appearance-none w-full block px-4 py-3.5 text-base font-normal bg-transparent
                         bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:text-green-700 focus:bg-transparent focus:border-green-600 focus:shadow-none
                         focus:outline-none"
                      aria-label="Default select example">
                <option selected value="1">Услуги 1</option>
                <option value="2">Услуги 2</option>
                <option value="3">Услуги 3</option>
              </select>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <label for="precentage" class="flex justify-between mb-1">Процентная ставка</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="precentage"
                placeholder="0%"/>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-white rounded p-4">
          <component-title class="mb-1.5" title="Медиа" />
          <div class="mt-4 flex flex-col lg:flex-row items-start justify-between">
            <div class="mr-4">
              <img src="../../assets/cardInfoDesc/image.png" alt="">
            </div>
            <div class="w-full">
              <div>
                <div class="little-title-container flex items-center justify-between">
                  <h4 class="text-left pb-1.5">Внешний источник</h4>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="" src="../../assets/icon/smGreenPlus.png" alt="">
                  </button>
                </div>
                <div class="document-name mt-2 flex items-center justify-between">
                  <p class="text-left">Презентация.ptx</p>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="" src="../../assets/icon/delete.png" alt="">
                  </button>
                </div>
                <div class="document-name mt-2 flex items-center justify-between">
                  <p class="text-left">Дополнительный материал.docx</p>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="" src="../../assets/icon/delete.png" alt="">
                  </button>
                </div>
              </div>
              <div class="mt-4">
                <div class="little-title-container flex items-center justify-between">
                  <h4 class="text-left pb-1.5">Шаблон договора</h4>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="" src="../../assets/icon/smGreenPlus.png" alt="">
                  </button>
                </div>
                <div class="document-name mt-2 flex items-center justify-between">
                  <p class="text-left">Договор займа.docx</p>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="" src="../../assets/icon/delete.png" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-white rounded p-4">
          <component-title class="mb-1.5" title="Временные рамки" />
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <p class="text-left mb-1">Дата</p>
              <div class="datepicker form-container relative form-floating w-full" data-mdb-with-icon="false" id="input-toggle-datepicker">
                <input type="text"
                       class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                       placeholder="Select a date" data-mdb-toggle="input-toggle-datepicker" />
                <label for="floatingInput" class="text-gray-700">Дата</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <label for="day-for-sum" class="flex justify-between mb-1">Дней на сбор</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="day-for-sum"
                placeholder="Дней на сбор"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <label for="freez-date" class="flex justify-between mb-1">Дней заморозки</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="freez-date"
                placeholder="Дней заморозки"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <label for="day-for-sign" class="flex justify-between mb-1">Дней на подпись документов</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="day-for-sign"
                placeholder="Дней на подпись документов"/>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-container xl:w-96">
              <label for="day-for-pay" class="flex justify-between mb-1">Число месяца для выплаты</label>
              <input
                type="number"
                class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                id="day-for-pay"
                placeholder="Число месяца для выплаты"/>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-white rounded p-4">
          <component-title class="mb-1.5" title="Аналитика"/>
          <div class="mt-4">
            <card-bar class="w-full card-bar-container" />
          </div>
          <div class="mt-3">
            <div class="little-title-container">
              <h4 class="text-left pb-1.5">Оборот</h4>
            </div>
            <div class="flex items-center avrg-container mt-3">
              <div class="text-left mr-4">
                <p class="mb-1.5">Объем продаж</p>
                <p class="mb-1.5">Размер активов</p>
                <p class="mb-1.5">Размер обязательств</p>
                <p>Выбытие денег</p>
              </div>
              <div class="text-left flex flex-col">
                <b class="mb-1.5">>50 млн</b>
                <b class="mb-1.5">>50 млн</b>
                <b class="mb-1.5">>50 млн</b>
                <b>>50 млн</b>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="little-title-container flex items-center justify-between">
              <h4 class="text-left pb-1.5">Внешний источник</h4>
              <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                <img class="mr-1.5" src="../../assets/icon/recycle.png" alt="">
                Запросить из compra
              </button>
            </div>
            <div class="mt-4 data-registration-container flex items-start text-left w-full">
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
                <h1 class="date-title pb-1.5 mb-1.5">Налоговые задолженности</h1>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarModeratorComponent from '@/components/SidebarModeratorComponent'
import PageTitle from '@/components/PageTitle'
import ComponentTitle from '@/components/ComponentTitle'
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'
import CardBar from '@/components/CardBar'

export default {
  name: 'EditRocketModerator',
  components: {
    ComponentTitle,
    SidebarModeratorComponent,
    PageTitle,
    quillEditor,
    CardBar
  },
  setup () {
    const state = reactive({
      content: '<p>2</p>',
      _content: '',
      editorOption: {
        placeholder: '',
        modules: {}
      },
      disabled: false
    })

    const onEditorBlur = (quill) => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = (quill) => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = (quill) => {
      console.log('editor ready!', quill)
    }
    const onEditorChange = ({ quill, html, text }) => {
      state._content = html
    }

    return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
  }
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
  .import-with-title-container {
    flex-direction: column;
  }
  .mob-direction-column {
    flex-direction: column;
  }
  .data-registration-container {
    flex-direction: column;
    .date-text-container {
      width: 100%!important;
      &:first-child {
        margin-bottom: 2rem;
      }
      span {
        margin-right: .5rem;
      }
    }
  }
}
@media only screen and (min-width: 600px) and (max-width:1000px) {
  .form-select {
    width: 100%!important;
  }
  .import-with-title-container {
    flex-direction: column;
  }
  .mob-direction-column {
    flex-direction: column;
  }
  .data-registration-container {
    flex-direction: column;
    .date-text-container {
      width: 100%!important;
      &:first-child {
        margin-bottom: 2rem;
      }
      span {
        margin-right: .5rem;
      }
    }
  }
}
.home-container {
  background-color: #E5E5E5;
}
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
      background-image: url('../../assets/icon/down.svg');
    }
  }
  .table-import-container {
    .import-btn {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #1A3154;
      background-color: transparent;
    }
    button {
      background-color: #00A47D;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
.modal {
  h5 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #164368;
    border-color: #00A47D;
  }
}
.little-title-container {
  h4 {
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #50728E;
  }
  button {
    border-color: #00A47D;
    color: #00A47D;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  border-bottom: 2px solid #80D1BE;

}
.document-name {
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #53647F;
  }
  button {
    border-color: #FF5583;
    color: #00A47D;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
}
.avrg-container {
  p {
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1A3154;
  }
  b {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
}
.date-title {
  font-family: 'Gilroy',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
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
