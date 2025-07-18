<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Productos forestales no maderables del bosque 
    
    .bg-full-width.bg-color-9
      .px-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-4.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/2.svg", style="max-width: 190px").mx-auto
                .col-lg
                  p.mb-0 Colombia es un país con una amplia biodiversidad, lo que permite la existencia de una gran variedad de productos forestales no maderables (PFNM). El conocimiento sobre estos productos ha sido transmitido oralmente de generación en generación y, en la actualidad, están siendo objeto de investigación por su potencial para contribuir al bienestar humano.
            p(data-aos="fade-left") En este contexto, recolectores, comunidades indígenas, pobladores rurales, afrodescendientes y otras personas que dependen de los PFNM los agrupan según su potencial de comercialización y las posibles cadenas productivas en las que pueden insertarse. A continuación, se presenta una tabla que recoge esta forma de clasificación (Ministerio de Ambiente y Desarrollo Sostenible et al., 2020).

        .tarjeta.bg-color-10.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.bg-color-11 Clasificación de productos no maderables del bosque y sus cadenas productivas
                  p.text-white.mb-0 Se invita a leer el documento Clasificación de productos no maderables del bosque y sus cadenas productivas, donde se aborda una recopilación detallada de especies vegetales que no producen madera como producto principal, pero que tienen un alto valor económico, social o ecológico. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Clasificación en función de la parte utilizada
    
    .bg-full-width-2.bg-fondo-3
      .px-4.p-md-5
        p.mb-5 Por otro lado, el aprovechamiento de los recursos forestales no maderables del bosque también se clasifica en función de la parte utilizada, las cuales pueden ser: raíces, hojas, corteza, etc. (FAO, 1997). Los tipos de recursos y partes vegetales son: 

        .row.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')

              h3.text-center Propágulos - reproductivos
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Fruto
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Nuez/semilla
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Semilla oleaginosa
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')

              h3.text-center Exudados vegetales
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Resina
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Savia
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/6.svg', alt='Texto que describa la imagen')

              h3.text-center Estructuras vegetales
              p.mb-0 Tronco, partes verdes, flores, hojas, raíz, corteza, tubérculo, yemas apicales, brotes, tallos.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Clasificación según uso final del producto
    
    p.mb-5 A continuación, se presenta un video sobre la clasificación de los Productos Forestales No Maderables (PFNM) según su uso final, destacando sus principales categorías y aplicaciones: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Otro factor que se debe tener en cuenta al hablar sobre los productos forestales no maderables es su aplicación en diferentes áreas de la sociedad actual. A continuación, se presentan algunos de ellos y en qué se pueden usar:
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. 
      span PFNM vegetales y procesos de aplicación
    
    .tabla-a.color-acento-contenido.mb-5.pst
      table
        caption <b>Nota</b>. Tomado del Ministerio de Desarrollo Agrario y Riego (2015).
        thead
          tr.text-center
            th.bg-color-13.text-white.text-center Productos forestales maderables no renovables
            th.bg-color-13.text-white.text-center Procesos aplicados
        tbody.bg-color-14
          tr
            td Raíces, tallos, hojas, flores, frutos y semillas.
            td Limpieza, clasificación, conservación y envasado.
          tr
            td Gomas, resinas, látex y otras sustancias similares.
            td Concentración, coagulación, laminado y secado de sustancias del árbol.
          tr
            td Hojas, flores, frutos, semillas y vainas.
            td Molienda, picado, pelado y machacado.
          tr
            td Plantillas medicinales y ornamentales.
            td Limpieza, clasificación, preparación, conservación y envasado.
          tr
            td Cañas, carrizo y juncos.
            td Preparación y tejido.
          tr
            td Raíces, tallos, hojas, flores, frutos y semillas.
            td Fermentación y macerado.
    
    p.mb-5 A continuación, se presentan los ejemplos de uso de productos forestales no maderables del bosque:

    .bg-full-width-2.bg-fondo-4
      .p-4.p-md-5.pb-md-3
        .row.justify-content-around.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/9.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Yabla 
                  p.text-center Construcción, elaboración de artesanías y ornamentos
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/10.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Resina de copal 
                  p.text-center Uso ceremonial
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/11.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Chicozapote 
                  p.text-center Extracción de látex, uso alimenticio y elaboración de golosinas
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/12.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Agaves 
                  p.text-center Alimentación, bebidas, extracción de fibras y producción de destilados
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/13.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Hongos 
                  p.text-center Alimentación y aplicaciones en farmacología
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/14.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Orégano 
                  p.text-center Uso culinario y extracción de aceites esenciales
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema3/15.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Cactáceas 
                  p.text-center Uso ornamental, alimenticio y obtención de derivados para la industria             
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Valor económico, social y ecológico
    
    p.mb-5 La flora silvestre y en general los productos no maderables del bosque tienen valores desde el punto de vista económico, social y ecológico. Dichos valores se describen a continuación (Humboldt, 2020; Arias y Cárdenas, 2007):

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Económico" :icono="require('@/assets/componentes/6.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Económico
            p Representan una fuente de ingresos para diversas comunidades, complementando actividades como la agricultura, producción de alimentos, artesanías y medicina tradicional. Además, impulsan las economías locales y generan empleos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/16.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Social" :icono="require('@/assets/componentes/7.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Social
            p Ofrecen alternativas para la subsistencia y seguridad alimentaria de comunidades rurales. Su uso está vinculado a saberes ancestrales y tradiciones culturales, lo que enriquece la bioculturalidad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/17.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Ecológico" :icono="require('@/assets/componentes/8.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Ecológico
            p Su conservación está asociada con la protección de la biodiversidad forestal. La gestión sostenible contribuye a la regulación climática, preservación de suelos y cuencas, y disminución de la presión sobre los bosques.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/18.png', alt='Texto que describa la imagen')
    
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Productos forestales no maderables aprovechados
    
    p.mb-5 Colombia es un país de vocación agrícola, cuenta con riquezas naturales consideradas como exóticas en el mundo, con amplia demanda en los mercados y atribuciones culturales ancestrales. En el censo de estos productos llama la atención una extensa gama de frutas ubicadas en zonas geográficas especiales, como en las dos regiones costeras y el trapecio amazónico.  Los frutos del bosque de alto valor nutritivo son: 

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-6
              h5 Borojó
              p Fruto en forma de baya carnosa, de entre 7 y 12 cm de diámetro. Inicialmente verde claro, adquiere un tono pardo rojizo al madurar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-6
              h5 Chontaduro
              p Fruto de una palmera amazónica. Es un alimento versátil y nutritivo, ampliamente consumido en diversas preparaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/21.png")
            .col-lg-6
              h5 Noni
              p También llamado morinda, por su semejanza con la mora. Se utiliza principalmente en la elaboración de productos medicinales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/22.png")
            .col-lg-6
              h5 Mangostino
              p Fruto con propiedades antioxidantes que favorecen la protección celular. Su alto contenido de vitaminas y minerales lo convierte en un alimento de gran valor nutricional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-6
              h5 Asaí
              p Pulpa rica en aceites, fibra y compuestos antioxidantes. Se emplea como materia prima en alimentos funcionales para la prevención de enfermedades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-6
              h5 Arazá
              p Fruto empleado en el sector agroindustrial para producir pulpas, mermeladas, néctares, vinos, conservas y productos deshidratados. También se usa en la industria de perfumes.
    
    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5	Caracterización taxonómica de productos no maderables
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/25.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.px-5.py-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left").mb-0 El bosque es uno de los ecosistemas más afectados por las actividades humanas, entre ellas la minería, la expansión de las fronteras agropecuarias y el crecimiento urbano. Es fundamental reconocer su relevancia tanto en el ámbito económico como en el social, ya que provee numerosos bienes y servicios para las comunidades, además de su valioso aporte al campo medicinal en la actualidad.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/26.png" data-aos="zoom-in")

    .bg-full-width-2.bg-fondo-5.mb-3
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/9.png")
            h3.titulo-con-imagen__texto.text-white Botánica y taxonomía
          
        p.mb-5 Las plantas desempeñan un papel fundamental en la conservación de los ecosistemas y en la provisión de diversos servicios ecosistémicos. Además de captar la energía solar, son responsables de la producción de oxígeno y de muchos de los recursos que se utilizan en distintas regiones. Por ello, a continuación se presentan dos definiciones clave para comprender su proceso de producción, con la invitación a explorarlo con atención.

        .row.justify-content-center
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.tarjeta.h-100
              figure
                img(src="@/assets/curso/tema3/27.png" data-aos="zoom-in")
              div.text-center.p-4
                h4 Botánica
                p Es la disciplina que estudia, describe y clasifica las plantas y su relación entre sí y con otros organismos. Forma parte de la biología. La biología estudia el reino Plantae, es decir, las plantas, e incluye también a los reinos Fungi (hongos) y Chromista. Todos estos grupos tienen en común que no poseen cloroplastos ni presentan movilidad propia.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.tarjeta.h-100
              figure
                img(src="@/assets/curso/tema3/28.png" data-aos="zoom-in")
              div.text-center.p-4
                h4 Taxonomía
                p Es la ciencia que trata los principios de la clasificación de los seres vivos. Comprende tres procesos fundamentales: la identificación, la nomenclatura y la clasificación de los organismos. Este proceso parte de las propiedades generales de los seres vivos hasta llegar a las más específicas. Para clasificar las plantas se consideran criterios como características anatómicas, fisiológicas, morfológicas y otras propias de cada organismo.

    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Principios de taxonomía
    
    p.mb-5 La taxonomía se encarga principalmente de nombrar a los seres vivos y organizarlos en categorías, lo que permite su clasificación con base en características compartidas. La unidad básica de esta clasificación es la especie, a partir de la cual se establecen subcategorías que facilitan su estudio y comprensión.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1. 
      span Unidad básica para clasificación taxonómica

    figure.mb-5
      img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in", alt="La figura representa la unidad básica para clasificación taxonómica, la cual tiene en cuenta dominio, reino, división, clase, orden, familia, género y especie")

    p.mb-5 A continuación, se presenta la taxonomía de algunos productos no maderables: 

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/30.png")
            .col-lg-6
              h4 Palma milpesos
              p.mb-0 <b>Género</b>: Oenocarpus
              p.mb-0 <b>Orden</b>: Arecales
              p.mb-0 <b>Clase</b>: Liliopsida
              p.mb-0 <b>Filo</b>: Tracheophyta

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/31.png")
            .col-lg-6
              h4 Guarumo
              p.mb-0 <b>Género</b>: Cecropia
              p.mb-0 <b>Orden</b>: Rosales
              p.mb-0 <b>Clase</b>: Magnoliopsida
              p.mb-0 <b>Filo</b>: Tracheophyta


          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/32.png")
            .col-lg-6
              h4 Árbol de caucho
              p.mb-0 <b>Género</b>: Ficus
              p.mb-0 <b>Orden</b>: Rosales
              p.mb-0 <b>Clase</b>: Magnoliopsida
              p.mb-0 <b>Filo</b>: Tracheophyta

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/33.png")
            .col-lg-6
              h4 Achiote
              p.mb-0 <b>Género</b>: Bixa
              p.mb-0 <b>Orden</b>: Malvales
              p.mb-0 <b>Clase</b>: Magnoliopsida
              p.mb-0 <b>Filo</b>: Tracheophyta

         
    
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
