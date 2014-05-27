function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#1778c3",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.iconBar = Ti.UI.createView({
        backgroundImage: "iconBarBG.png",
        width: Ti.UI.FILL,
        height: "54px",
        id: "iconBar"
    });
    $.__views.main.add($.__views.iconBar);
    $.__views.topActions = Ti.UI.createView({
        width: "150px",
        height: "50px",
        layout: "horizontal",
        id: "topActions"
    });
    $.__views.iconBar.add($.__views.topActions);
    $.__views.friendsBtn = Ti.UI.createImageView({
        height: "50px",
        width: "50px",
        image: "friendsbtn.png",
        id: "friendsBtn"
    });
    $.__views.topActions.add($.__views.friendsBtn);
    $.__views.messagesBtn = Ti.UI.createImageView({
        height: "50px",
        width: "50px",
        image: "messagesbtn.png",
        id: "messagesBtn"
    });
    $.__views.topActions.add($.__views.messagesBtn);
    $.__views.notificationsBtn = Ti.UI.createImageView({
        height: "50px",
        width: "50px",
        image: "notificationsbtn.png",
        id: "notificationsBtn"
    });
    $.__views.topActions.add($.__views.notificationsBtn);
    $.__views.menubtn = Ti.UI.createImageView({
        left: 0,
        width: "55px",
        height: "54px",
        image: "menubtn.png",
        id: "menubtn"
    });
    $.__views.iconBar.add($.__views.menubtn);
    $.__views.chatbtn = Ti.UI.createImageView({
        width: "55px",
        height: "54px",
        right: 0,
        image: "chatbtn.png",
        id: "chatbtn"
    });
    $.__views.iconBar.add($.__views.chatbtn);
    $.__views.menuBar = Ti.UI.createView({
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "50",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "33%",
        height: "50px",
        id: "__alloyId0"
    });
    $.__views.menuBar.add($.__views.__alloyId0);
    $.__views.statusBtn = Ti.UI.createImageView({
        width: "73px",
        height: "19px",
        image: "statusbtn.png",
        id: "statusBtn"
    });
    $.__views.__alloyId0.add($.__views.statusBtn);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "33%",
        height: "50px",
        id: "__alloyId1"
    });
    $.__views.menuBar.add($.__views.__alloyId1);
    $.__views.photoBtn = Ti.UI.createImageView({
        width: "73",
        height: "19",
        image: "photobtn.png",
        id: "photoBtn"
    });
    $.__views.__alloyId1.add($.__views.photoBtn);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "33%",
        height: "50px",
        id: "__alloyId2"
    });
    $.__views.menuBar.add($.__views.__alloyId2);
    $.__views.checkinBtn = Ti.UI.createImageView({
        width: "73px",
        height: "19px",
        image: "checkinbtn.png",
        id: "checkinBtn"
    });
    $.__views.__alloyId2.add($.__views.checkinBtn);
    var __alloyId3 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200px",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId3.push($.__views.listRow);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidth: 1,
        left: "5px",
        right: "5px",
        top: "5px",
        bottom: "5px",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.listRow.add($.__views.rowContainer);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "66px",
        height: "66px",
        image: "profilepic.png",
        top: "5",
        left: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "80",
        color: "#576b95",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Ricardo Alcocer",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.timeAgo = Ti.UI.createLabel({
        top: "25",
        left: "80",
        color: "#bbbbbb",
        font: {
            fontSize: "16"
        },
        text: "10 minutes ago",
        id: "timeAgo"
    });
    $.__views.rowContainer.add($.__views.timeAgo);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        right: 5,
        font: {
            fontSize: "16"
        },
        text: "This is my status update.",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
    $.__views.grayLine = Ti.UI.createView({
        id: "grayLine",
        bottom: "51"
    });
    $.__views.rowContainer.add($.__views.grayLine);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "50px",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "50%",
        height: "50px",
        id: "__alloyId4"
    });
    $.__views.bottomActions.add($.__views.__alloyId4);
    $.__views.likeBtn = Ti.UI.createImageView({
        width: "76px",
        height: "20px",
        image: "likebtn.png",
        id: "likeBtn"
    });
    $.__views.__alloyId4.add($.__views.likeBtn);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "50%",
        height: "50px",
        id: "__alloyId5"
    });
    $.__views.bottomActions.add($.__views.__alloyId5);
    $.__views.commentBtn = Ti.UI.createImageView({
        width: "76px",
        height: "20px",
        image: "commentbtn.png",
        id: "commentBtn"
    });
    $.__views.__alloyId5.add($.__views.commentBtn);
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#c4cde0",
        separatorStyle: "NONE",
        data: __alloyId3,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;