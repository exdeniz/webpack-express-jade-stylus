import { table } from './date.js'

export function grid() {
    require( 'datatables.net' )
    $("#table").DataTable({
        data: table,
        info: false,
        filter: false,
        "dom": "<\"top\"i>rt<\"bottom\"flp><\"clear\">",
        language: {
            lengthMenu: "Записей на странице _MENU_"
        },
        columns: [
            {
                data: null,
                className: 'center',
                defaultContent: "<input type=\"checkbox\"/>"
            },
            {title: "Дата"},
            {title: "Фамилия"},
            {title: "Имя"},
            {title: "Отчество"},
            {title: "Телефон"},
            {title: "Email"},
            {title: "VIN"},
            {title: "Класс а/м"},
            {title: "Тип двигателя"},
            {title: "Тип контракта"},
            {title: "Стоимость"},
            {
                data: null,
                className: 'center',
                defaultContent: "<a href=\"\" class=\"editor_edit\"></a>"
            },
            {
                data: null,
                className: 'center',
                defaultContent: "<a href=\"\" class=\"editor_remove\"></a>"
            }
        ]
    })
}
