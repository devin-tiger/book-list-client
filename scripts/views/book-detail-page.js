var app = app || {};

(module => {
    const bookDetailPage = {}

    const $page = $('#book-detail-page')

    bookDetailPage.init = (book) => {
        let realToken = '1234'
        let getToken = localStorage.getItem('Token');
        let token = JSON.parse(getToken)
        $('#book-details').empty()
        $('.page').hide()
        $('#book-details').append(`<li data-id="${book.id}">
        ${book.title}<br>
        ${book.author}<br>
        <img src="${book.image_url}"><br>${book.description}<br>
        <input type="button" class="delete admin" value="Delete"/><br>
        <input type="button" class="update admin" value="Update"/></li>`)
        if (token === realToken) {
            $('.admin').show()
            $('.logged-in').hide() 
        }else{$('.admin').hide()}
        $page.show()
        
        $('#book-details').one('click', '.delete', (e) => {
            const id = $(e.target).parent().data('id')
            const confirmed = confirm('Are you sure you want to delete this book?')
            console.log('trying to delete book with id:', id)
            
            if (confirmed){
                app.Book.deleteOne(id)
            }
        })
        
        
        $('#book-details').one('click', '.update', (e) => {
            const id = $(e.target).parent().data('id')
            console.log('trying to update book with id:', id)
            page('/books/update/' + id)
            
        })


    }


        module.bookDetailPage = bookDetailPage
})(app)