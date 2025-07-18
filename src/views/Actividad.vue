<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Características generales de los recursos forestales no maderables.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Aplicar  los fundamentos prácticos relacionados con las características generales de los recursos forestales no maderables.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué elementos componen un ecosistema?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el agua y el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elementos bióticos y abióticos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo las plantas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente animales y microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes relaciones interespecíficas beneficia a ambas especies involucradas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Parasitismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comensalismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mutualismo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según el Decreto 690 de 2021, la flora silvestre se define como: ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plantas cultivadas por el ser humano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plantas de jardines y parques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Especies vegetales no plantadas ni mejoradas por el hombre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plantas que solo crecen en zonas agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es un principio clave de conservación de la biodiversidad según la FAO?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprovechamiento intensivo sin regulación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso sostenible y acceso equitativo de los beneficios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusión de comunidades locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Explotación masiva de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se clasifican los productos forestales no maderables según la parte utilizada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo por sus semillas y frutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo por la especie a la que pertenecen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Por la altura del árbol donde se encuentran.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por raíces, hojas, corteza, tallos, frutos, entre otros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el valor ecológico de los productos forestales no maderables?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contribuir a la conservación de la biodiversidad y los ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir cultivos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar contaminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso a recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de especies permiten determinar el estado de un ecosistema?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Especies útiles en bioprospección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Especies endémicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Especies indicadoras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Especies ornamentales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo de un inventario florístico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocer las especies presentes y cuantificar recursos forestales no maderables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exterminar especies invasoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar plantas no útiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deforestar áreas productivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes métodos se utiliza en la evaluación de recursos forestales no maderables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo análisis de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Etnobotánica, inventarios de biodiversidad y técnicas de ciencias sociales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente muestreo químico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo exploraciones industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿En qué consiste la taxonomía?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo en recolectar plantas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En estudiar la distribución geográfica de especies.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En identificar, clasificar y nombrar a los seres vivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En observar las plantas sin clasificarlas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
