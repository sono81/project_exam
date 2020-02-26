var launchArray = [];
var selection = document.querySelector('#selection');
var content = document.querySelector('#content');

fetch('https://api.spacexdata.com/v3/launches/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        populateSelect(json);
    })
    .catch(function (error) {
        console.log(error);
    });

    function populateSelect(launchObj) {
        launchArray = launchObj;
        launchArray.forEach(function(launch) {
            selection.innerHTML += `
            <option value="${launch.mission_name}">${launch.mission_name}</option>
            `
        });
        console.log(launchObj);
    };

    selection.addEventListener('change', filterLaunches);
    function filterLaunches() {
        var selectedValue = selection.options[selection.selectedIndex].text;
        var lowerCaseSearch = selectedValue.toLowerCase();
        var filteredLaunches = launchArray.filter(function(launch) {
            var lowerCase = launch.mission_name.toLowerCase();
            if (lowerCase.startsWith(lowerCaseSearch)) {
                return true
            }
        });

        content.innerHTML = "";

        filteredLaunches.forEach(function(launch) {

            var success = `${launch.launch_success}`
            var date = `${launch.launch_date_utc}`;
            date = date.slice(0,10);

            if (success === 'true') {
                success = 'Yes'
            } else {
                success = 'No'
            }


            content.innerHTML += `
            <table class="js-table">
                <tr>
                    <td>Name:</td>
                    <td>${launch.mission_name}</td>
                </tr>
                <tr>
                    <td>Id:</td>
                    <td>${launch.mission_id}</td>
                </tr>
                <tr>
                    <td>Rocket:</td>
                    <td>${launch.rocket.rocket_name}</td>
                </tr>
                <tr>
                    <td>Launch Date (UTC):</td>
                    <td>${date}</td>
                </tr>
                <tr>
                    <td>Launch Site:</td>
                    <td>${launch.launch_site.site_name}</td>
                </tr>
                <tr>
                    <td>Launch Success:</td>
                    <td>${success}</td>
                </tr>
                <tr>
                    <td>Article:</td>
                    <td><a href="${launch.links.article_link}">Article on ${launch.mission_name}</a></td>
                </tr>
                <tr>
                    <td>Wikipedia:</td>
                    <td><a href="${launch.links.wikipedia}">${launch.mission_name}'s wikipedia page</a></td>
                </tr>
                <tr>
                    <td>Details:</td>
                    <td>${launch.details}</td>
                </tr>

            </table>

            <img src="${launch.links.mission_patch_small}" alt="mission patch" class="patch">
            `
        });
    };
