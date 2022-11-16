const { format } = require('date-fns');
// import { compareAsc, format } from 'date-fns'

const currentDate = function () {
    return format(new Date(), "MM-dd-yyyy pp")
}


// export currentDate
module.exports = currentDate;