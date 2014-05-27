function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuleft";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuleft = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Chat",
        id: "menuleft"
    });
    $.__views.menuleft && $.addTopLevelView($.__views.menuleft);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#e9e9e9",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.menuleft.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuleft.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        var irahome = Alloy.createController("index").getView();
        irahome.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;