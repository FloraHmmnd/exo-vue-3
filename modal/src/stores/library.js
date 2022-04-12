import { defineStore } from 'pinia'

export const useLibraryStore = defineStore({
  id: 'library',
  state: () => ({
    books: books
  }),
  getters: {
  },
  actions: {
    addBookToLibrary(newBook) {
      this.books = [...this.books, newBook]
    }
  }
})



const books = [
    { id: 1, title: "Le corbeau et le renard", author: "Jean De La Fontaine", date : "1679"},
    { id: 2, title: "Un barrage contre le Pacifique", author: "Marguerite Duras", date : "1960"  },
    { id: 3, title: "Sous la Mangrove", author: "Maryse Condé", date : "1973" }  
]