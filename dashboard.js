const ctx = document.getElementById('complianceChart');

const complianceChart = new Chart(ctx, {

    type: 'line',

    data: {

        labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep'
        ],

        datasets: [{
            label: 'Compliance %',

            data: [
                86,
                89,
                88,
                92,
                91,
                94
            ],

            borderColor: '#d6a84f',

            backgroundColor: 'rgba(214, 168, 79, 0.10)',

            borderWidth: 2,

            tension: 0.4,

            fill: true,

            pointRadius: 4,

            pointHoverRadius: 7
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        interaction: {
            intersect: false,
            mode: 'index'
        },

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return ' Compliance: ' +
                            context.parsed.y + '%';
                    }
                }
            }
        },

        scales: {

            y: {
                min: 70,
                max: 100,

                ticks: {
                    color: '#777',

                    callback: function(value) {
                        return value + '%';
                    }
                },

                grid: {
                    color: '#292929'
                }
            },

            x: {
                ticks: {
                    color: '#777'
                },

                grid: {
                    display: false
                }
            }
        }
    }
});

// risk distribution

const riskCtx = document
    .getElementById('riskChart');


const riskChart = new Chart(riskCtx, {

    type: 'doughnut',

    data: {

        labels: [
            'Low Risk',
            'Medium Risk',
            'High Risk',
            'Critical'
        ],

        datasets: [{
            
            data: [
                12,
                7,
                4,
                1
            ],

            backgroundColor: [
                '#4caf50',
                '#e5b94c',
                '#e0783e',
                '#d9534f'
            ],

            borderWidth: 0,

            hoverOffset: 6
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: '72%',

        plugins: {

            legend: {
                display: false
            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const value =
                            context.parsed;

                        return ` ${context.label}: ${value} mines`;
                    }
                }
            }
        }
    }
});

// new inspection

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", function() {

        const row = this.closest(".inspection-row");

        const mine =
            row.querySelector(".mine-name").textContent;

        alert("Opening inspection details for " + mine);

    });

});

// gis preview 

/* =================================
   DASHBOARD GIS MAP
================================= */
const dashboardMap = L.map("dashboardMap", {
    zoomControl: true,
    scrollWheelZoom: false
}).setView([23.5, 80.5], 5);

L.tileLayer(
    "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
        attribution: "Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, METI/NASA, NRCAN, Esri Japan, MapmyIndia, the GIS User Community",
        subdomains: ["server", "services"],
        maxZoom: 18
    }
).addTo(dashboardMap);
// =================================
// MINE DATA
// Demo data
// =================================

const dashboardMines = [

    {
        name: "Mine 01",
        location: "Jharkhand",
        lat: 23.3441,
        lng: 85.3096,
        risk: "Low"
    },

    {
        name: "Mine 02",
        location: "Jharkhand",
        lat: 23.7807,
        lng: 86.4304,
        risk: "Medium"
    },

     {
        name: "Mine 03",
        location: "Jharkhand",
        lat: 23.6739,
        lng: 86.1511,
        risk: "Low"
    },

    {
        name: "Mine 04",
        location: "West Bengal",
        lat: 23.685,
        lng: 87.685,
        risk: "Medium"
    },

      {
        name: "Mine 05",
        location: "West Bengal",
        lat: 23.5204,
        lng: 87.3119,
        risk: "Low"
    },

    {
        name: "Mine 06",
        location: "West Bengal",
        lat: 23.6200,
        lng: 87.2000,
        risk: "High"
    },

    {
        name: "Mine 07",
        location: "Odisha",
        lat: 20.2961,
        lng: 85.8245,
        risk: "High"
    },

    {
        name: "Mine 08",
        location: "Chhattisgarh",
        lat: 22.0797,
        lng: 82.1391,
        risk: "Critical"
    },


    {
        name: "Mine 09",
        location: "Chhattisgarh",
        lat: 22.3500,
        lng: 82.6800,
        risk: "Medium"
    },

    {
        name: "Mine 10",
        location: "Chhattisgarh",
        lat: 21.9000,
        lng: 82.0500,
        risk: "Low"
    },

    {
        name: "Mine 11",
        location: "Odisha",
        lat: 21.4700,
        lng: 84.0000,
        risk: "Medium"
    },


    {
        name: "Mine 12",
        location: "Madhya Pradesh",
        lat: 23.2599,
        lng: 77.4126,
        risk: "Medium"
    },

        {
        name: "Mine 13",
        location: "Madhya Pradesh",
        lat: 22.7200,
        lng: 75.8600,
        risk: "Low"
    },

    {
        name: "Mine 14",
        location: "Madhya Pradesh",
        lat: 24.1900,
        lng: 79.5000,
        risk: "High"
    },

    {
        name: "Mine 15",
        location: "Maharashtra",
        lat: 20.0077,
        lng: 79.2440,
        risk: "Low"
    },

    {
        name: "Mine 16",
        location: "Telangana",
        lat: 18.4386,
        lng: 79.1288,
        risk: "Low"
    },

     {
        name: "Mine 17",
        location: "Telangana",
        lat: 18.6700,
        lng: 79.9000,
        risk: "Medium"
    },

    {
        name: "Mine 18",
        location: "Telangana",
        lat: 19.0000,
        lng: 79.5000,
        risk: "High"
    },

    {
        name: "Mine 19",
        location: "Odisha",
        lat: 20.8500,
        lng: 85.3300,
        risk: "Low"
    },

    {
        name: "Mine 20",
        location: "Odisha",
        lat: 21.0000,
        lng: 85.4200,
        risk: "Medium"
    },

    {
        name: "Mine 21",
        location: "Jharkhand",
        lat: 23.6200,
        lng: 85.5200,
        risk: "High"
    },

    {
        name: "Mine 22",
        location: "Jharkhand",
        lat: 23.9500,
        lng: 86.8500,
        risk: "Low"
    },

    {
        name: "Mine 23",
        location: "Chhattisgarh",
        lat: 22.1000,
        lng: 83.1000,
        risk: "Medium"
    },

    {
        name: "Mine 24",
        location: "Maharashtra",
        lat: 20.2500,
        lng: 79.0000,
        risk: "High"
    }

];


// =================================
// MARKER COLOR
// =================================

function getMineColor(risk) {

    if (risk === "Low")
        return "#4caf50";

    if (risk === "Medium")
        return "#e5b94c";

    if (risk === "High")
        return "#e0783e";

    if (risk === "Critical")
        return "#d9534f";

    return "#ffffff";
}


// =================================
// ADD MARKERS
// =================================

dashboardMines.forEach(mine => {

    const color = getMineColor(mine.risk);


    const icon = L.divIcon({

        className: "custom-mine-marker",

        html: `
            <div style="
                width:14px;
                height:14px;
                background:${color};
                border:2px solid white;
                border-radius:50%;
                box-shadow:0 0 10px ${color};
            ">
            </div>
        `,

        iconSize: [14, 14],

        iconAnchor: [7, 7]

    });


    L.marker(
        [mine.lat, mine.lng],
        {
            icon: icon
        }
    )

    .addTo(dashboardMap)

    .bindPopup(`
        
        <strong>${mine.name}</strong>
        <br>

        ${mine.location}

        <br>

        Risk:
        <strong>${mine.risk}</strong>

        <br><br>

        <a href="gis.html">
            View Mine Details →
        </a>

    `);

});