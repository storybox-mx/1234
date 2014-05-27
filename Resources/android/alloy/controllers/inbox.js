function Controller() {
    function btnabrirconversacion() {
        alert("abir conversación");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inbox";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inbox = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Chat",
        id: "inbox"
    });
    $.__views.inbox && $.addTopLevelView($.__views.inbox);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#e9e9e9",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.inbox.add($.__views.main);
    var __alloyId91 = [];
    $.__views.tableviewsec = Ti.UI.createTableViewSection({
        id: "tableviewsec"
    });
    __alloyId91.push($.__views.tableviewsec);
    $.__views.__alloyId92 = Ti.UI.createTableViewRow({
        id: "__alloyId92"
    });
    $.__views.tableviewsec.add($.__views.__alloyId92);
    btnabrirconversacion ? $.__views.__alloyId92.addEventListener("click", btnabrirconversacion) : __defers["$.__views.__alloyId92!click!btnabrirconversacion"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "100%",
        height: "100px",
        backgroundColor: "#dbdbdb",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createImageView({
        left: "10px",
        top: "10px",
        height: "80px",
        width: "80px",
        image: "/imagenusuario.jpg",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
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
        text: "Alejandra",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        color: "#252525",
        width: Ti.UI.FILL,
        height: "35px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "105px",
        top: "50px",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Hola donde estas?'",
        id: "__alloyId96"
    });
    $.__views.__alloyId93.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        color: "#252525",
        width: "80px",
        height: "30px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: "10px",
        right: "15px",
        font: {
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "10:20 a.m.",
        id: "__alloyId97"
    });
    $.__views.__alloyId93.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createTableViewRow({
        id: "__alloyId98"
    });
    $.__views.tableviewsec.add($.__views.__alloyId98);
    btnabrirconversacion ? $.__views.__alloyId98.addEventListener("click", btnabrirconversacion) : __defers["$.__views.__alloyId98!click!btnabrirconversacion"] = true;
    $.__views.__alloyId99 = Ti.UI.createView({
        width: "100%",
        height: "100px",
        backgroundColor: "#dbdbdb",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createImageView({
        left: "10px",
        top: "10px",
        height: "80px",
        width: "80px",
        image: "/imagenusuario.jpg",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
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
        text: "Alejandra",
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        color: "#252525",
        width: Ti.UI.FILL,
        height: "35px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "105px",
        top: "50px",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Hola donde estas?'",
        id: "__alloyId102"
    });
    $.__views.__alloyId99.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        color: "#252525",
        width: "80px",
        height: "30px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: "10px",
        right: "15px",
        font: {
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "10:20 a.m.",
        id: "__alloyId103"
    });
    $.__views.__alloyId99.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        id: "__alloyId104"
    });
    $.__views.tableviewsec.add($.__views.__alloyId104);
    btnabrirconversacion ? $.__views.__alloyId104.addEventListener("click", btnabrirconversacion) : __defers["$.__views.__alloyId104!click!btnabrirconversacion"] = true;
    $.__views.__alloyId105 = Ti.UI.createView({
        width: "100%",
        height: "100px",
        backgroundColor: "#dbdbdb",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createImageView({
        left: "10px",
        top: "10px",
        height: "80px",
        width: "80px",
        image: "/imagenusuario.jpg",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
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
        text: "Alejandra",
        id: "__alloyId107"
    });
    $.__views.__alloyId105.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        color: "#252525",
        width: Ti.UI.FILL,
        height: "35px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "105px",
        top: "50px",
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Hola donde estas?'",
        id: "__alloyId108"
    });
    $.__views.__alloyId105.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        color: "#252525",
        width: "80px",
        height: "30px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: "10px",
        right: "15px",
        font: {
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "10:20 a.m.",
        id: "__alloyId109"
    });
    $.__views.__alloyId105.add($.__views.__alloyId109);
    $.__views.tableviewestados = Ti.UI.createTableView({
        data: __alloyId91,
        id: "tableviewestados"
    });
    $.__views.main.add($.__views.tableviewestados);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.inbox.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        var irahome = Alloy.createController("index").getView();
        irahome.open();
    });
    __defers["$.__views.__alloyId92!click!btnabrirconversacion"] && $.__views.__alloyId92.addEventListener("click", btnabrirconversacion);
    __defers["$.__views.__alloyId98!click!btnabrirconversacion"] && $.__views.__alloyId98.addEventListener("click", btnabrirconversacion);
    __defers["$.__views.__alloyId104!click!btnabrirconversacion"] && $.__views.__alloyId104.addEventListener("click", btnabrirconversacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;