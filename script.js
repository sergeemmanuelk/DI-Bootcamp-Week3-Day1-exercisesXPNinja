function createCalendar(year, month) {
    let table = document.createElement('table')
    // Create table header for weekday names
    table.appendChild(document.createElement('thead'))
    let trElement = document.createElement('tr')
    let days = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    days.forEach(d => {
        let th = document.createElement('th')
        th.textContent = d
        trElement.appendChild(th)
    })
    table.querySelector('thead').appendChild(trElement)
    // Build a list of all the days in the given month
    let date = new Date(year, month, 0),
        daysCount = date.getDate(),
        dates = []

    for (let day = 1; day <= daysCount; day++) {
        date.setDate(day)
        dates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    }

    let cal = [] // Calendar
    let week = []
    week.length = 7
    week.fill(null)
    dates.forEach(d => {
        let j = d.getDay()
        if (j === 1) { // Monday
            // Start a new week on every monday
            week = []
            week.length = 7
            week.fill(null)
        }
        week[(j - 1 + 7) % 7] = d
        if (j === 0 || d.getDate() === daysCount) // Sunday or end of month
            // Sunday is the last day of the week
            cal.push(week)
    })

    // Add weeks as rows (tr) and days as columns (td) to the table
    table.appendChild(document.createElement('tbody'))
    let today = new Date()
    cal.forEach(w => {
        let tr = document.createElement('tr')
        w.forEach(d => {
            let td = document.createElement('td')
            td.innerHTML = d === null ? '&middot;' : d.getDate().toString()
            if (d !== null && d.toDateString() == today.toDateString())
                td.classList.add('today') // Highlight today on the calendar
            tr.appendChild(td)
        })
        table.querySelector('tbody').appendChild(tr)
    })

    // Add the calendar table to the document
    let firstEl = document.body.children[0]
    firstEl.parentNode.insertBefore(table, firstEl)
}

createCalendar(2012, 9)

  
  