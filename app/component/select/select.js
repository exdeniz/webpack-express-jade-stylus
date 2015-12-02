export function select() {
    require('selectize')
    $('select').selectize({
        wrapperClass: 'selectize-control-outline',
    })
}
