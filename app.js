const countbtn = document.getElementById('countDownbtn');
countbtn.addEventListener("click", countDownTimer);

function countDownTimer() {
    var daysValue = document.querySelector('#days').value;
    var hoursValue = document.querySelector('#hours').value;
    var minutesValue = document.querySelector('#minutes').value;
    
    if (daysValue === '' || hoursValue === '' || minutesValue ==='') {
        alert('Please Enter Values In The Respective Fields.')
    }
    else {
        timer(parseInt(daysValue), parseInt(hoursValue), parseInt(minutesValue));
    }

    function timer(d, h, m) {
        var totalSeconds = d * 86400 + h * 3600 + m * 60;

        setInterval(function () {
            var remainingDays = Math.floor(totalSeconds / 86400);
            var remainingHours = Math.floor((totalSeconds % 86400) / 3600);
            var remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
            var remainingSeconds = totalSeconds % 60;

            remainingDays = remainingDays < 10 ? "0" + remainingDays : remainingDays;
            remainingHours = remainingHours < 10 ? "0" + remainingHours : remainingHours;
            remainingMinutes = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
            remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

            document.getElementById("timer-child-container").textContent = remainingDays + ":" + remainingHours + ":" + remainingMinutes + ":" + remainingSeconds;

            totalSeconds--;

            if (totalSeconds < 0) {
                totalSeconds = d * 86400 + h * 3600 + m * 60;
            }
        }, 1000);
    }
    
    
}
