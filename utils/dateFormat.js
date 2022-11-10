const { format } = require('date-fns');
// import { compareAsc, format } from 'date-fns'

const currentDate = function () {
    format(new Date(), "yyyy-MM-dd" + "HH:MM")
}


// export currentDate
module.exports = currentDate;