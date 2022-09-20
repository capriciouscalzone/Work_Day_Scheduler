function simpleCalendar () {
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
            saveBtn = $('<button>').addClass("btn btn-primary saveBtn").text('save');
            $(row).append(timeCol).append(inputCol).append(saveBtn)
            $('#calendar').append(row);
        }

        function addIdToInput() {
            let inputId = document.getElementsByClassName('toDo-input');
            let length = inputId.length;
            for (i = 0; i < length; i++) {
                inputId[i].id = "input-field-" + (i + 1);
            }
        };
        addIdToInput();

        function addIdToSaveBtn() {
            let saveBtnId = document.getElementsByClassName('saveBtn');
            let length = saveBtnId.length;
            for (i=0; i < length; i++) {
                saveBtnId[i].id = "saveBtn-Id-" + (i = 1);
            }
        }
        addIdToSaveBtn();

        let saveBtnId1 = $('saveBtn-Id-1');
        let saveBtnId2 = $('saveBtn-Id-2');
        let saveBtnId3 = $('saveBtn-Id-3');
        let saveBtnId4 = $('saveBtn-Id-4');
        let saveBtnId5 = $('saveBtn-Id-5');
        let saveBtnId6 = $('saveBtn-Id-6');
        let saveBtnId7 = $('saveBtn-Id-7');
        let saveBtnId8 = $('saveBtn-Id-8');
        let saveBtnId9 = $('saveBtn-Id-9');

        let toDoInput1 = $('#input-field-1');
        let toDoInput2 = $('#input-field-2');
        let toDoInput3 = $('#input-field-3');
        let toDoInput4 = $('#input-field-4');
        let toDoInput5 = $('#input-field-5');
        let toDoInput6 = $('#input-field-6');
        let toDoInput7 = $('#input-field-7');
        let toDoInput8 = $('#input-field-8');
        let toDoInput9 = $('#input-field-9');

        let storedInput;


        $(saveBtnId1).on('click', function(event) {
            event.preventDefault();
            let toDoInput1 = $('#input-field-1').val().trim();
            localStorage.setItem('toDo1', (toDoInput1));
        });
        let savedInput1 = (localStorage.getItem('toDo1'));
        toDoInput1.val(savedInput1);


    })
}