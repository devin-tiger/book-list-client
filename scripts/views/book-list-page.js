var app = app || {};

(module => {
    const bookListPage = {}
    bookListPage.initIndexView = (books) => {
        $('#book-list').empty()
        books.forEach(book => {
        $('#book-list').append(`<li data-id="${book.id}"><br><p class = "book-title"> ${book.title}</p>
        <p class = "book-author">${book.author}</p><input type="button" value = "view details" class = "book-detail" data-id="${book.id}">
        <img src="${book.image_url}">
        
        </li>`)
        })

        // $('#book-detail').on('click', 'button', (event) => {

        //     const id = $(event.target).parent().data('id')
        //     page('/books/' + id)
            
        // })
        $('.book-detail').one('click', (e) => {
            const id = $(e.target).data('id')
            console.log('getting book info with id:', id)

            page('/books/' + id)
        })

        $('#book-list-page').show()
    }

    module.bookListPage = bookListPage

})(app)