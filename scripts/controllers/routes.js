// page('/*', (). hid\



// $doument.ready = () => { wrap entire file }

page('*',(ctx,next)=> {
    $('.page').hide()
    next()
})

page('/', () => {
    $('.page').hide()
    $('#book-list-page').show()
    app.Book.fetchAll().then(book =>  {
    app.bookListView.initIndexView({books})
    })
   
})

page('/books/:id', (ctx) => {
    $('.page').hide()

    console.log('id', ctx.params.id)

    app.book.fetchOne(ctx.params.id).then(books=>{
        console.log(book))
        app.booksDetailspage.init()

    $('#books-author').text(book.author)
    })


    $('#book-detail-page').show()

page('/books/create', () => {
    $('.page').hide()
    $('#book-create-page').show()
})

page('/error', () => {
    $('.page').hide()
    $('#book-error-page').show()
})

///fetch data for all books
///conert raw data into book instance
///populate list with books
//handlebars templates per book

page.start();