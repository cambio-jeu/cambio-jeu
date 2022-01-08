setTimeout(function(){
    document.body.className="";
},500);


// FOR SMALL EYES
const closeEyesSmall = () => {
  let closed = document.querySelectorAll(".eyes-closed");
  closed.forEach(el => {
    el.style.zIndex = "2";
    setTimeout(function() {
      el.style.zIndex = "0";
    }, 50);
  });
};

const randRangeSmall = (data) => {
  let newTime = data[Math.floor(data.length * Math.random())];
  return newTime;
};

const toggleSomethingSmall = () => {
  let timeArray = new Array(3000, 5000, 8000);

  closeEyesSmall();

  clearInterval(timerSmall);
  timerSmall = setInterval(toggleSomethingSmall, randRangeSmall(timeArray));
}

let timerSmall = setInterval(toggleSomethingSmall, 2000);
// 1000 = Initial timer when the page is first loaded


// FOR BIG EYES
const closeEyesBig = () => {
  let closed = document.querySelectorAll(".big-eyes-closed");
  closed.forEach(el => {
    el.style.zIndex = "2";
    setTimeout(function() {
      el.style.zIndex = "-1";
    }, 50);
  });
};

const randRangeBig = (data) => {
  let newTime = data[Math.floor(data.length * Math.random())];
  return newTime;
};

const toggleSomethingBig = () => {
  let timeArray = new Array(11000, 13000);

  closeEyesBig();

  clearInterval(timerBig);
  timerBig = setInterval(toggleSomethingBig, randRangeBig(timeArray));
}

let timerBig = setInterval(toggleSomethingBig, 5000);
// 1000 = Initial timer when the page is first loaded
