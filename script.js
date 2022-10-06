var url_string = window.location.href;
var url = new URL(url_string);
var acessChat = url.searchParams.get("acessChat");

if (acessChat != null) {
    localStorage.setItem('chatbot-info-student', acessChat);
}

var paramChat;
paramChat = localStorage.getItem('chatbot-info-student')
let cronchatToken = 'KBm_bDLJEPdMd7V9gvlqCXQORw';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';
let chatbotURL = `${hostURL}${cronchatToken}&extraparam=${paramChat}`;
let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);

window.onload = function () {
    if (acessChat != null) {        
        setTimeout(function(){
            clickBtnChat()
          }, 1000);
    }
}

function clickBtnChat(){
    var btnConversationId = 'chatBtn_' + localStorage.getItem('conversationidbot');
    document.getElementById(btnConversationId).click();
}