var app = app || {};

(module => {
    const bookDetailPage = {}

    const $view = $('#book-detail-page')

    bookDetailPage.init = (book) => {
        $('.page').hide()
        $('#book-details').append(`<li data-id="${book.id}">${book.title}:${book.author}:<img src="${book.img_url}"></li>`)

    }
    $view.show()
        module.bookDetailPage = bookDetailPage
})(app)