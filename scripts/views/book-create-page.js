var app = app || {};

(module => { 

    const bookCreatePage = {}

    const $page = $('#book-create-page')

    bookCreatePage.init = () => $page.show()

    module.bookCreatePage = bookCreatePage

})(app)