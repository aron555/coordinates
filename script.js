window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let findMeButton = document.getElementById('find-me');

// Check if the browser has support for the Geolocation API
    if (!navigator.geolocation) {

        findMeButton.attr("disabled");
        document.getElementById('no-browser-support').removeClass("uk-hidden");

    } else {
        findMeButton.addEventListener( 'change', function(getcoordinate) {

            if (this.checked) {

                getcoordinate.preventDefault();
                navigator.geolocation.getCurrentPosition(function (position) {

                    // Get the coordinates of the current possition.
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    var lat_ya = lat.toFixed(7);
                    var lng_ya = lng.toFixed(7);

                    document.getElementById('latitude').innerText = lat_ya;
                    document.getElementById('longitude').innerText = lng_ya;


                    var yamaps = "https://maps.yandex.ru/?text=" + lat_ya + "," + lng_ya;
                    var gmaps = "https://www.google.ru/maps/place/" + lat + "," + lng;

                    document.getElementById('callback').insertAdjacentHTML("beforeEnd", "<input name='coordinates_yandex' type='hidden' value='" + yamaps + "'>");
                    document.getElementById('callback').insertAdjacentHTML("beforeEnd", "<input name='coordinates_google' type='hidden' value='" + gmaps + "'>");

                });
            }
        });
    }

});
