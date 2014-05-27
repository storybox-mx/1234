function Controller() {
    function openevento() {
        alert("abir evento");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.eventos = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Eventos",
        id: "eventos"
    });
    $.__views.eventos && $.addTopLevelView($.__views.eventos);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#b9bfc3",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.eventos.add($.__views.main);
    var __alloyId70 = [];
    $.__views.titulo_tabla = Ti.UI.createTableViewSection({
        id: "titulo_tabla"
    });
    __alloyId70.push($.__views.titulo_tabla);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        id: "__alloyId71"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId71);
    openevento ? $.__views.__alloyId71.addEventListener("click", openevento) : __defers["$.__views.__alloyId71!click!openevento"] = true;
    $.__views.__alloyId72 = Ti.UI.createView({
        width: "100%",
        height: "55dp",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId75"
    });
    $.__views.__alloyId72.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        id: "__alloyId76"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId76);
    openevento ? $.__views.__alloyId76.addEventListener("click", openevento) : __defers["$.__views.__alloyId76!click!openevento"] = true;
    $.__views.__alloyId77 = Ti.UI.createView({
        width: "100%",
        height: "55dp",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId80"
    });
    $.__views.__alloyId77.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTableViewRow({
        id: "__alloyId81"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId81);
    openevento ? $.__views.__alloyId81.addEventListener("click", openevento) : __defers["$.__views.__alloyId81!click!openevento"] = true;
    $.__views.__alloyId82 = Ti.UI.createView({
        width: "100%",
        height: "55dp",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId84"
    });
    $.__views.__alloyId82.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId85"
    });
    $.__views.__alloyId82.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createTableViewRow({
        id: "__alloyId86"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId86);
    openevento ? $.__views.__alloyId86.addEventListener("click", openevento) : __defers["$.__views.__alloyId86!click!openevento"] = true;
    $.__views.__alloyId87 = Ti.UI.createView({
        width: "100%",
        height: "55dp",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.tableeventos = Ti.UI.createTableView({
        top: "0px",
        backgroundColor: "#252525",
        width: "100%",
        height: "230px",
        data: __alloyId70,
        id: "tableeventos"
    });
    $.__views.main.add($.__views.tableeventos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.eventos.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        var irahome = Alloy.createController("index").getView();
        irahome.open();
    });
    __defers["$.__views.__alloyId71!click!openevento"] && $.__views.__alloyId71.addEventListener("click", openevento);
    __defers["$.__views.__alloyId76!click!openevento"] && $.__views.__alloyId76.addEventListener("click", openevento);
    __defers["$.__views.__alloyId81!click!openevento"] && $.__views.__alloyId81.addEventListener("click", openevento);
    __defers["$.__views.__alloyId86!click!openevento"] && $.__views.__alloyId86.addEventListener("click", openevento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;