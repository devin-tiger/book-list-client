///do book list stuff here.

var app || {};

(modle => {
    const booklistPage = {}
    booklistPage.initIndexView = (books) => {
        console.log(book)

        books.forEach(book => {
        $('#book-list').append(`<li data-id ="${book.book.title}">${book.title}</li>`)
        })

        $('#book-list').on ('click', 'li', (event)=> {
            console.log(event.target) ///instert book id
        })

        $('#book-list-page').show()

        ///adding DOM manipulation
    }

    module.booklistPage = booklistPage


})