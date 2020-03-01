var rocketArray = [];
var selection = document.querySelector('#selection');
var content = document.querySelector('#content');

fetch('https://api.spacexdata.com/v3/rockets/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        populateSelect(json);
    })
    .catch(function (error) {
        console.log(error);
    });

    function populateSelect(rocketObj) {
        rocketArray = rocketObj;
        rocketArray.forEach(function(rocket) {
            selection.innerHTML += `
            <option value="${rocket.rocket_name}">${rocket.rocket_name}</option>
            `
        });
    };

    selection.addEventListener('change', filterRockets);
    function filterRockets() {
        var selectedValue = selection.options[selection.selectedIndex].text;
        var lowerCaseSearch = selectedValue.toLowerCase();
        var filteredRockets = rocketArray.filter(function(rocket) {
            var lowerCase = rocket.rocket_name.toLowerCase();
            if (lowerCase.startsWith(lowerCaseSearch)) {
                return true
            }
        });

        content.innerHTML = "";

        filteredRockets.forEach(function(rocket) {
            content.innerHTML += `
            <table class="js-table">
                <tr>
                    <td>Name:</td>
                    <td>${rocket.rocket_name}</td>
                </tr>
                <tr>
                    <td>Company:</td>
                    <td>${rocket.company}</td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td>${rocket.country}</td>
                </tr>
                <tr>
                    <td>-----</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Heigth:</td>
                    <td>${rocket.height.meters} meters</td>
                </tr>
                <tr>
                    <td>Engine Type:</td>
                    <td>${rocket.engines.type}</td>
                </tr>
                <tr>
                    <td>Propellant 1</td>
                    <td>${rocket.engines.propellant_1}</td>
                </tr>
                <tr>
                    <td>Propellant 2</td>
                    <td>${rocket.engines.propellant_2}</td>
                </tr>
                <tr>
                    <td>kN:</td>
                    <td>${rocket.engines.thrust_vacuum.kN}</td>
                </tr>
                <tr>
                    <td>-----</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wikipedia:</td>
                    <td><a href="${rocket.wikipedia}">${rocket.rocket_name}'s wikipedia page</a></td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>${rocket.description}</td>
                </tr>

            </table>
            `
        });
    };
