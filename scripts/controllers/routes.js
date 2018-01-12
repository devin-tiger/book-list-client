page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListPage.initIndexView(books)
    })
    //fetch all data for books
    //convert raw data into book instance
    //populate the list with books
    //handlebars template per book
})

page('/books/:id', (ctx) => {
    app.Book.fetchOne(ctx.params.id).then(book => {
        app.bookDetailPage.init(book)
    })
    
})

page('/books/create', () => app.bookCreatePage.init())

page('/error', () => {
    $('#error-page').show()
})

page.start()