
let omdb_submit = document.getElementById("omdb_submit");
let output = document.getElementById("output");
var pretty= document.getElementById("pretty");
let loop= document.getElementById("loop");


function getData(){
    let city= document.getElementById("city").value;
    
    let apiid ="c7d84f02bda7525542668c5183c0dd62";
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+apiid;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        //console.log(data);
        //console.log(data.cod);
        if(data.cod == 400 | data.cod==404) {
            // Output error message into output container
            output.innerHTML=  `<br><br><br><h1>City Not Found</h1>`;
        } 
        else {
            
                        
        output.innerHTML=` <br><br>
        <h1 id="title" style="display: inline;">${data.name}</h1>
        <br><br><br><hr><br>
        <dl class="row">
           


            <dt class="col-sm-3">Temperature :</dt>
            <dd class="col-sm-9">${parseFloat(data.main.temp -273.15).toFixed(2)} °C</dd>
            <dt class="col-sm-3"></dt>
            <dd class="col-sm-9">Max: ${parseFloat(data.main.temp_max -273.15).toFixed(2)} °C</dd>

            <dt class="col-sm-3"></dt>
            <dd class="col-sm-9">Min: ${parseFloat(data.main.temp_min -273.15).toFixed(2)} °C</dd>

            <dt class="col-sm-3">Clouds in Sky :</dt>
            <dd class="col-sm-9">${data.clouds.all}%</dd>

            <dt class="col-sm-3">Humidity :</dt>
            <dd class="col-sm-9">${data.main.humidity}</dd>

            <dt class="col-sm-3">Pressure :</dt>
            <dd class="col-sm-9">${data.main.pressure} Atmospheric pressure</dd>

            <dt class="col-sm-3">Weather :</dt>
            <dd class="col-sm-9">${data.weather[0].main}</dd>

            <dt class="col-sm-3">Weather Description :</dt>
            <dd class="col-sm-9">${data.weather[0].description}</dd>
            
            
            <dt class="col-sm-3">Weather icon:</dt>
            <dd class="col-sm-9"><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' class="img-fluid"></dd>

            <dt class="col-sm-3">Wind Speed:</dt>
            <dd class="col-sm-9">${data.wind.speed} m/s</dd>

            
        </dl>`;
        

        pretty.innerHTML= `<h1> ${data.name} </h1>
        `;
        
        }
    });
}