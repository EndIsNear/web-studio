var socket;

window.onload = function () {
    socket=openSocket(handleOnMessage);
};

function handleOnMessage (evt) {
    data=JSON.parse(evt.data);
    if (data==null) {
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

    // hack to refresh the page without anycallbacks
    setTimeout(
        function () {
            document.getElementById('viewport').src += '';
        }, 100
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
