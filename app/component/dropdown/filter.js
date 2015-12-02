export function filter() {
    $('.filterTableButton').click(function () {
        if ($(this).hasClass('filterTableButtonActive')) {
            $(this).removeClass('filterTableButtonActive')
            $(this).parent().children('.filterTableFrame').removeClass('filterTableFrameOpen')
        } else {
            $(this).parent().children('.filterTableFrame').addClass('filterTableFrameOpen')
            $(this).addClass('filterTableButtonActive')
        }
    })


    $('html').click(function() {
        $(this).removeClass('filterTableButtonActive')
        $(this).parent().children('.filterTableFrame').removeClass('filterTableFrameOpen')
    });

    $('.filterTable').click(function(event){
        event.stopPropagation();
    });
}
