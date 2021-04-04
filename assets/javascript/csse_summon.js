var urlTotal = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
var urlMuertes = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";
var urlNuevos = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

//totales
d3.csv(urlTotal, function (data) {
    var largo = data.length;
    var tope = largo - 1;
    for (var i = 1; i < tope; i++) {
        if (data[i]["Country/Region"] == "Mexico") {
            //console.log("Confirmados: " + Number(data[i][data.columns[data.columns.length - 1]]).toLocaleString('es-us'));
            document.getElementById('totales').innerHTML =Number(data[i][data.columns[data.columns.length - 1]]).toLocaleString('es-us');
        }
    }
});
d3.csv(urlMuertes, function (data) {
    var largo = data.length;
    var tope = largo - 1;
    for (var i = 1; i < tope; i++) {
        if (data[i]["Country/Region"] == "Mexico") {
            //console.log("Muertes: " + Number(data[i][data.columns[data.columns.length - 1]]).toLocaleString('es-us'));
            document.getElementById('muertes').innerHTML = Number(data[i][data.columns[data.columns.length - 1]]).toLocaleString('es-us');
        }
    }
});
d3.csv(urlNuevos, function (data) {
    var largo = data.length;
    var tope = largo - 1;
    for (var i = 1; i < tope; i++) {
        if (data[i]["Country/Region"] == "Mexico") {
            var x=Number(data[i][data.columns[data.columns.length - 1]]);
            var y=Number(data[i][data.columns[data.columns.length - 2]]);
            var nuevos=x-y;
            //console.log("Nuevos: " + nuevos.toLocaleString('es-us'));
            //console.log("Anteriores: " + y.toLocaleString('es-us'));
             document.getElementById('nuevos').innerHTML=nuevos.toLocaleString('es-us'); 
        }
    }
});