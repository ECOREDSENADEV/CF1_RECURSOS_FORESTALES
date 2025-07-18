<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Flora silvestre

    p.mb-5 La flora silvestre según lo descrito en el Decreto 690 de 2021, se define como:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-4.mb-3.tarjeta(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0 Conjunto de especies e individuos vegetales del territorio nacional que no se han plantado o mejorado por el hombre, presentes en ecosistemas naturales diferentes al bosque natural. Incluye la flora acuática.
        p(data-aos="fade-left") El Ministerio de Ambiente y Desarrollo Sostenible (MADS), a través del Decreto 690 de 2021, establece que los productos forestales no maderables deben ser reglamentados con el fin de facilitar su adquisición y garantizar el derecho al manejo sostenible de los ecosistemas naturales. Esta reglamentación incluye la flora silvestre, considerada un componente ambiental clave de la biodiversidad colombiana, compuesta en su mayoría por especies autóctonas.
        h5 Productos forestal no maderables del bosque: bienes de origen biológico distintos de la madera y la fauna, que se obtienen de las variadas formas de vida de la flora silvestre, incluidos los hongos, y que hacen parte de los ecosistemas naturales.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Clasificación y características generales
    
    .bg-full-width-2.bg-fondo-3
      .px-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            p.mb-5 La flora silvestre comprende todo producto que no sea madera, que se produce de forma natural en los bosques y puede ser recolectado para uso humano sin necesidad de talar árboles. Su clasificación varía según los fines o propósitos de aprovechamiento. A continuación, se presenta su clasificación de acuerdo con el uso que se le da:
            .bg-color-7.p-4.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.order-2
                  img(src="@/assets/curso/tema2/3.png", style="max-width: 286px").mx-auto
                .col-lg.order-1.mb-3.mb-lg-0
                  ul.lista-ul--color
                    li.mb-3.d-flex.bg-color-white.tarjeta.p-3
                      i.fa.fa-arrow-circle-right
                      p.mb-0 Exudados: resinas, aceites, oleorresinas
                    li.mb-3.d-flex.bg-color-white.tarjeta.p-3
                      i.fa.fa-arrow-circle-right
                      p.mb-0 Estructuras vegetativas: tallos, hojas, raíces, yemas apicales 
                    li.mb-3.d-flex.bg-color-white.tarjeta.p-3
                      i.fa.fa-arrow-circle-right
                      p.mb-0 Partes reproductivas: nueces, frutos, aceites de semilla, semillas
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/9.png")
        h3.titulo-con-imagen__texto.text-white Clasificación según interés científico
    
    p.mb-4 A continuación, se presenta la clasificación de la flora silvestre según el interés científico:

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-6
              h5 Especies endémicas
              p Son especies que solo existen en una región geográfica determinada, por lo que tienen alto valor para estudios científicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-6
              h5 Especies amenazadas o en peligro de extinción
              p Estas especies requieren monitoreo y protección, y su estudio permite comprender las causas de su vulnerabilidad y las estrategias para su conservación o recuperación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-6
              h5 Especies indicadoras
              p Este tipo de especies permiten determinar el estado de un ecosistema; su presencia o ausencia es clave para estudios ecológicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-6
              h5 Especies útiles en bioprospección
              p Se estudian por su utilidad para generar productos de tipo farmacológico, cosmético, alimenticio o industrial, dada su riqueza en compuestos bioactivos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-6
              h5 Especies clave
              p Tienen un papel ecológico importante en las funciones del ecosistema, en este grupo se pueden encontrar especies sombrilla o facilitadoras.
          



</template>

<script>
export default {
  name: 'Tema2',
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
