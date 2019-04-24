// lambda
// Este ejemplo es una demostración de como manejar intents en una skill de Alexa utilziando el Alexa Skills Kit SDK (v2)
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Rivendel es la capital de un reino mágico, gobernado por el rey Voliber, es un Oso enorme, con colmillos más grandes que los dedos de tu mano, tiene la capacidad de controlar los rayos eléctricos a su voluntad y es conocido por su gran poder. El rey Voliber ha dicho esta mañana que tiene escondido un tesoro en la isla de Noxus que sólo podrá encontrar la persona más valiente y hábil que supere una serie de retos. Para esta aventura cuentas con una poción de vida y una espada. Decides adentrarte en esta aventura y partes rumbo al bosque. Despues de días caminando te encuentras con una puerta enorme y tocas para que te abran. Se asoma un ogro enorme y te dice con voz molesta. Si quieres pasar necesito 2 cosas. Primero ¿Cual es tu nombre?...';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('null')
            .reprompt(' ¿Cual es tu nombre?')
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
        const speechOutput = `Hola ${name}`;

        return handlerInput.responseBuilder
            .speak(`${speechOutput}`)
            .reprompt('¿qué mas necesitas?')
            .getResponse();
    }
};


const HolaMundoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HolaMundoIntent';
    },
    handle(handlerInput) {
        const speechText = '{nombre}. Bien,  ahora necesito que me respondas una pregunta. ¿Porque no te mueres?';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('agrega un texto de reprompt si deseas dejar la sesión abierta para que el usuario responda. No olvide cerrar con una pregunta. ¿Cómo te puedo ayudar?')
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
        const speechText = 'Adios!';
        return handlerInput.responseBuilder
            .speak(speechText)
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
        HolaMundoIntentHandler,
        NameIntent,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // Asegúrate de que el IntentReflector sea el último para evitar que maneje peticiones incorrectas
    .addErrorHandlers(
        ErrorHandler)
.lambda();