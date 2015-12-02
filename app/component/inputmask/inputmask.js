export function inputmask() {
    require('./jquery.inputmask.bundle')
    $('.inputMaskRuble').inputmask({
        alias: 'numeric',
        'groupSeparator': ' ', 'autoGroup': true,
        digits: 5,
        suffix: ' р.',
        placeholder: '0 р.'
    })

    $('.inputMaskPhone').inputmask("+7 (999) 999-9999",{
        showMaskOnHover: false
    })

    $('.inputMaskDate').inputmask("dd-mm-yyyy",
        {
            "placeholder": "дд-мм-гггг",
            showMaskOnHover: false,
            "oncomplete": function(e){
                $('#datepicker').datepicker("setDate", $('.inputMaskDate').val())
            }
    })
}
