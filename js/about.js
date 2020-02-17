fetch('https://api.spacexdata.com/v3/info/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createInfo(json);
    })
    .catch(function (error) {
        console.log(error);
    });

    var content = document.querySelector('.content')

    function createInfo(info) {
        content.innerHTML = `   <p>
                                    ${info.summary}
                                </p>
                            <table>
                                <tr>
                                    <td>Founded:</td>
                                    <td>${info.founded}</td>
                                </tr>
                                <tr>
                                    <td>Founder:</td>
                                    <td>${info.founder}</td>
                                </tr>
                                <tr>
                                    <td>Employees:</td>
                                    <td>${info.employees}</td>
                                </tr>
                                <tr>
                                    <td>Ceo:</td>
                                    <td>${info.ceo}</td>
                                </tr>
                                <tr>
                                    <td>Cto:</td>
                                    <td>${info.cto}</td>
                                </tr>
                                <tr>
                                    <td>Coo:</td>
                                    <td>${info.coo}</td>
                                </tr>
                                <tr>
                                    <td>Cto propulsion:</td>
                                    <td>${info.cto_propulsion}</td>
                                </tr>
                                <tr>
                                    <td>Value:</td>
                                    <td>${info.valuation}</td>
                                </tr>
                                <tr>
                                    <td>---</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>${info.headquarters.address}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>${info.headquarters.city}</td>
                                </tr>
                                <tr>
                                    <td>State:</td>
                                    <td>${info.headquarters.state}</td>
                                </tr>
                                <tr>
                                    <td>---</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Links:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Website:</td>
                                    <td>${info.links.website}</td>
                                </tr>
                                <tr>
                                    <td>Flickr:</td>
                                    <td>${info.links.flickr}</td>
                                </tr>
                                <tr>
                                    <td>Twitter:</td>
                                    <td>${info.links.twitter}</td>
                                </tr>
                                <tr>
                                    <td>Elon's Twitter:</td>
                                    <td>${info.links.elon_twitter}</td>
                                </tr>
                            </table>
                            `

        console.log(info);
    }