function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "maps";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.maps = Ti.UI.createWindow({
        id: "maps"
    });
    $.__views.maps && $.addTopLevelView($.__views.maps);
    $.__views.mapview = require("ti.map").createView({
        region: {
            latitude: 33.74511,
            longitude: -84.38993,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        id: "mapview"
    });
    $.__views.maps.add($.__views.mapview);
    report ? $.__views.mapview.addEventListener("click", report) : __defers["$.__views.mapview!click!report"] = true;
    $.__views.appcHQ = Ti.Map.createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        title: "Appcelerator Headquarters",
        subtitle: "Mountain View, CA",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        id: "appcHQ",
        myid: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;