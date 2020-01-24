
export default class Function {

 convert24to12= (time) => {
  var hours = time[0] + time[1]
  var AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  var minutes = time[3] + time[4]
  var finalTime = hours + ":" + minutes + " " + AmOrPm;
  return finalTime
 }

 sliceSQLDate = (longdate) =>{
  let date = longdate.slice(0,10)
  return date
 }

 outputYMD= (longdate) =>{
  let yy = longdate.getFullYear()
  let mm = longdate.getMonth()
  let dd = longdate.getDate()

  return `${yy}/${mm}/${dd}`
 }
}
