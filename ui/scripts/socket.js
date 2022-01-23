function openSocket(handler) {
    if (window["WebSocket"]) {
        socket = new WebSocket("ws://" + document.location.host + "/ws");
        socket.onclose = function (evt) {
            var item = document.createElement("div");
            item.innerHTML = "<b>Connection closed.</b>";
        };
        socket.onmessage = function (evt) {
            handler(evt);
        };
        return socket;
    } else {
        var item = document.createElement("div");
        item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
        appendLog(item);
        return null;
    }
}