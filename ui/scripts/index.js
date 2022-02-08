var socket;

window.onload = function () {
    socket=openSocket(handleOnMessage);
    socket.onopen = function () {
        const message = {
            messageType: "requestExamples"
        };
        socket.send(JSON.stringify(message));
    };

};

function handleOnMessage (evt) {
    data=JSON.parse(evt.data);
    if (data==null) {
        return;
    }

    if (data["messageType"] === "updateHTMLElements") {
        updateHTMLElemsList(data["elements"]);
        updateOptions(data["cssEnabled"], data["canvasEnabled"])
    } else if (data["messageType"] === "examplesList") {
        updateExamplesList(data["examples"]);
    }

}

function updateOptions(cssEn, canvasEn) {
    var checkbox = document.getElementById("cssEnabled");
    checkbox.checked = cssEn;
    checkbox = document.getElementById("canvasEnabled");
    checkbox.checked = canvasEn;

}
function updateHTMLElemsList(data) {
    if (data===null) {
        return;
    }
    parent = document.querySelector("#listelements");
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
    }

    data.forEach(function (val) {
        const div=document.createElement('div');
        parent.appendChild(div);
        divText=""
        switch (val.type) {
            case 'Button':
                divText+="[B]";
                break;
            case 'Header':
                divText+="[H]";
                break;
            default:
                divText+="[_]";
                break;  
        }
        if(val.blueprint != "") {
            divText+=`(${val.blueprint})`
        }
        div.textContent=divText+val.label
        div.id="uielement"
        const delButton=document.createElement('button');
        div.appendChild(delButton);
        delButton.textContent="X";
        delButton.onclick=deleteHTMLElement.bind(this, val.id);
    });
}

function send(message) {
    if (!socket) {
        console.error("web socket is not open");
    }
    socket.send(message);

    // hack to refresh the page without any callbacks
    setTimeout(
        function () {
            document.getElementById('viewport').src += '';
        }, 200
    );
}

function deleteHTMLElement(id) {
    const msg = {
        messageType: "deleteHTMLElement",
        id: id
    };
    send(JSON.stringify(msg));
}

function addButton() {
    const name = prompt("Label", "Click me!");
    if (name != null) {
        const blueprint = prompt("Button ID(used in the code editor)", "ID");
        if (blueprint != null) {
            const msg = {
                messageType: "newHTMLElement",
                type: "Button",
                label: name,
                blueprint: blueprint
            };
            send(JSON.stringify(msg));
        }
    }
}

function addHeader() {
    const text = prompt("Text", "Header content");

    if (text != null) {
        const msg = {
            messageType: "newHTMLElement",
            type: "Header",
            label: text
        };
        send(JSON.stringify(msg));
    }
}

function updateExamplesList(data) {
    var parent = document.getElementById("exampleSelector");
    data.forEach(function (val) {
        var opt = document.createElement('option');
        opt.value = val;
        opt.innerHTML = val;
        parent.appendChild(opt);
    });
}

function onCSSSwitched(checkbox) {
    if (checkbox != null) {
        const msg = {
            messageType: "cssEnabledUpdate",
            enabled: checkbox.checked,
        };
        send(JSON.stringify(msg));
    }
}

function onCanvasSwitched(checkbox) {
    if (checkbox != null) {
        const msg = {
            messageType: "canvasEnabledUpdate",
            enabled: checkbox.checked,
        };
        send(JSON.stringify(msg));
    }
}

function loadTempalte() {
    var e = document.getElementById("exampleSelector");
    if (e != null) {
        const msg = {
            messageType: "loadExample",
            name: e.value
        };
        send(JSON.stringify(msg));
    }
}
