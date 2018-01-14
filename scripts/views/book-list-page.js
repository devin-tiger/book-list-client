var app = app || {};

(module => {
    const bookListPage = {}
    bookListPage.initIndexView = (books) => {
        $('#book-list').empty()
        books.forEach(book => {
        $('#book-list').append(`<li class = "book-container" data-id="${book.id}">
        <img class = "book-image" src="${book.image_url}">        
        <div class = "book-info">
        <div class = "inner">${book.title}<br>
        ${book.author}<br>
        <input type="button" value = "view details" class = "book-detail inner" data-id="${book.id}"></div>
        </div>
        </li>`)
        })

        $('.book-detail').one('click', (e) => {
            const id = $(e.target).data('id')
            console.log('getting book info with id:', id)

            page('/books/' + id)
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)