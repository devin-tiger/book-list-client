var app = app || {};

(module => {
    const bookDetailPage = {}

    const $page = $('#book-detail-page')

    bookDetailPage.init = (book) => {
        $('#book-details').empty()
        $('.page').hide()
        $('#book-details').append(`<li data-id="${book.id}">${book.title}<br>${book.author}<br><img src="${book.image_url}"><br>
        <input type="button" class="delete" value="Delete"/></li>`)
        $page.show()

        $('#book-details').one('click', '.delete', (e) => {
            const id = $(e.target).parent().data('id')
            const confirmed = confirm('Are you sure you want to delete this book?')
            console.log('trying to delete book with id:', id)

            if (confirmed){
            app.Book.deleteOne(id)
            }
        })

    }


        module.bookDetailPage = bookDetailPage
})(app)