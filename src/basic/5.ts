enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
    return day >= 0 && day < 5 ? true : false
}

export {}

