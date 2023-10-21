// main.js

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    // Simuler une réponse du chatbot (vous pouvez remplacer cette logique par une API de chatbot réelle)
    const botResponse = getBotResponse(userInput);
    appendMessage('bot', botResponse);
}

function appendMessage(sender, message) {
    const chatContainer = document.getElementById('chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = `${sender}: ${message}`;
    chatContainer.appendChild(messageDiv);

    // Faites défiler vers le bas pour afficher le dernier message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userInput) {
    // Logique du chatbot simple - réponses pré-définies
    if (userInput.toLowerCase().includes('bonjour')) {
        return "Bonjour ! Comment puis-je vous aider ?";
    }  
    else if (userInput.toLowerCase().includes('tumeur')) {
        return "Une masse de tissu formée par une croissance anormale de cellules, pouvant être bénigne (non cancéreuse) ou maligne (cancéreuse)."
    }
    else if (userInput.toLowerCase().includes('metastase')) {
        return "La propagation de cellules cancéreuses à partir de leur site d'origine vers d'autres parties du corps."
    }
    else if (userInput.toLowerCase().includes('chimiotherapie')) {
        return "Un traitement médical utilisant des médicaments chimiques pour détruire ou inhiber la croissance des cellules cancéreuses."
    }
    else if (userInput.toLowerCase().includes('radiotherapie ')) {
        return "Un traitement utilisant des radiations pour endommager les cellules cancéreuses et les empêcher de se multiplier."
    }
    else if (userInput.toLowerCase().includes('oncologie')) {
        return "La branche de la médecine qui traite du diagnostic et du traitement du cancer. À noter que dans cette disciple le Docteur Tsoa excelle et tout laisse à penser qu'il révolutionnera la médecine"
    }else if (userInput.toLowerCase().includes('biopsie')) {
        return "La procédure d'extraction d'un échantillon de tissu pour un examen microscopique afin de déterminer s'il est cancéreux."
    }else if (userInput.toLowerCase().includes('carcinome')) {
        return "Un type de cancer qui se développe à partir de cellules épithéliales, qui recouvrent les organes internes et la peau."
    }else if (userInput.toLowerCase().includes('immunothérapie')) {
        return "Une approche de traitement qui stimule le système immunitaire pour l'aider à combattre les cellules cancéreuses."
    }else if (userInput.toLowerCase().includes('stade')) {
        return "La mesure de l'étendue de la propagation du cancer dans le corps, souvent utilisée pour déterminer le traitement et le pronostic."
    }else if (userInput.toLowerCase().includes('survie')) {
        return "La période pendant laquelle une personne atteinte de cancer vit après le diagnostic, souvent exprimée en termes de taux de survie spécifiques."
    }else if (userInput.toLowerCase().includes('')) {
        return ""
    }else if (userInput.toLowerCase().includes('')) {
        return ""
    }else if (userInput.toLowerCase().includes('')) {
        return ""
    }




    else if (userInput.toLowerCase().includes('cancer')) {
        return "Le cancer est une maladie caractérisée par une croissance et une division incontrôlées de cellules anormales dans le corps. Ces cellules anormales, appelées cellules cancéreuses, peuvent envahir les tissus environnants et se propager à d'autres parties du corps via le système lymphatique ou le système sanguin. Les cancers peuvent survenir dans pratiquement tous les tissus et organes du corps et sont souvent classés en fonction de leur origine, de leur type cellulaire et de leur stade de développement. Les facteurs de risque courants pour le cancer incluent des facteurs génétiques, des expositions environnementales, des habitudes de vie telles que le tabagisme et l'alimentation, ainsi que d'autres facteurs liés à la santé.Le diagnostic et le traitement du cancer varient en fonction du type de cancer, de sa localisation et de son stade de développement. Les options de traitement courantes comprennent la chirurgie, la radiothérapie, la chimiothérapie, l'immunothérapie et d'autres thérapies ciblées. Les progrès de la recherche médicale ont conduit à de meilleures options de traitement et à une amélioration des taux de survie, bien que la prévention reste un aspect important de la gestion du cancer.";
    } else {
        return "Désolé, je suis une version beta, pour l'instant je ne connais pas encore ce mot,Pouvez-vous écrire un autre mot ?";
    }
}
