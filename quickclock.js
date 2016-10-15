var deadline = 'November 5 2016 08:00:00 GMT-0500';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' days ' + t.hours + ' hours ' + t.minutes + ' minutes ' + t.seconds + ' seconds';
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('clockdiv', deadline);

function updateClock(){
  var t = getTimeRemaining(endtime);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = t.hours;
  minutesSpan.innerHTML = t.minutes;
  secondsSpan.innerHTML = t.seconds;
  if(t.total<=0){
    clearInterval(timeinterval);
    clock.innerHTML = 'LIVE';
  }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);

