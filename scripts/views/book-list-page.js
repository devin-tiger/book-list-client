var app = app || {};

(module => {
    const bookListPage = {}
    bookListPage.initIndexView = (books) => {
        $('#book-list').empty()
        books.forEach(book => {
        $('#book-list').append(`<li data-id="${book.id}">${book.title}
        <br>
        ${book.author}
        <br>
        <img src="${book.image_url}"></li>`)
        })

        $('#book-list').one('click', 'li', (event) => {
            const id = $(event.target).data('id')
            page('/books/' + id)
            
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)