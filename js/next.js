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
        date = date.slice(0,10);
        var nextEventName = document.querySelector('.rocket-name');
        var nextEventInfo = document.querySelector('.event-info');

        nextEventName.innerHTML += `
        ${next.mission_name}
        `

        nextEventInfo.innerHTML += `
        ${date}
        `
    }
