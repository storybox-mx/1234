var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Android = {
    Api: Ti.Platform.Android.API_LEVEL
};

Alloy.Globals.Map = require("ti.map");

Alloy.createController("index");