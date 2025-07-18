<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ecosistema
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.px-5.py-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Los ecosistemas se definen como un conjunto de factores, elementos y organismos que interactúan de forma constante y presentan una estructura y composición determinadas por condiciones abióticas, como el clima, el agua, el suelo y la geología, entre otros factores que influyen en la forma en que se asocian las comunidades vegetales y animales (CORNARE, 2021).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="zoom-in")
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Elementos de los ecosistemas
    
    p.mb-5 Un ecosistema está compuesto por elementos bióticos y abióticos, los cuáles al relacionarse constituyen los servicios que pueden brindar a su entorno:

    TabsA.color-acento-botones.mb-3
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elementos bióticos")
        .row.align-items-center
          .col-xl-7.mb-3.mb-lg-0
            h4 Elementos bióticos
            p Comprende el conjunto de seres vivos presentes en un ecosistema, incluyendo la fauna, la flora, los microorganismos y los seres humanos.
          .col-xl-5
            figure
              img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elementos abióticos")
        .row.align-items-center
          .col-xl-7.mb-3.mb-lg-0
            h4 Elementos abióticos
            p Incluye elementos como el agua, el suelo, el clima y el paisaje, los cuales otorgan características particulares a cada ecosistema y permiten el establecimiento de diversas interacciones entre los organismos y su entorno
          .col-xl-5
            figure
              img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
          
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Relaciones
    
    p.mb-5 Para sobrevivir y reproducirse, los organismos establecen distintos tipos de relaciones que, según su naturaleza, se dividen en dos categorías: las que ocurren entre individuos de la misma especie, denominadas relaciones intraespecíficas, y las que se forman con individuos de otras especies, conocidas como relaciones interespecíficas (Universidad Nacional Autónoma de México, 2017). A continuación, se describen las principales relaciones interespecíficas e intraespecíficas:

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-6
              h5 Mutualismo
              p Relación entre organismos de diferentes especies en la que ambos se benefician, mejorando sus condiciones de vida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-6
              h5 Comensalismo
              p Un organismo se beneficia de otro de una especie distinta sin causarle daño ni beneficio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-6
              h5 Parasitismo
              p Un organismo vive sobre o dentro de otro de una especie diferente; el parásito se beneficia y el hospedador se ve perjudicado. Ejemplo: hongos parásitos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-6
              h5 Cooperación
              p Individuos de una misma especie se unen para fines de alimentación, reproducción y sobrevivencia en su ecosistema.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-6
              h5 Competencia por espacio (interespecíficas)
              p Dos individuos de distintas especies compiten por ocupar un mismo espacio dentro de su hábitat.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-6
              h5 Competencia por espacio (intraespecíficas)
              p Miembros de una misma especie disputan el uso de un área determinada dentro de su hábitat.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Funciones ecológicas y contribuciones no materiales
    
    p.mb-5 La flora silvestre y los productos forestales no maderables (PFNM) desempeñan un papel fundamental en la conservación y el mantenimiento de las funciones ecológicas, así como en las contribuciones no materiales. Entre estas se destacan:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Regulación climática" :icono="require('@/assets/componentes/1.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Regulación climática
            p Contribuye al control de las condiciones climáticas locales y globales mediante la captura de carbono, la regulación de la temperatura y la prevención de fenómenos de variabilidad climática.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Control de erosión" :icono="require('@/assets/componentes/2.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Control de erosión
            p La cobertura vegetal permite estabilizar los suelos, reducir la erosión hídrica y disminuir la incidencia de fenómenos tanto naturales como de origen humano.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Disponibilidad de hábitat" :icono="require('@/assets/componentes/3.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Disponibilidad de hábitat
            p Favorece la conservación de nichos ecológicos, garantiza la oferta de alimento para diversas especies y fortalece la conectividad ecológica entre ecosistemas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Formación de suelos" :icono="require('@/assets/componentes/4.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Formación de suelos
            p Incluye el aporte de materia orgánica, el incremento de la actividad biológica y la mejora en la fertilidad del suelo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Calidad y regulación hídrica" :icono="require('@/assets/componentes/5.svg')")
        .row.align-items-center.p-4.justify-content-around
          .col-lg-6.mb-4.mb-md-0
            h4 Calidad y regulación hídrica
            p Participa en la regulación del ciclo hidrológico, el control de los flujos de agua y la preservación de las rondas hídricas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')
    
    p.mb-5 Las contribuciones no materiales de los ecosistemas asociados a los recursos forestales no maderables: 

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-9
         AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Identidad cultural y arraigo")
            p.ms-5 Permiten mantener y aplicar prácticas asociadas a las riquezas culturales de distintas comunidades, fortaleciendo su identidad y sentido de pertenencia.
          div(titulo="Cohesión social")
            p.ms-5 Fomentan el trabajo colectivo, la preservación de saberes tradicionales y la creación de oportunidades económicas basadas en el uso sostenible de los recursos.
          div(titulo="Valores espirituales")
            p.ms-5 Favorecen espacios de conexión espiritual, fortalecen la identidad y la memoria cultural, y promueven el respeto por la naturaleza.
          div(titulo="Significado simbólico")
            p.ms-5 Permiten conservar memorias colectivas a través de productos elaborados con valor cultural, histórico o espiritual.
          div(titulo="Inspiración")
            p.ms-5 Sirven como fuente de inspiración para el diseño de patrones tradicionales y el desarrollo de productos innovadores vinculados a la cultura local.
    
    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4	Principios de conservación de biodiversidad
    
    p.mb-5 Según lo establecido por la FAO (2021), los principios de conservación de la biodiversidad comprenden el uso sostenible y el acceso equitativo de los beneficios, con enfoques participativos, de precaución y adaptación: 
    
    .bg-full-width.bg-fondo-2
      .px-4.p-md-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/17.png", alt="alt")
              .crd_hover_txt--body.bg-color-5
                h4.mb-3.text-center.text-white Enfoque ecosistémico y de paisaje
                p.mb-0 La gestión debe integrar diversos sectores y niveles territoriales, considerando la complejidad ecológica y los saberes tradicionales.
          .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/18.png", alt="alt")
              .crd_hover_txt--body.bg-color-5
                h4.mb-3.text-center.text-white Precaución y prevención
                p.mb-0 Se deben implementar medidas estratégicas preventivas frente a posibles amenazas a la biodiversidad.
          .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/19.png", alt="alt")
              .crd_hover_txt--body.bg-color-5
                h4.mb-3.text-center.text-white Enfoque participativo e inclusión de saberes
                p.mb-0 Es fundamental incluir a comunidades indígenas y locales, cuyas experiencias y conocimientos son clave para lograr soluciones equitativas y eficaces.
          .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/20.png", alt="alt")
              .crd_hover_txt--body.bg-color-5
                h4.mb-3.text-center.text-white Gestión adaptativa y aprendizaje continuo
                p.mb-0 Se promueve la investigación, el monitoreo y el ajuste constante de estrategias, siguiendo lineamientos de organismos como la FAO.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
