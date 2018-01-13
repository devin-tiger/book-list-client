var app = app || {};

(module => { 

    const errorPage = {}

    const $page = $('error-page')

    

    errorPage.initErrorPage  = () => {
        $page.show()
         console.log('create page hello')
    } 

    module.errorPage = errorPage

})(app)