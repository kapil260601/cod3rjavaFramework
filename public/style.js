


function getWeekStartAndEndDates(year, month) {
    const weeks = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    let currentWeekStart = new Date(firstDayOfMonth);
    let currentWeekEnd = new Date(firstDayOfMonth);
    
    // Adjust currentWeekEnd to be Saturday instead of Sunday
    currentWeekEnd.setDate(currentWeekEnd.getDate() + (8 - firstDayOfMonth.getDay())); 

    while (currentWeekStart.getMonth() === month - 1) {
        // If the week's end is beyond the month's end, adjust it
        if (currentWeekEnd > lastDayOfMonth) {
            currentWeekEnd = new Date(lastDayOfMonth);
        }
        weeks.push({
            start: currentWeekStart.toISOString().split('T')[0],
            end: currentWeekEnd.toISOString().split('T')[0]
        });
        // Move to the next week
        currentWeekStart.setDate(currentWeekEnd.getDate() + 1);
        currentWeekEnd.setDate(currentWeekStart.getDate() + 6);
    }

    // Adjust the end date of the last week to the last day of the month
    if (currentWeekEnd.getMonth() === month - 1) {
        weeks[weeks.length - 1].end = lastDayOfMonth.toISOString().split('T')[0];
    }

    return weeks;
}

var year = 2024;
var month = 4;

const weeks = getWeekStartAndEndDates(year, month);
console.log(weeks);
