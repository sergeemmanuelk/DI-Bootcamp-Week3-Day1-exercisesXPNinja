function createCalendar(year, month) {
    // Get the first day of the month
    let firstDay = new Date(year, month - 1, 1)
    // Get the last day of the month
    let lastDay = new Date(year, month, 0)
  
    // Create the table element
    let table = document.createElement('table')
  
    // Create the table header element
    let thead = document.createElement('thead')
    table.appendChild(thead)
    let tr = document.createElement('tr')
    thead.appendChild(tr)

    let weekdayNames = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th')
        th.textContent = weekdayNames[i]
        tr.appendChild(th)
    }
  
    // Create the table body element
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)
  
    // Create a row for each week in the month
    let currentDay = firstDay

    while (currentDay <= lastDay) {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)

        for (let i = 0; i < 7; i++) {
            let td = document.createElement('td')
            tr.appendChild(td)

            if (currentDay.getMonth() === firstDay.getMonth()) {
                td.textContent = currentDay.getDate()
            }

            currentDay.setDate(currentDay.getDate() + 1)
        }
    }
  
    // Return the table element
    return table;
}

let calendar = createCalendar(2012, 9);
document.getElementById('calendar').appendChild(calendar);

  
  