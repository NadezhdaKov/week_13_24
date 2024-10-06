
function countDifference () {
    const result = document.querySelector('#result') //абзац в котором будет отображаться текст

    const userDate = document.querySelector('#userDate')
    const userDateStr = userDate.value;
    const userDateTimestamp = Date.parse(userDateStr);
    const userDateValue = new Date (userDateTimestamp);

    const currentDate = new Date ();
    const currentDateTimestamp = Date.parse(currentDate);

    //значения для дальнейшего сравнения с текущей датой:
    const userYear = userDateValue.getFullYear();
    const userMonth = userDateValue.getMonth();
    const userDay = userDateValue.getDate();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    day=1000*60*60*24

    if (Number.isNaN(userDateTimestamp)) {
        document.querySelector('#result').innerHTML = 'Укажите дату рождения';
    }
    
    else if (userMonth >= currentMonth && userDay >= currentDay) {
        const thisYearDate = new Date (currentYear, userMonth, userDay);
        const thisYearDateTimestamp = Date.parse(thisYearDate);
        const thisYearDayDiff = Math.ceil((thisYearDateTimestamp-currentDateTimestamp)/day);

        switch (thisYearDayDiff=1) {
            case 1:
            document.querySelector('#result').innerHTML = `До Вашего дня рождения остался ${thisYearDayDiff} день`;
            break;


            default:
            document.querySelector('#result').innerHTML = `До Вашего дня рождения осталось ${thisYearDayDiff} дней (дня)`;
        }
    }

    else {
        const nextYearDate = new Date (currentYear+1, userMonth, userDay);
        const nextYearDateTimestamp = Date.parse(nextYearDate);
        const nextYearDayDiff = Math.ceil((nextYearDateTimestamp-currentDateTimestamp)/day);
        document.querySelector('#result').innerHTML = `До Вашего дня рождения осталось ${nextYearDayDiff} дней (дня)`;
    }
}
