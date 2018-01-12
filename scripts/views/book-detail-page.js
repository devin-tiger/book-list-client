var app = app || {};

(module => {
    const bookDetailPage = {}

    bookDetailPage.init = (book) => {
        $('.page').hide()
        $('#book-author').text(book.author)
        // $('book-author').append(`<li data-id="${book.id}">${book.title}:${book.author}:<img src="${book.img_url}"></li>`)

    }
    $('#book-detail-page').show()
        module.bookDetailPage = bookDetailPage
})(app)