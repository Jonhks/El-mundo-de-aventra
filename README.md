
![El Mundo de Aventra](https://user-images.githubusercontent.com/47608352/56623658-d158d500-65fa-11e9-9c4f-2ff557eb292f.jpg)


## ÍNDICE

**1.1 Presentación**

**1.2 Capacidad Tecnológica**
  
**1.3 Originalidad e impacto**

***

**2.1 Funcionalidad**

**2.2 Arquitectura tecnológica**

**2.3 Valores agregados**

***

## **1.1 Presentación**

Alrededor del mundo más de 265 millones de niños y niñas no están escolarizados.

Aquellos que asisten a la escuela carecen, en su mayoría, [de conocimientos básicos de lectura y artimética](https://www.un.org/sustainabledevelopment/es/education/).

La situación de la educación en México, **en este contexto**, se encuentra en una condición desafortunada: según los resultados de la prueba de Pisa del 2015, tan solo el 1% de los estudiantes logró alcanzar el nivel de excelencia en las competencias matemáticas, científicas y de lectura. 

En estas tres áreas, México se encuentra por [debajo del promedio de los demás países de la OCDE](https://www.oecd.org/pisa/PISA-2015-Mexico-ESP.pdf). 

Bajo este panorama, si no buscamos una solución distinta para abordar esta problemática, será difícil asegurar que para el 2030 hayamos cumplido con el 4to objetivo del desarrollo sostenible de la ONU: **alcanzar una educación de calidad.** 

**¿Cómo hacer para contribuir a mejorar la calidad de la educacion en México con ayuda de la tecnología?**

***

### **AMAZON SKILL: "EL MUNDO DE AVENTRA"**

Es un juego de aventuras interactivo, diseñado como _Skill_ para [Amazon Alexa](https://developer.amazon.com/es/alexa), que te permite vivir una aventura narrada, resolviendo retos de competencia científica y lingüísticas. 

Disponible para los diferentes dispositivos "Echo" de Amazon.

> Aventra, tu guía personal, te ayudará a tomar decisiones mientras cruzas diferentes reinos, conoces a múltiples personajes de fantasía y resuelves los grandes misterios que este mundo aguarda.

Diseñamos diferentes historias-retos a partir de dos grandes áreas (comunicación y lenguaje) que se han incluido en la prueba _Planea Educación Básica_ realizada para el 2018, coordinada por la **Secretaría de Educación Pública (SEP)**, el **Instituto Nacional para la Evaluación de la Educación (INEE)** y las **autoridades educativas de las entidades federativas**.

![User Persona](https://user-images.githubusercontent.com/47608352/56623594-7a530000-65fa-11e9-9ebb-e9ff08cf06e3.jpg)

## **1.2 Capacidad Tecnológica**

Para desarrollar "Skills" dentro de Amazon Echo, es necesario tener conocimientos relacionados con:

- Programación en Frontend a través de Javascript para la interfaz con Alexa
- Programación en Backend para gestión de la información
- Conocimiento de la heurística del lenguaje de presentación de Alexa (APL)
- Diseño situacional
- Diseño de los diagramas de flujo y scripts
- Diseño de la interfaz de voz (VUI)
    
Nuestro equipo cuenta con las diferentes habilidades para desarrollar "Skills" dentro de Amazon.

Por otro lado, recordemos que ya existen otras aplicaciones en el mercado americano y ya están funcionando bajo estos [modelos de educación.](https://medium.com/@justinbrooke/10-alexa-skills-every-gamer-born-in-the-80s-will-love-558209d8a92e)

## **1.3 Originalidad e impacto**

En México se prevé que para 2023 [se utilizarán 8,000 millones de asistentes de voz digitales](https://www.forbes.com.mx/asistentes-de-voz-el-nuevo-enlace-hombre-maquina/), en comparación con los 2,5000 millones que se estimaron hasta 2018.

Hemos desarrollado un primer diagrama de flujo en el siguiente link que explica cómo vamos a desarrollar el "script".

![Flujo](https://user-images.githubusercontent.com/47608352/56624627-40d0c380-65ff-11e9-9c93-4653a3080f22.jpg)
![Flujo2](https://user-images.githubusercontent.com/47608352/56624660-62ca4600-65ff-11e9-91ad-e87f0bd3c06c.jpg)
![Flujo3](https://user-images.githubusercontent.com/47608352/56624671-72498f00-65ff-11e9-8b2f-e41a91f40df4.jpg)
![Flujo4](https://user-images.githubusercontent.com/47608352/56624673-78d80680-65ff-11e9-9e27-4ae811585174.jpg)

***

## **2.1 **Funcionalidad****

Uno de los pasos fundamentales para el desarrollo de la aplicación son los **"Utterances"** y los **Intents**, referidos al script del proyecto.

> Los **"Intents"** son las acciones que le voy a permitir a hacer al usuario y los **"Utterances"** son las expresiones que podrá usar el usuario para invocar las acciones.

[Utterances](https://www.icloud.com/numbers/0EHUKwC-jkvaAAtmJ5LNX148Q#Utterances)


## **2.2 Arquitectura tecnológica**

El desarrollo del "skill" está vinculado bajo una arquitectura con Frontend, Backend y base de datos.

Utilizaremos para construirla:

- APL (Frontend)
- AWS Lambda (Backend)
- DynamoDB (Base de datos)

![Arquitectura](https://user-images.githubusercontent.com/1256678/56624609-37475b80-65ff-11e9-9814-b8e8a2168da6.png)

