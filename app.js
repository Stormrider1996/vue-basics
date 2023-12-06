 const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanders',
            age: 25,
            x: 0,
            y: 0,
            books: [
                { title: 'The Final Empire', author: 'Michael', isFav: true },
                { title: 'Seoska budala', author: 'Franjo', isFav: true },
                { title: 'Seoska budala 2, selim se u grad', author: 'Franjo', isFav: true },
            ],
            url: 'http://127.0.0.1:3000/Vue Basics/index.html'
        }

    },

    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
    },

    // here we define data types that depend on other data types
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')