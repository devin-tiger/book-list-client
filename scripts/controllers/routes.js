
page('/*',(ctx,next)=> {
    $('.page').hide()
    next()
})

page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListPage.initIndexView(books)
    })
})

page('/books/new', () => {
    console.log('this is create page')
    app.bookCreatePage.init()
})

page('/books/:id', (ctx) => {
    app.Book.fetchOne(ctx.params.id).then(book => {
        app.bookDetailPage.init(book)
    })
    
})

page('/login', () => {
    $('#login-page').show()
})

page('/error', () => {
    $('#error-page').show()
})

page.start()
