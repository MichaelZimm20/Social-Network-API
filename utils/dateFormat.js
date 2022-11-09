import { format } from 'date-fns'

const currentDate = function () {
    format(new Date(), "yyyy-MM-dd" + "HH:MM")
}

console.log(currentDate());
// export currentDate
module.exports = currentDate;