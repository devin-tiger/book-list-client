var app = app || {};

(module => {
    const bookListPage = {}
    bookListPage.initIndexView = (books) => {

        books.forEach(book => {
            $('book-list').append(`<li data-id="${book.id}">${book.title}:${book.author}:<img src="${book.img_url}"></li>`)
        })

        $('#book-list'.on('click', 'li', (event) => {
            const id = $(event.target).data('id')
            page('/books/' + id)
            
        }))
        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)