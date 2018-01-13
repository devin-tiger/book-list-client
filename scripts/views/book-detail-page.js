var app = app || {};

(module => {
    const bookDetailPage = {}

    const $page = $('#book-detail-page')

    bookDetailPage.init = (book) => {
        $('#book-details').empty()
        $('.page').hide()
        $('#book-details').append(`<li data-id="${book.id}">${book.title}:${book.author}:<img src="${book.image_url}">
        <input type="button" id="delete-button" value="Delete"/></li>`)
        $page.show()


    }

    $('#delete-button').one('click', 'input', (e) => {
        const deleteId = $(e.target).data('id')
        console.log('trying to delete book with id:', deleteId)
        app.Book.delete(deleteId)
    })

        module.bookDetailPage = bookDetailPage
})(app)