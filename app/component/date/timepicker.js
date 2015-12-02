export function timepick() {
    require('jquery')
    require('./jquery.timepicker.js')
    $('.timepicker').timepicker({
        'timeFormat': 'H:i',
        step: 60,
        'minTime': '8:00am',
        'maxTime': '23:00pm',
        showOn: ['click', 'focus']
    });
}
