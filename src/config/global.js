export default {
  global: {
    Name: 'Características de los recursos forestales no maderables.',
    Description:
      'Este componente aborda la flora silvestre y los recursos no maderables del bosque con potencial de aprovechamiento sostenible. Permite conocer sus características, funciones ecosistémicas, clasificación y aspectos clave para realizar inventarios florísticos, fortaleciendo así las habilidades necesarias para identificar y proponer alternativas productivas responsables con el entorno natural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ecosistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de los ecosistemas	3',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones ecológicas y contribuciones no materiales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principios de conservación de biodiversidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Flora silvestre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y características generales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Productos forestales no maderables del bosque',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación en función de la parte utilizada',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación según uso final del producto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Valor económico, social y ecológico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Productos forestales no maderables aprovechados',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Caracterización taxonómica de productos no maderables',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Principios de taxonomía',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inventario florístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Cuantificación de recursos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Variables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos para la evaluación de recursos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: ' Error de muestreo',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos forestales no maderables del bosque',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura - FAO. (2002). <em>Productos no maderables del bosque. FAO</em> ',
      tipo: 'Artículo',
      link: 'https://www.fao.org/4/y1997s/y1997s0g.htm ',
    },
    {
      tema: 'Productos forestales no maderables del bosque',
      referencia:
        'Instituto Sinchi. (2021). Productos forestales no maderables y cadena de valor [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iUCQcVPjf7k ',
    },
  ],
  glosario: [
    {
      termino: 'Clasificación de los productos forestales no maderables',
      significado:
        'se pueden clasificar por su origen, de origen vegetal y de origen animal, se pueden clasificar por la parte de la planta que se aprovecha (raíces, tallos, yemas, brotes, hojas, flores, frutos, semillas) y por su uso (alimentos, medicinales, etc.).',
    },
    {
      termino: 'Productos forestales no maderables',
      significado:
        'son productos que no sean madera, que se produzcan naturalmente en los bosques y se pueden cosechar para uso humano, industrial, construcción, para medicinas, y para artesanías, sin cortar los árboles.',
    },
    {
      termino: 'Manejo sostenible',
      significado:
        'planificación y ejecución de prácticas sostenibles para el manejo, uso y aprovechamiento de la flora silvestre y de los productos forestales no maderables, que, salvaguardando el equilibrio de los ecosistemas y sus funciones, permitan mejorar la producción de bienes y servicios, apoyadas en la evaluación de su estructura, características intrínsecas y potencial, respetando los usos tradicionales y el valor cultural.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander Von Humboldt. (2020). Productos forestales no maderables, alternativa de conservación de nuestros bosques. ',
      link:
        'https://www.humboldt.org.co/noticias/productos-forestales-no-maderables-alternativa-de-conservacion-de-nuestros-bosques',
    },
    {
      referencia:
        'Arias, J y Cárdenas, D. (2007). Manual de identificación, selección y evaluación de oferta de productos forestales no maderables. ',
      link:
        'https://sinchi.org.co/index.php/manual-de-identificacion-seleccion-y-evaluacion-de-oferta-de-productos-forestales-no-maderables',
    },
    {
      referencia:
        'Becerra, M., Canales, N., Acuña, R., Gómez, J., Murcia, M., Purkey, D. y Yepes, Y. (2025). La red de valor y la biodiversidad: el caso del asaí o naidí para la bioeconomía de Colombia. Biodiversidad en la Práctica Vol. X. ',
      link:
        'https://revistas.humboldt.org.co/index.php/BEP/article/view/1206/1259',
    },
    {
      referencia:
        'Corporación Autónoma Regional Rionegro Nare - CORNARE. (2021). Identificación y priorización de ecosistemas y áreas ambientales. ',
      link:
        'https://www.cornare.gov.co/Aviso/participacion-ciudadana/Identificacion_y_Priorizacion_de_Ecosistemas_y_Areas_Ambientales_EAA.pdf',
    },
    {
      referencia:
        'FAO. (1997). Productos forestales no madereros. Organización de las Naciones Unidas para la Alimentación y la Agricultura. ',
      link: 'https://www.fao.org/3/y1997s/y1997s0g.htm',
    },
    {
      referencia:
        'FAO. (2021). Ecosystem management in agriculture: principles and application of the ecosystem approach. ',
      link: 'https://www.fao.org/4/y4586e/y4586e12.htm?utm_source=chatgpt.com',
    },
    {
      referencia: 'Hernández, M., Barrera, j. y Cariilo, M. (2006). Arazá. ',
      link:
        'https://sinchi.org.co/files/publicaciones/publicaciones/pdf/araza_2web.pdf',
    },
    {
      referencia:
        'Instituto Amazónico de Investigaciones Científicas SINCHI (2018). Asaí cadena de valor en el sur de la región amazónica. ',
      link:
        'https://sinchi.org.co/files/PUBLICACIONES%20DIGITALES/Fichas%20Tecnicas%20agroforestal/Fichas%20Tecnicas%20de%20Especies%20de%20uso%20Forestal%20y%20Agroforestal%20de%20la%20Amazonia%20Colombiana_01%20ASAI.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, Unión Europea, y  Universidad Distrital Francisco José de Caldas. (2020). Productos Forestales No Maderables (PFNM) en Colombia: Consideraciones para su desarrollo. https://revistas.udistrital.edu.co/index.php/colfor/article/view/3270/0',
      link:
        'https://revistas.udistrital.edu.co/index.php/colfor/article/view/3270/0',
    },
    {
      referencia:
        'Ministerio de Desarrollo Agrario y Riego. (2015). Los productos forestales no maderables. MIDAGRI.',
      link:
        'https://www.midagri.gob.pe/portal/objetivos/49-sector-agrario/recurso-forestal/354-productos-no-maderables ',
    },
    {
      referencia: 'Naturalista Colombia. (s.f). Achiote, Taxonomía. ',
      link: 'https://colombia.inaturalist.org/taxa/127676-Bixa-orellana',
    },
    {
      referencia: 'Naturalista Colombia. (s.f). Caucho, Taxonomía. ',
      link: 'https://colombia.inaturalist.org/taxa/126507-Ficus-elastica',
    },
    {
      referencia: 'Naturalista Colombia. (s.f). Guarumo, Taxonomía. ',
      link: 'https://colombia.inaturalist.org/taxa/160255-Cecropia-obtusifolia',
    },
    {
      referencia: 'Naturalista Colombia. (s.f). Palma Milpesos, Taxonomía. ',
      link: 'https://colombia.inaturalist.org/taxa/365688-Oenocarpus-bataua',
    },
    {
      referencia:
        'Sotelo, I., Casas, N., y Camelo, G. (2010). Borojó (Borojoa patinoi): fuente de polifenoles con actividad antimicrobiana. Vitae, 17(3), 329-336. ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-40042010000300011',
    },
    {
      referencia:
        'UNAD. (2022). Guía por actividades para el desarrollo del componente práctico del curso. ',
      link:
        'https://academia.unad.edu.co/images/escuelas/ecapma/Componente_practico/302277031_Dasometra_GuaCP_Olga_Ofir_Cardona_To.pdf',
    },
    {
      referencia:
        'Universidad EIA. (2014). Catálogo virtual de flora del Valle de Aburrá. ',
      link: 'https://catalogofloravalleaburra.eia.edu.co/species/313',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2017). Relaciones interespecíficas e intraespecíficas. ',
      link:
        'https://e1.portalacademico.cch.unam.mx/alumno/biologia2/unidad2/relacionesComunidad/interespecificas',
    },
    {
      referencia:
        'World Gastronomy Institute. (2020). Chontaduro el fruto del amor. ',
      link: 'https://www.worldgastronomy.org/post/chontaduro-el-fruto-del-amor',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
