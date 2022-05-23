<template>
  <div class="home-container">
    <sidebar-client-component active="2" class="fixed d-none-mob"/>
    <div class="flex ml-80 px-4 ml-none-mob">
      <div class="main-container py-5 container flex-col">
        <page-title title="Новая заявка"></page-title>
        <div class="mb-5 bg-white rounded p-4">
          <component-title class="mb-1.5" title="Заявка" />
          <div class="flex flex-col lg:flex-row items-start">
            <div class="mr-4">
              <div class="mt-4">
                <div class="form-container xl:w-96 w-full">
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
                <div class="form-container xl:w-96 w-full">
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
                <div class="form-container xl:w-96 w-full">
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
                <div class="form-container xl:w-96 w-full">
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
                <div class="">
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
              </div>
              <div class="mt-4">
                <div class="relative xl:w-96 range-form-container pt-1 text-left">
                  <label for="customRange1" class="form-label">
                    Объем продаж
                  </label>
                  <input type="range" class="w-full" min="1" max="5" step="1" />
                  <ul class="flex justify-between w-full px-[10px]">
                    <li class="flex justify-center relative"><span class="w-full">0</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>5 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>15 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>30 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>50 млн ₸</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <div class="relative xl:w-96 range-form-container pt-1 text-left">
                  <label for="customRange1" class="form-label">
                    Размер активов
                  </label>
                  <input type="range" class="w-full" min="1" max="5" step="1" />
                  <ul class="flex justify-between w-full px-[10px]">
                    <li class="flex justify-center relative"><span class="w-full">0</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>5 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>15 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>30 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>50 млн ₸</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <div class="relative xl:w-96 range-form-container pt-1 text-left">
                  <label for="customRange1" class="form-label">
                    Размер обязательств
                  </label>
                  <input type="range" class="w-full" min="1" max="5" step="1" />
                  <ul class="flex justify-between w-full px-[10px]">
                    <li class="flex justify-center relative"><span class="w-full">0</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>5 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>15 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>30 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>50 млн ₸</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <div class="relative xl:w-96 range-form-container pt-1 text-left">
                  <label for="customRange1" class="form-label">
                    Выбытие денег
                  </label>
                  <input type="range" class="w-full" min="1" max="5" step="1" />
                  <ul class="flex justify-between w-full px-[10px]">
                    <li class="flex justify-center relative"><span class="w-full">0</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>5 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>15 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>30 млн ₸</span></li>
                    <li class="flex justify-center relative"><span class="w-full">>50 млн ₸</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <div class="form-check flex items-center">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                  <label class="xl:w-96 form-check-label inline-block text-gray-800 text-left" for="flexCheckDefault">
                    Подтверждаю что все указанные данные верны, и даю согласие на проверку компании, а также частичную публикацию данных о компании согласно правилам
                  </label>
                </div>
              </div>
            </div>
            <div class="w-full w-3/12">
              <div class="mt-4">
                <div class="flex little-title-container items-center justify-between">
                  <h4>Фото</h4>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="mr-1.5" src="../../assets/icon/smGreenPlus.png" alt="">
                    Добавить
                  </button>
                </div>
                <div class="w-full mt-2">
                  <img class="w-full max-h-48" src="../../assets/cardInfoDesc/image.png" alt="">
                </div>
              </div>
              <div class="mt-4">
                <div class="flex little-title-container items-center justify-between">
                  <h4>Выписка со счета</h4>
                </div>
                <div class="form-container mt-2 w-full ">
                  <label for="document" class="flex items-start form-label inline-block mb-1 text-gray-700">
                    файл в формате 1С за 12 мес
                  </label>
                  <input
                    type="file"
                    class="form-control block w-full p-4 text-base font-normal text-gray-700 bg-white bg-clip-padding
                         border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                         focus:bg-white focus:border-green-600 focus:outline-none focus:shadow-none"
                    id="document"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="flex little-title-container items-center justify-between">
                  <h4>Документы</h4>
                  <button class="rounded-lg border py-2 px-4 mb-1.5 flex items-center">
                    <img class="mr-1.5" src="../../assets/icon/smGreenPlus.png" alt="">
                    Добавить
                  </button>
                </div>
                <div class="mt-2">
                  <div class="flex justify-between items-center">
                    <p>Презентация.ptx</p>
                    <button class="rounded-lg border py-2 px-4 mb-1.5 flex border-rose-600 text-rose-600 items-center">
                      Удалить
                      <img class="ml-1.5" src="../../assets/icon/delete.png" alt="">
                    </button>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <p>Презентация.ptx</p>
                    <button class="rounded-lg border py-2 px-4 mb-1.5 flex border-rose-600 text-rose-600 items-center">
                      Удалить
                      <img class="ml-1.5" src="../../assets/icon/delete.png" alt="">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <button class="rounded-lg px-4 draft-btn py-2 border-y-amber-500 bg-yellow-500 text-white">
                Сохранить в черновик
              </button>
              <button class="confirm-btn rounded-lg px-4 py-2 text-white">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarClientComponent from '@/components/SidebarClientComponent'
import PageTitle from '@/components/PageTitle'
import ComponentTitle from '@/components/ComponentTitle'
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'

export default {
  name: 'CreateRocketClient',
  components: {
    ComponentTitle,
    SidebarClientComponent,
    PageTitle,
    quillEditor
  },
  data () {
    return {}
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
  .form-container {
    p {
      color: #8C98A9;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      span {
        font-weight: 700;
      }
    }
    input {
      border-radius: .5rem!important;
      &[type=file] {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
  .form-check {
    label {
      font-family: 'Montserrat',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #1A3154;
    }
  }
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
.range-form-container {
  input {
    background-color: #50728E;
  }
  label {
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1A3154;
  }
  li {
    width: 4rem;
    span {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
      color: #8AA0B3;
    }
  }
}
.draft-btn {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
.confirm-btn {
  background-color: #00A47D;
  border-color: #00A47D;
}
</style>
