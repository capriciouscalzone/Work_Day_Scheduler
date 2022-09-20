function baseCalendar () {
    $(document).ready(function() {
        let momentVar = moment().format('ddd, MMM Do, YYY h:mm a');
        let workHours = ['9 a.m.', '10 a.m.','11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.']

        function currentDay() {
            let currentDay = $('#currentDay'). text(momentVar);
            return currentDay;
        }

        currentDay();
        let row;
        let timeCol;

        for (i = 0; < workHours.length; i++) {
            let row = $("</div>").addClass('row');
            let timeCol = $('<text-area>').text(workHours[i].addClass('hour'));
            let inputCol = $('<input>').attr('placeholder','Note Goes Here').addClass('toDo-input time-block');
        }
    })
}