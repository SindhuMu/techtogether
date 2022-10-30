console.log("hi there");
let togglestatus = false;
let toggle = document.getElementById('hit');
let element =  document.querySelector('.nav-main ul')
toggle.addEventListener('click',()=>{

 if(togglestatus === false) { document.getElementById('change').setAttribute('transform','rotate(45),translate(0)')
   document.getElementById('change').setAttribute('y','0')
    document.getElementById('change1').setAttribute('transform','rotate(-45),translate(-45)')
   document.getElementById('change1').setAttribute('y','30')
     document.getElementById('change0').setAttribute('transform','rotate(-45),translate(-40)')
   document.getElementById('change0').setAttribute('y','30')
    }
    else if (togglestatus === true){
        document.getElementById('change').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change').setAttribute('y','30')
    document.getElementById('change1').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change1').setAttribute('y','60')
     document.getElementById('change0').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change0').setAttribute('y','0')
    }
   if(togglestatus === false)
{ 
    element.style.visibility="visible";
    element.style.boxShadow= "0 10px 25px rgba(92, 99, 105, .2)";
    togglestatus = true;
    }
  else if(togglestatus === true){

    element.style.visibility="hidden";
    togglestatus = false;
  }
});


// API

var mymap = L.map('mapid').fitWorld();



L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=8pzQfPZFI2jE9rHSOaaA	', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 20,

    tileSize: 512,
    zoomOffset: -1,

}).addTo(mymap);
  // search
L.Control.geocoder().addTo(mymap);