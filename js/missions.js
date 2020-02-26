var missionArray = [];
var selection = document.querySelector('#selection');
var content = document.querySelector('#content');

fetch('https://api.spacexdata.com/v3/missions/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        populateSelect(json);
    })
    .catch(function (error) {
        console.log(error);
    });

    function populateSelect(missionObj) {
        missionArray = missionObj;
        missionArray.forEach(function(mission) {
            selection.innerHTML += `
            <option value="${mission.mission_name}">${mission.mission_name}</option>
            `
        });
        console.log(missionObj);
    };

    selection.addEventListener('change', filterMissions);
    function filterMissions() {
        var selectedValue = selection.options[selection.selectedIndex].text;
        var lowerCaseSearch = selectedValue.toLowerCase();
        var filteredMissions = missionArray.filter(function(mission) {
            var lowerCase = mission.mission_name.toLowerCase();
            if (lowerCase.startsWith(lowerCaseSearch)) {
                return true
            }
        });

        content.innerHTML = "";

        filteredMissions.forEach(function(mission) {

            var str = `${mission.payload_ids}`.split(',').join('<br>');

            content.innerHTML += `
            <table class="js-table">
                <tr>
                    <td>Name:</td>
                    <td>${mission.mission_name}</td>
                </tr>
                <tr>
                    <td>Id:</td>
                    <td>${mission.mission_id}</td>
                </tr>
                <tr>
                    <td>Manufacturers:</td>
                    <td>${mission.manufacturers}</td>
                </tr>
                <tr>
                    <td>Payload id's:</td>
                    <td>${str}</td>
                </tr>
                <tr>
                    <td>-----</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wikipedia:</td>
                    <td><a href="${mission.wikipedia}">${mission.mission_name}'s wikipedia page</a></td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>${mission.description}</td>
                </tr>

            </table>
            `
        });
    };
