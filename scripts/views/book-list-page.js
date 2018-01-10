var app = app || {};

(module => {
    const bookListPage = {}

    bookListPage.initIndexView = (books) => {

        books.forEach(book => {
            $('book-list').append(`<li>${book.title}</li>`)
        })

        $('#book-list'.on('click', 'li', (event) => {
            const id = $(event.target).data('id')
            
        }))
        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)