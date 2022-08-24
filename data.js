

module.exports.getdate = getdate;

function getdate(){
  var today = new Date();
  var currentDay = today.getDay();
  var options = {weekday:'long',month:'long',day:'numeric'}
  today = today.toLocaleDateString("en-GB",options);
  return today;
}


module.exports.getday = getday;
function getday(){
  var today = new Date();
  var currentDay = today.getDay();
  var options = {weekday:'long'}
  today = today.toLocaleDateString("en-GB",options);
  return today;
}
