export function datepick() {
    require('bootstrap-datepicker')
    require('../../../bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js')

    $('.dateGroup span').datepicker({
        language: 'ru',
        format: 'dd-mm-yyyy'
        }).on("changeDate", function(e) {
            $(this).parent().children('input').val(
                $(this).datepicker('getFormattedDate')
            )
        })
    $('.dateGroup input').inputmask("dd-mm-yyyy",
        {
            "placeholder": "дд-мм-гггг",
            showMaskOnHover: false,
            // "oncomplete": function(e){
            //     $(this).parent().children('span').datepicker("setDate", $('.inputMaskDate').val())
            // }
    })

}
