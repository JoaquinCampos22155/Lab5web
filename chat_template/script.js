// el área de contenido del chat
function createChatStructure() {
    const container = document.createElement("div");
    container.id = "container";

    const chatList = document.createElement("div");
    chatList.id = "chat-list";
    chatList.textContent = "CHATS";

    const message = document.createElement("div");
    message.id = "message";

    const profileContent = document.createElement("div");
    profileContent.id = "profile-content";
    profileContent.textContent = "PERFIL";
    const profileImage = document.createElement("img");
    profileImage.src = "img.jpg";

    const chatContent = document.createElement("div");
    chatContent.id = "chat-content";

    const messageText = document.createElement("textarea");
    messageText.id = "message-text";
    messageText.className = "chat-message";
    messageText.style.flex = "1";
    messageText.style.padding = "10px";

    const sendMessage = document.createElement("button");
    sendMessage.id = "send-message";
    sendMessage.innerHTML = ">";
    sendMessage.style.color = "#161617";
    sendMessage.style.border = "10px";
    sendMessage.style.backgroundColor = "var(--secondary-color)";
    sendMessage.style.fontSize = "24px";
    sendMessage.style.cursor = "pointer";
    sendMessage.style.color = "#161617";

    chatContent.appendChild(messageText);
    chatContent.appendChild(sendMessage);
    container.appendChild(chatList);
    container.appendChild(message);
    container.appendChild(profileContent);
    profileContent.appendChild(profileImage);
    container.appendChild(chatContent);
    document.body.appendChild(container);
}

//  estilos generales al cuerpo del documento, como margen, fuente y colores
function applyGeneralStyles() {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#FFFFFF";
    document.documentElement.style.setProperty("--primary-color", "#E6FFE6");
    document.documentElement.style.setProperty("--secondary-color", "#83A784");
    document.documentElement.style.setProperty("--tertiary-color", "#B1F1B2");
    document.documentElement.style.setProperty("--quaternary-color", "#05A407");
    document.documentElement.style.setProperty("--chat-color", "lightgreen");
}

//  estilos a la lista de chats, como colores
function applyChatListStyle() {
    const chatList = document.getElementById("chat-list");
    chatList.style.backgroundColor = "var(--secondary-color)";
    chatList.style.overflowY = "scroll";
}

//estilos al contenedor principal del chat
function applyContainerStyle() {
    const container = document.getElementById("container");
    container.style.backgroundColor = "white";
    container.style.height = "calc(100vh - 0px)";
    container.style.display = "grid";
    container.style.border = "1px solid black";
    container.style.gridTemplateColumns = "20% 80%";
    container.style.gridTemplateRows = "80% 20%";
}

//  estilos al contenido del perfil 
function applyProfileContentStyle() {
    const profileContent = document.getElementById("profile-content");
    profileContent.style.backgroundColor = "var(--primary-color)";
    profileContent.style.display = "flex";
}

//  estilos al área de mensajes
function applyMessageStyle() {
    const message = document.getElementById("message");
    message.style.display = "flex";
    message.style.flexDirection = "column-reverse";
    message.style.overflowY = "auto";
    message.style.alignItems = "flex-start";
    message.style.backgroundColor = "var(--tertiary-color)";
}

//  estilos a los elementos con la clase chat
function applyChatStyles() {
    const chats = document.getElementsByClassName("chat");
    for (let chat of chats) {
        chat.style.backgroundColor = "transparent";
        chat.style.width = "100%";
        chat.style.minHeight = "60px";
        chat.style.padding = "10px";
    }
}

//  estilos al área de contenido del chat
function applyChatContentStyle() {
    const chatContent = document.getElementById("chat-content");
    chatContent.style.backgroundColor = "var(--quaternary-color)";
    chatContent.style.border = "3px solid black";
    chatContent.style.display = "flex";
    chatContent.style.justifyContent = "space-evenly";
}

// Se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    addAnimationStyles();
    createChatStructure();
    applyGeneralStyles();
    createChatList();
    applyProfileContentStyle();
    applyMessageStyle();
    applyChatContentStyle();
    applyContainerStyle();
    applyChatListStyle();
    applyChatStyles();

    const sendButton = document.getElementById("send-message");
    const messageText = document.getElementById("message-text");
    const messageContainer = document.getElementById("message");

    // Agrega un controlador de eventos al textarea para el evento "keypress"
    messageText.addEventListener("keypress", function (event) {
        // Verifica si la tecla presionada es Enter (código 13)
        if (event.keyCode === 13) {
            // Evita que se realice el salto de línea predeterminado al presionar Enter
            event.preventDefault();

            // Llama a la función sendMessage al presionar Enter
            sendMessage();
        }
    });
    //funcion para enviar mensjajs
    // Función para enviar mensajes.
    function sendMessage() {
        const text = messageText.value.trim();
        if (text.length > 0 && text.length <= 140) {
            const newDiv = document.createElement("div");
            newDiv.className = "chat";
            newDiv.innerText = text;
            newDiv.style.padding = "10px";
            newDiv.style.borderBottom = "1px solid #ccc";
            newDiv.style.backgroundColor = "#d4d9d5"; // Color gris #d4d9d5
            newDiv.style.marginLeft = "auto"; // Mueve el nuevo div hacia la derecha

            messageContainer.insertBefore(newDiv, messageContainer.firstChild);

            messageText.value = "";
        }
    }

    // Evento clic para enviar mensajes.
    sendButton.addEventListener("click", sendMessage);
});

// Fetch de datos desde una API
let data = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({})
});

// Fetch de datos y logueo de los mismos
function getPost2() {
    let posts = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

// Fetch de datos asincrónico
async function getPosts() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    return posts;
}

// Crea un elemento de chat con texto
function createChat(text, id) {
    let newChat = document.createElement("div");
    newChat.className = "chat";
    newChat.id = id;
    newChat.innerText = text;
    newChat.style.padding = "10px";
    newChat.style.borderBottom = "1px solid #ccc";
    return newChat;
}

// Crea una lista de chats a partir de los datos obtenidos
async function createChatList() {
    let myPosts = await getPosts();

    let listContainer = document.getElementById("chat-list");
    if (listContainer != null) {
        myPosts.forEach(post => {
            let newChat = createChat(post.title, post.id);
            listContainer.appendChild(newChat);
        });

        applyChatStyles();
    }
}

//  estilos de animación al documento.
function addAnimationStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade-in {
            animation: fadeIn 1s ease-out;
        }
    `;
    document.head.appendChild(style);
}
