export function dropdown() {
    $('.dropdownButton').click(function () {
        if ($(this).hasClass('dropdownButtonActive')) {
            $(this).removeClass('dropdownButtonActive')
            $(this).parent().children('.dropdownList').removeClass('dropdownListOpen')
        } else {
            $(this).parent().children('.dropdownList').addClass('dropdownListOpen')
            $(this).addClass('dropdownButtonActive')
        }
    })


    $('html').click(function() {
        $('.dropdownButton').removeClass('dropdownButtonActive')
        $('.dropdownList').removeClass('dropdownListOpen')
    });

    $('.dropdown').click(function(event){
        event.stopPropagation();
    });
}
