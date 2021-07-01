function updateMap() {

    let url = '/data.json';

    fetch(url).then((response) => {
        return response.json()
    }).then((rspData) => {
        console.log(rspData.data);

        rspData.data.forEach(element => {
            let latitude = element.latitude;
            let longitude = element.longitude;


            // Mark on map

            let infected = element.infected;
            if (infected > 255) {
                color = 'rgb(255, 0, 0)';
            }
            else {
                color = `rgb(${infected}, 0, 0)`;
            }

            // Infected
            var marker1 = new mapboxgl.Marker({
                color: `${color}`
            })
                .setLngLat([longitude, latitude])
                .addTo(map)


                // let recovered = element.recovered;
                // if (recovered > 255) {
                //     color2 = "rgb(255, 0, 0)";
                // }
                // else {
                //     color2 = `rgb(255, ${recovered}, 0)`;
                // }
    
                // // Recovered
                // var marker2 = new mapboxgl.Marker({
                //     color: color2
                // })
                //     .setLngLat([longitude, latitude])
                //     .addTo(map)

                
            });
        })
    
}

updateMap();