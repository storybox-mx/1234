function Controller() {
    function btnabrirnotif() {
        alert("Abrir aviso");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notificaciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.notificaciones = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Avisos",
        id: "notificaciones"
    });
    $.__views.notificaciones && $.addTopLevelView($.__views.notificaciones);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#b9bfc3",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.notificaciones.add($.__views.main);
    var __alloyId142 = [];
    $.__views.tableviewsec = Ti.UI.createTableViewSection({
        id: "tableviewsec"
    });
    __alloyId142.push($.__views.tableviewsec);
    $.__views.__alloyId143 = Ti.UI.createTableViewRow({
        id: "__alloyId143"
    });
    $.__views.tableviewsec.add($.__views.__alloyId143);
    btnabrirnotif ? $.__views.__alloyId143.addEventListener("click", btnabrirnotif) : __defers["$.__views.__alloyId143!click!btnabrirnotif"] = true;
    $.__views.__alloyId144 = Ti.UI.createView({
        width: "100%",
        height: "100px",
        backgroundColor: "#dbdbdb",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createImageView({
        left: "10px",
        top: "10px",
        height: "80px",
        width: "80px",
        image: "/icon_examen.png",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
        color: "#252525",
        width: Ti.UI.FILL,
        height: "30px",
        top: "20px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "105px",
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Examen de mate",
        id: "__alloyId146"
    });
    $.__views.__alloyId144.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        color: "#252525",
        width: Ti.UI.FILL,
        height: "35px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "105px",
        top: "40px",
        font: {
            fontSize: "15dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Clases | Calendario",
        id: "__alloyId147"
    });
    $.__views.__alloyId144.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        color: "#252525",
        width: "90px",
        height: "30px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: "10px",
        right: "15px",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "10:20 a.m.",
        id: "__alloyId148"
    });
    $.__views.__alloyId144.add($.__views.__alloyId148);
    $.__views.tableviewestados = Ti.UI.createTableView({
        data: __alloyId142,
        id: "tableviewestados"
    });
    $.__views.main.add($.__views.tableviewestados);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.notificaciones.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        var irahome = Alloy.createController("index").getView();
        irahome.open();
    });
    __defers["$.__views.__alloyId143!click!btnabrirnotif"] && $.__views.__alloyId143.addEventListener("click", btnabrirnotif);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;