var app = app || {};

(module => {
    const adminView = {}
    const $view =('#admin-view')

    adminView.init = () =>{
    console.log('hello admin this is your page ')
    $view.show()
}
module.adminView = adminView

}) (app)