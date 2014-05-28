/*var Map = require('ti.map');
var mapview = Map.createView({mapType:Map.NORMAL_TYPE});*/

function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}