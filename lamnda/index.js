// lambda
// Este ejemplo es una demostración de como manejar intents en una skill de Alexa utilziando el Alexa Skills Kit SDK (v2)
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        //const speechText = 'Rivendel es la capital de un reino mágico, gobernado por el rey Voliber, es un Oso enorme, con colmillos más grandes que los dedos de tu mano, tiene la capacidad de controlar los rayos eléctricos a su voluntad y es conocido por su gran poder. El rey Voliber ha dicho esta mañana que tiene escondido un tesoro en la isla de Noxus que sólo podrá encontrar la persona más valiente y hábil que supere una serie de retos. Para esta aventura cuentas con una poción de vida y una espada. Decides adentrarte en esta aventura y partes rumbo al bosque. Despues de días caminando te encuentras con una puerta enorme y tocas para que te abran. Se asoma un ogro enorme y te dice con voz molesta. Si quieres pasar necesito 2 cosas. Primero ¿Cual es tu nombre?...';
        const speechText = 'Bienvenido al mundo de Aventra ¿Cuál es tu nombre?'
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('null')
            .reprompt('Perdona, no entiendo. ¿Puedes decirme algo como: Me llamo Alexa?')
             .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./welcome.json'),
                datasources: {}
            })
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./view.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Mundo de Aventra",
                        "image": {
                            "sources": [
                            {
                                "url": "https://imagizer.imageshack.com/img921/9514/VYsjwX.jpg",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://imagizer.imageshack.com/img921/9514/VYsjwX.jpg",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"mundo aventra\""
                    }
                }
            })

            .getResponse();
    }
};

const NameIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NameIntent';
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        var name = request.intent.slots.name.value;
        const speechOutput = `Hola ${name}.  ¿Quieres iniciar un nuevo juego, o continuar una partida existente?`;
        return handlerInput.responseBuilder
            .speak(`${speechOutput}`)
            .reprompt(' Disculpa, no entendi eso. ¿Podrías intentarlo de nuevo?')
            .getResponse();
    }
};

const NewGameIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NewGameIntent';
    },
    handle(handlerInput) {
        const speechOutput = `Aventra es un reino mágico gobernado por el rey Voliber. Él
ha dicho que tiene escondido un tesoro en la isla de Nóxus,
que sólo el aventurero más valiente y más hábil podrá
encontrar. ¿Quieres sumarte a esta aventura?`;
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(' ¿Quieres sumarte ?')
            .getResponse();
    }
};



const AceptAdventureIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AceptAdventureIntent';
    },
    handle(handlerInput) {
        const speechOutput = `Bien, el Rey Voliber te ha confiado la búsqueda del tesoro. Para esta aventura te ha designado como capitán del barco y te ha dado cien monedas para tu viaje.....Mar adentro te encuentras con un grupo de
cinco piratas que han detenido tu navegación, la única forma de continuar es negociando. Te piden dos monedas a cada pirata que te ha atacado ¿Cuántas monedas en total debes darles?`;
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(' ¿Cuantas?')
            .getResponse();
    }
};

const FirstChallengeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FirstChallengeIntent';
    },
    handle(handlerInput) {
        
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = attributesManager.getSessionAttributes() || {};
        const nombre = sessionAttributes.hasOwnProperty('name') ? sessionAttributes.year : 'aprendíz';
        const speechText = `<speak>
            Gracias a tu habilidad de negociación los piratas te han dejado pasar y has llegado a la isla. 
            En el puerto te encuentras a un espíritu que está haciendo guardia. 
            <voice name="Conchita"> Valiente ${nombre} has logrado evadir a los piratas.</voice> 
            <voice name="Conchita"> Por tu valentía te daré una poción que te ayudará en tu camino, ¿De qué isla provienes y quien te envía?</voice>
        </speak>`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const WhoSendsYouIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhoSendsYouIntent';
    },
    handle(handlerInput) {
        
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = attributesManager.getSessionAttributes() || {};
        const nombre = sessionAttributes.hasOwnProperty('name') ? sessionAttributes.year : 'aprendíz';
        const speechText = `<speak>
            <voice name="Conchita">Puedes continuar tu camino pero tendrás que decidir cuidadosamente porque esto podría cambiar el rumbo de toda tu aventura.</voice>
            Eliges seguir el camino del sendero, el cual es largo y empinado, o ir por el camino de la meseta en donde encontrarás un cañon muy profundo y un puente colgante. ¿Qué camino quieres elegir? 
        </speak>`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Me puedes decir Hola! ¿Cómo te puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Hasta pronto!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// Este handler para que hagas tus pruebas y debugging.
// Simplemente repite el intent que dijo el usuario.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `Lanzaste el intent que se llama ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('agrega un texto de reprompt si deseas dejar la sesión abierta para que el usuario responda. No olvide cerrar con una pregunta. ¿Cómo te puedo ayudar?')
            .getResponse();
    }
};

// Erro genério para capturar erroes de sintaxis o de enrutamiento.
// Si recibes un error, eso significa que no hay un handler que regrese "true" para el método canHandle()
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Lo siento, No puedo entender lo que has dicho. Por favor inténtalo de nuevo`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// Este handler funciona como el punto de entrada de tu skill, se encarga de enrutar
// todas las peticiones.
// Asegúrate de tener todos los handlers e interceptores dado de alta aquí.
// El órden importa, son procesador de arriba hacia abajo.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NameIntent,
        NewGameIntent,
        AceptAdventureIntent,
        FirstChallengeIntentHandler,
        WhoSendsYouIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // Asegúrate de que el IntentReflector sea el último para evitar que maneje peticiones incorrectas
    .addErrorHandlers(
        ErrorHandler)
.lambda();