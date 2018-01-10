var app = app || {};

(module => {
    const bookDetailPage = {}

    bookDetailPage.init(book) => {
        $('#book-author').text(book.author)
    }
    $('#book-detail-page').show()
        module.bookDetailPage = bookDetailPage
})(app)