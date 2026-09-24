

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const closeSidebar = document.getElementById("closeSidebar");

    const topbar = document.querySelector(".topbar");
    const content = document.querySelector(".dashboard-content");

    const overlay = document.getElementById("sidebarOverlay");


    /* ================================
       OPEN / CLOSE SIDEBAR
    ================================= */

    function toggleSidebar() {

        sidebar.classList.toggle("closed");

        topbar.classList.toggle("sidebar-closed");

        content.classList.toggle("sidebar-closed");

    }


    /* Hamburger */

    menuBtn.addEventListener("click", function () {

        toggleSidebar();

    });


    /* X button */

    closeSidebar.addEventListener("click", function () {

        sidebar.classList.add("closed");

        topbar.classList.add("sidebar-closed");

        content.classList.add("sidebar-closed");

    });


    /* ================================
       NAVIGATION ACTIVE STATE
    ================================= */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", function () {

            navItems.forEach(nav => {

                nav.classList.remove("active");

            });

            this.classList.add("active");

        });

    });


    /* ================================
       LUCIDE ICONS
    ================================= */

    lucide.createIcons();


const mineOfficialMap = L.map("mineOfficialMap", {
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true
}).setView([23.3441, 85.3096], 14);


// ESRI MAP
L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
        attribution: "© Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, METI/NASA, NRCAN, Esri Japan, MapmyIndia, the GIS User Community",
        maxZoom: 18
    }
).addTo(mineOfficialMap);


// MINE 07 ZONES
const minePoints = [
    {
        name: "Main Mining Zone",
        lat: 23.3441,
        lng: 85.3096,
        risk: "Low",
        type: "Operational Zone"
    },
    {
        name: "Zone B",
        lat: 23.3455,
        lng: 85.3150,
        risk: "High",
        type: "Risk Area"
    },
    {
        name: "Workshop Area",
        lat: 23.3400,
        lng: 85.3020,
        risk: "Medium",
        type: "Inspection Point"
    },
    {
        name: "Processing Area",
        lat: 23.3500,
        lng: 85.3180,
        risk: "Low",
        type: "Operational Zone"
    },
    {
        name: "Haul Road",
        lat: 23.3370,
        lng: 85.3100,
        risk: "Medium",
        type: "Inspection Point"
    },
    {
        name: "North Pit",
        lat: 23.3520,
        lng: 85.3050,
        risk: "Critical",
        type: "High Risk Zone"
    }
];


// RISK COLORS
function getRiskColor(risk) {

    if (risk === "Low") return "#22c55e";
    if (risk === "Medium") return "#f59e0b";
    if (risk === "High") return "#ef4444";
    if (risk === "Critical") return "#dc2626";

    return "#ffffff";
}


// ADD MARKERS
minePoints.forEach(point => {

    const color = getRiskColor(point.risk);

    const markerIcon = L.divIcon({
        className: "mine-marker",
        html: `
            <div style="
                width:14px;
                height:14px;
                background:${color};
                border:2px solid white;
                border-radius:50%;
                box-shadow:0 0 12px ${color};
            "></div>
        `,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });

    L.marker(
        [point.lat, point.lng],
        { icon: markerIcon }
    )
    .addTo(mineOfficialMap)
    .bindPopup(`
        <div style="min-width:170px">
            <strong>${point.name}</strong><br>
            <span>Type: ${point.type}</span><br>
            <span>Risk: <b>${point.risk}</b></span>
        </div>
    `);

});


// FIX MAP SIZE AFTER PAGE LOAD
setTimeout(() => {
    mineOfficialMap.invalidateSize();
}, 300);

/* =================================
   LUCIDE ICONS
================================= */

lucide.createIcons();

