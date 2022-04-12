<script setup>
import {useLibraryStore} from "@/stores/library.js"
import Modal from "@/components/Modal.vue";
import Form from "@/components/Form.vue";
import { ref } from "vue";
import { storeToRefs } from 'pinia'


const isModalVisible = ref(false);

const showModalBook = (data) => {
  isModalVisible.value = true;
  currentBook.value = data
};

const closeModalButton = () => {
  isModalVisible.value = false;
};

const libraryStore = useLibraryStore()
const { books } = storeToRefs(libraryStore)
const currentBook = ref({})


</script>

<template>
  <div class="list-of-books">
    <ul>
      <li v-for="book in books" :key="book.id"> {{book.title}}
            <button type="button" class="btn" @click="showModalBook(book)">+</button>
      </li>
    </ul>
  </div>
 <Form @addNewBook="libraryStore.addBookToLibrary($event)"></Form> 
 <Modal v-if="isModalVisible" @closeModal="closeModalButton" :titleModal="currentBook.author">
    <template #bodyModal>
      Titre : {{currentBook.title}}
    </template>
    <template #footerModal>
      Date : {{currentBook.date}}
    </template>
</Modal>
</template>
