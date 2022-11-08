
 function getAge(birthdateString: string | undefined) {
  if(!birthdateString) return 0
  const birthdate = new Date(birthdateString);
  var now = new Date();

  function isLeap(year: any) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

  // days since the birthdate    
  var days = Math.floor((now.getTime() - birthdate.getTime())/1000/60/60/24);
  var age = 0;
  // iterate the years
  for (var y = birthdate.getFullYear(); y <= now.getFullYear(); y++){
    var daysInYear = isLeap(y) ? 366 : 365;
    if (days >= daysInYear){
      days -= daysInYear;
      age++;
      // increment the age only if there are available enough days for the year.
    }
  }
  return age;
}

export default getAge;