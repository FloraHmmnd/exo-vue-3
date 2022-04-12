<script setup>
import { ref, reactive } from "vue";
import {useLibraryStore} from "@/stores/library.js"
import { storeToRefs } from 'pinia'


const libraryStore = useLibraryStore()
const {library} = storeToRefs(libraryStore)

const props = defineProps({});

const newBook = reactive({
  id: libraryStore.books.length + 1,
  title: ref(''),
  author: ref(''),
  date: ref('')
});

const emit = defineEmits(["addNewBook"]);

const addNewBookButton = () => {
    
  emit("addNewBook", newBook);
};

</script>
<template>
  <h1>Ajouter un livre à la bibliothèque</h1>
  <div>
    <label>Auteur / Autrice</label>
    <input
      v-model="newBook.author"
      type="text"
      placeholder="nom de l'auteur / autrice"
      class="inputNameWriter"
    />
  </div>
  <div>
    <label>Titre</label>
    <input
      v-model="newBook.title"
      type="text"
      placeholder="titre du livre"
      class="inputBookTitle"
    />
  </div>
  <div>
    <label>Date</label>
    <input
      v-model="newBook.date"
      type="text"
      placeholder="date de l'ouvrage"
      class="inputNameWriter"
    />
  </div>

  <button @click="addNewBookButton">Ajouter</button>
  
</template>
