//Declaring and initializing variables
function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let date1 = new Date("2022-10-30")
let date2 = new Date();
document.getElementById("date-1").valueAsDate = date1;
document.getElementById("date-2").valueAsDate = new Date();
let timeDifference = date2.getTime() - date1.getTime();
let diff = new Date(timeDifference)
let yearDifference = diff.getFullYear() - 1970;
let monthDifference = monthDiff(date1,date2) ;
let dayDifference =  Math.round(timeDifference / (1000 * 3600 * 24));

// let dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));
output.innerHTML = `Difference between the day is <span>${dayDifference}</span> days <br>
                     Difference between the month is <span>${monthDifference}</span> months <br>
                    Difference between the year is <span>${yearDifference}</span> years`;

submit.addEventListener("click", () => {
  //Create a Date object from input value
      date1 = new Date(document.getElementById("date-1").value);
     date2 = new Date(document.getElementById("date-2").value);
  if (date1.getTime() && date2.getTime()) {

     timeDifference = date2.getTime() - date1.getTime();
     diff = new Date(timeDifference)
     yearDifference = diff.getFullYear() - 1970;
    monthDifference = monthDiff(date1,date2) ;
     dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));
    output.innerHTML = `Difference between the day is <span>${dayDifference}</span> days <br>
                         Difference between the month is <span>${monthDifference}</span> months <br>
                        Difference between the year is <span>${yearDifference}</span> years`;
  }

});