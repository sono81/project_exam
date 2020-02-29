fetch('https://api.spacexdata.com/v3/launches/next/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createInfo(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function createInfo(next) {

    var date = `${next.launch_date_utc}`;
    date = date.slice(0, 10);
    var nextEventName = document.querySelector('.rocket-name');
    var nextEventInfo = document.querySelector('.event-info');

    console.log(next.launch_date_utc);
    var deadline = new Date(date).getTime();
    setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        nextEventInfo.innerHTML = days + "d "  
        + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);

    nextEventName.innerHTML += `
    ${next.mission_name}
    `
}