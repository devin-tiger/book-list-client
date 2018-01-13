var app = app || {};

(module => {
    const bookListPage = {}
    bookListPage.initIndexView = (books) => {
        $('#book-list').empty()
        books.forEach(book => {
        $('#book-list').append(`<li data-id="${book.id}><br><div class = "book-info"><p class = "book-title"> ${book.title}</p>
        <p class = "book-author">${book.author}</p><input type="button" value = "view details" id = "book-detail"></div>
        <img src="${book.image_url}">
        
        </li>`)
        })

        $('#book-detail').one('click', 'input', (event) => {
            const id = $(event.target).parent().data('id')
            page('/books/' + id)
            
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)