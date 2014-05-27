function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "buscar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.buscar = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Buscar",
        id: "buscar"
    });
    $.__views.buscar && $.addTopLevelView($.__views.buscar);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#b9bfc3",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.buscar.add($.__views.main);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#252525",
        title: "Contaduria",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#252525",
        title: "Cafeteria",
        id: "__alloyId2"
    });
    __alloyId0.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#252525",
        title: "Lobobici",
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#252525",
        title: "biblioteca",
        id: "__alloyId4"
    });
    __alloyId0.push($.__views.__alloyId4);
    $.__views.tableview = Ti.UI.createTableView({
        color: "#252525",
        top: "10",
        data: __alloyId0,
        id: "tableview"
    });
    $.__views.main.add($.__views.tableview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.buscar.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        var irahome = Alloy.createController("index").getView();
        irahome.open();
    });
    if (true && Ti.Platform.Android.API_LEVEL >= 11) {
        var search = Alloy.createController("searchview").getView();
        $.tableview.searchAsChild = false;
        $.tableview.search = search;
        $.buscar.addEventListener("open", function() {
            $.buscar.activity.onCreateOptionsMenu = function(e) {
                e.menu.add({
                    title: "Buscar",
                    icon: Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png",
                    actionView: search,
                    showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
            };
            $.buscar.activity.invalidateOptionsMenu();
        });
    } else $.tableview.search = Alloy.createController("searchbar").getView();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;