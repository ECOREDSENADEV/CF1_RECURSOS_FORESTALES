<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-3
      .px-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") El aprovechamiento de los recursos forestales no maderables representa una alternativa clave para impulsar economías sostenibles en comunidades rurales y biodiversas como las que existen en Colombia. Este componente formativo está orientado a proporcionar una comprensión integral de la flora silvestre y los productos que se pueden obtener del bosque sin recurrir a la tala de árboles, promoviendo prácticas que respetan la biodiversidad y fortalecen el vínculo entre cultura y naturaleza.
        
            .bg-color-1(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    p.mb-0(data-aos="fade-up") A través del estudio de este componente, los aprendices conocerán las principales características ecológicas, sociales y económicas de estos recursos, así como los principios de conservación, clasificación, métodos de inventario florístico y taxonomía. Estos conocimientos son fundamentales para valorar los ecosistemas de forma responsable, identificar oportunidades productivas sostenibles y aplicar criterios técnicos para el uso racional de la biodiversidad, respetando el saber ancestral y las normativas ambientales vigentes.
        
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mg-lg-0
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este proceso formativo permite desarrollar habilidades que fomentan la participación activa en proyectos de biocomercio, conservación del entorno natural y construcción de cadenas productivas que agreguen valor a productos tradicionales. En consecuencia, se abren oportunidades para la innovación, el emprendimiento y el fortalecimiento de la identidad cultural en armonía con la protección de los ecosistemas.

</template>

<script>
export default {
  name: 'Introduccion',
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
