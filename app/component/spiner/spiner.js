export function spinner() {
    (function($) {
        $('.spinner button:first-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner button:last-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
        });
    })(jQuery);
}
