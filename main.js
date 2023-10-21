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
    }else if (userInput.toLowerCase().includes('lymphome')) {
        return "Un type de cancer qui affecte le système lymphatique, une partie du système immunitaire."
    }else if (userInput.toLowerCase().includes('lymphome')) {
        return "Un type de cancer qui affecte le système lymphatique, une partie du système immunitaire.";
    } else if (userInput.toLowerCase().includes('leucemie')) {
        return "Un type de cancer du sang caractérisé par une production excessive de cellules sanguines anormales.";
    } else if (userInput.toLowerCase().includes('remission')) {
        return "Une période pendant laquelle les symptômes du cancer diminuent ou disparaissent complètement.";
    } else if (userInput.toLowerCase().includes('traitement palliatif')) {
        return "Des soins visant à soulager les symptômes et à améliorer la qualité de vie des patients atteints de cancer, souvent administrés en conjonction avec le traitement curatif.";
    } else if (userInput.toLowerCase().includes('prostate')) {
        return "Une glande masculine située sous la vessie qui peut être le site de cancer, généralement appelé cancer de la prostate.";
    } else if (userInput.toLowerCase().includes('mammographie')) {
        return "Une technique d'imagerie médicale utilisée pour détecter les signes précoces de cancer du sein.";
    } else if (userInput.toLowerCase().includes('sarcome')) {
        return "Un type de cancer qui se développe à partir de cellules osseuses, cartilagineuses, musculaires ou autres tissus conjonctifs.";
    } else if (userInput.toLowerCase().includes('teratome')) {
        return "Une tumeur généralement bénigne qui contient différents types de tissus, parfois dénommée 'tumeur monstre'.";
    } else if (userInput.toLowerCase().includes('hormonotherapie')) {
        return "Un traitement qui vise à influencer les niveaux hormonaux pour ralentir la croissance des cellules cancéreuses.";
    } else if (userInput.toLowerCase().includes('biologie moleculaire')) {
        return "La branche de la biologie qui étudie les interactions moléculaires, souvent utilisée pour comprendre les mécanismes sous-jacents du cancer.";
    }else if (userInput.toLowerCase().includes('adenocarcinome')) {
        return "Un type de carcinome qui se développe à partir de cellules glandulaires.";
    } else if (userInput.toLowerCase().includes('anaplasie')) {
        return "Une perte de différenciation cellulaire normale, souvent observée dans les cellules cancéreuses.";
    } else if (userInput.toLowerCase().includes('angiogenese')) {
        return "Le processus de formation de nouveaux vaisseaux sanguins, souvent observé dans la croissance tumorale.";
    } else if (userInput.toLowerCase().includes('apoptose')) {
        return "La mort cellulaire programmée, un processus naturel qui régule la croissance et le développement cellulaire.";
    } else if (userInput.toLowerCase().includes('biomarqueur')) {
        return "Une caractéristique mesurable utilisée pour évaluer l'état d'une maladie, souvent utilisée dans le diagnostic et le suivi du cancer.";
    } else if (userInput.toLowerCase().includes('brachytherapie')) {
        return "Une forme de traitement du cancer qui implique le placement de sources de radiation directement à l'intérieur ou à proximité de la tumeur.";
    } else if (userInput.toLowerCase().includes('cachexie')) {
        return "Un état de perte de poids et de faiblesse physique fréquemment observé chez les patients atteints de cancer avancé.";
    } else if (userInput.toLowerCase().includes('carcinogenese')) {
        return "Le processus de développement du cancer à partir de cellules normales.";
    } else if (userInput.toLowerCase().includes('caryotype')) {
        return "L'ensemble complet de chromosomes d'une cellule, souvent utilisé dans l'analyse génétique du cancer.";
    } else if (userInput.toLowerCase().includes('cryptogenese')) {
        return "Le processus de formation des cryptes, souvent observé dans le cancer colorectal.";
    } else if (userInput.toLowerCase().includes('cytoplasme')) {
        return "La partie de la cellule qui entoure le noyau, contenant organites et autres composants cellulaires.";
    } else if (userInput.toLowerCase().includes('depistage')) {
        return "La recherche précoce de signes de cancer chez des personnes ne présentant pas de symptômes.";
    } else if (userInput.toLowerCase().includes('dysplasie')) {
        return "Un état de croissance cellulaire anormale ou de développement anormal d'un tissu.";
    } else if (userInput.toLowerCase().includes('etiologie')) {
        return "L'étude des causes d'une maladie, y compris le cancer.";
    } else if (userInput.toLowerCase().includes('exerese')) {
        return "L'acte de retirer chirurgicalement une tumeur ou une partie d'un organe affecté par le cancer.";
    } else if (userInput.toLowerCase().includes('facteur de risque')) {
        return "Un élément associé à une augmentation de la probabilité de développer une maladie, comme le cancer.";
    } else if (userInput.toLowerCase().includes('genotype')) {
        return "L'ensemble des gènes présents dans le materiel genetique d'un individu, influençant le risque de cancer.";
    } else if (userInput.toLowerCase().includes('histologie')) {
        return "L'étude microscopique des tissus biologiques, souvent utilisée pour diagnostiquer le cancer.";
    } else if (userInput.toLowerCase().includes('immunosuppression')) {
        return "Un affaiblissement intentionnel du système immunitaire, parfois observé chez les patients recevant un traitement contre le cancer.";
    } else if (userInput.toLowerCase().includes('jalonnement')) {
        return "La propagation de cellules cancéreuses à travers le système lymphatique ou sanguin vers d'autres parties du corps.";
    } else if (userInput.toLowerCase().includes('kyste')) {
        return "Une masse liquidienne entourée d'une paroi, parfois présente dans les tissus affectés par le cancer.";
    } else if (userInput.toLowerCase().includes('lumpectomie')) {
         return "L'ablation chirurgicale d'une tumeur du sein, généralement suivie d'une radiotherapie.";
    } else if (userInput.toLowerCase().includes('mastectomie')) {
        return "L'ablation chirurgicale du sein, souvent réalisée en cas de cancer du sein avancé.";
    } else if (userInput.toLowerCase().includes('neoplasie')) {
        return "La formation de nouvelles cellules, souvent observée dans la croissance tumorale.";
    } else if (userInput.toLowerCase().includes('oncogene')) {
        return "Un gene dont les mutations peuvent contribuer au développement du cancer.";
    } else if (userInput.toLowerCase().includes('paraneoplasique')) {
        return "Une affection qui se produit à distance d'une tumeur mais est associée à celle-ci, souvent observée dans le cancer.";
    } else {
        return "Désolé, je suis une version beta, pour l'instant je ne connais pas encore ce mot,Pouvez-vous écrire un autre mot ?";
    }
}
