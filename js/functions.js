var map = L.map('map').setView([65.5, 27.055430], 6)

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=GdSPu31pwUy9cLlOnBAA', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);