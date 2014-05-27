function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scanqr";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scanqr = Ti.UI.createWindow({
        backgroundColor: "white",
        height: 0,
        width: 0,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "scanqr",
        exitOnClose: "true",
        fullscreen: "false",
        title: "Scanear"
    });
    $.__views.scanqr && $.addTopLevelView($.__views.scanqr);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var scanditsdk = require("com.mirasense.scanditsdk");
    var picker;
    var window = Titanium.UI.createWindow({
        title: "Scandit SDK",
        navBarHidden: true
    });
    var openScanner = function() {
        picker = scanditsdk.createView({
            width: "100%",
            height: "100%"
        });
        picker.init("rsaYGOKUEeOPY4HVTyBKUVusIyb6iHKm5lLxAqiLXnI", 0);
        picker.showSearchBar(true);
        picker.showToolBar(true);
        picker.setSuccessCallback(function(e) {
            alert("success (" + e.symbology + "): " + e.barcode);
        });
        picker.setCancelCallback(function() {
            closeScanner();
        });
        window.add(picker);
        window.addEventListener("open", function() {
            picker.setOrientation(window.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
            picker.startScanning();
        });
        window.open();
    };
    var closeScanner = function() {
        if (null != picker) {
            picker.stopScanning();
            window.remove(picker);
        }
        window.close();
    };
    Ti.Gesture.addEventListener("orientationchange", function(e) {
        window.orientationModes = [ Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT ];
        if (null != picker) {
            picker.setOrientation(e.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
        }
    });
    var button = Titanium.UI.createButton({
        width: 200,
        height: 80,
        title: "Comenzar escaneo"
    });
    button.addEventListener("click", function() {
        openScanner();
    });
    var rootWindow = Titanium.UI.createWindow({
        backgroundColor: "#000"
    });
    rootWindow.add(button);
    rootWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;