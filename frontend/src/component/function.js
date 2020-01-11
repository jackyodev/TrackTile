
export default class Function {

 convert24to12= (time) => {
  var hours = time[0] + time[1]
  var AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  var minutes = time[3] + time[4]
  var finalTime = hours + ":" + minutes + " " + AmOrPm;
  return finalTime
 }

}
