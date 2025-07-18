<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inventario florístico
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los inventarios florísticos deben contar con un alto grado de confiabilidad estadística, ya que proporcionan datos fundamentales para la conservación y gestión de los ecosistemas. Al llevar a cabo los muestreos y el conteo de las diferentes especies presentes en el bosque, es necesario considerar cuidadosamente las variables que se van a cuantificar, especialmente en áreas donde se desarrollan Productos Forestales No Maderables (PFNM). Las métricas utilizadas dependerán del propósito del inventario, como el aprovechamiento sostenible, la conservación o la comercialización de los recursos.
    
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0 Este tipo de inventario permite identificar las especies presentes en un área específica o región geográfica. Cuando se trata de grandes extensiones, generalmente se emplean parcelas como método de muestreo. El número de parcelas a establecer se define según criterios técnicos que aseguran una representación adecuada de la diversidad vegetal del lugar.
    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Cuantificación de recursos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.py-4.px-5.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Los inventarios florísticos, mediante técnicas de muestreo, proporcionan datos precisos que permiten cuantificar los recursos forestales no maderables presentes en una región o zona boscosa. Estos datos también hacen posible evaluar el nivel de aprovechamiento que han tenido los PFNM y prever si ciertos productos podrían escasear o reducir su disponibilidad debido a una extracción descontrolada.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.tarjeta.py-4.px-5.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La cuantificación de los recursos florísticos depende directamente de la calidad y el método con que se recopilan los datos, así como de la relación con las categorías de interés definidas en el inventario. Este proceso consiste en traducir elementos cualitativos en cantidades numéricas para facilitar su análisis, representación e interpretación.
    
    .bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Por ejemplo, un trabajador forestal puede determinar la cantidad de productos no maderables disponibles en un bosque siempre que los datos recolectados estén expresados numéricamente, lo cual permite tomar decisiones informadas sobre su uso, conservación o posible comercialización.
    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Variables 
    
    p.mb-5 Cuando se requiere analizar las relaciones entre las plantas y los grupos humanos locales, se recurre a la etnobotánica. Esta disciplina permite identificar los niveles de interacción entre las comunidades y la vegetación, así como la influencia de las plantas en el desarrollo cultural, social y económico de dichos grupos. A continuación, se presentan algunas variables que respaldan el estudio cuantitativo de los recursos florísticos no maderables:

    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5.pb-md-3
        .row.justify-content-around.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usos culturales de las plantas
                p.text-center Estudio de plantas utilizadas para construir (como canoas e infraestructura), así como en contextos mágicos, chamánicos y medicinales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usos sociales de las plantas
                p.text-center Investigación sobre plantas empleadas para curar, construir, atraer la suerte, obtener colorantes y elaborar artesanías o elementos de la cultura material.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistemas de clasificación de plantas
                p.text-center Análisis de categorías locales como: palmas, maderas, hojas pequeñas, grandes, frías o calientes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Origen
                p.text-center Estudio del origen según clasificaciones propias: ejemplares jóvenes, maduros, de rastrojo, de patio, bejucos, arbustos, matas o matorrales. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Énfasis en las medicinales
                p.text-center Reconstrucción de procesos de uso y siembra de plantas medicinales, como su ubicación (monte medio, zonas bajas), funciones y formas de aplicación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ciclo de vida de la planta
                p.text-center Investigación sobre el ciclo de vida, abundancia, necesidades de sombra o luz y parte de la planta que se utiliza.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Las plantas y sus secretos
                p.text-center Exploración de lo que se usa de la planta, su uso común o restringido dentro de la comunidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Técnicas de siembra y crecimiento
                p.text-center Identificación de plantas espontáneas, sembradas o cultivadas, y técnicas empleadas para su propagación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Volumen de producción
                p.text-center Evaluación de la cantidad óptima de producción para cada especie o uso.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Las plantas y la manera de producirlas
                p.text-center Análisis de quién produce la planta, en qué lugar, en qué cantidad, en qué momento y bajo qué condiciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Formas de consumo
                p.text-center Estudio de las maneras en que se consumen: secas, molidas, en emplasto, entre otras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aplicaciones industriales
                p.text-center Investigación sobre su uso en la fabricación de jarabes, pomadas, aceites esenciales, productos aromáticos, artesanías e incluso infraestructura.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema4/5.png', alt='')

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Métodos para la evaluación de recursos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Además de los enfoques cuantitativos rigurosos, existen otros métodos para la evaluación de los recursos asociados a los Productos Forestales No Maderables (PFNM), que permiten una valoración más amplia e integral. Estos métodos incluyen componentes biométricos y se adaptan a los objetivos del inventario según el contexto sociocultural, ecológico y económico. Entre los principales métodos se encuentran:
    
        .bg-color-6.tarjeta.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/19.svg", style="max-width: 190px").mx-auto
            .col-lg
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 El inventario de la biodiversidad.
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Las técnicas de ciencias sociales.
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Las perspectivas culturales.
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 La etnobotánica.
                li.mb-1.d-flex
                  i.fa.fa-arrow-circle-right
                  p.mb-0 Métodos económicos.
        p En el caso de los inventarios forestales y vegetales, el plan de muestreo se aplica en predios o fincas consideradas como unidades productivas dentro de una zona geográfica específica. La elección del método adecuado para diseñar un inventario con información estadísticamente confiable debe considerar los objetivos del estudio, el tipo de recurso a evaluar y el nivel de detalle requerido. Estos factores determinan la profundidad, el enfoque y la utilidad de los resultados obtenidos.
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 2. 
      span Niveles de inventario 

    figure
      img.d-none.d-lg-flex(src="@/assets/curso/tema4/20.svg", data-aos="zoom-in", alt="La imagen representa los niveles de inventario que puede aplicarse a los recursos forestales no maderables, estos se clasifican en inventario de alto, medio o bajo nivel.")
      img.d-flex.d-lg-none(src="@/assets/curso/tema4/20-1.svg", data-aos="zoom-in", alt="La imagen representa los niveles de inventario que puede aplicarse a los recursos forestales no maderables, estos se clasifican en inventario de alto, medio o bajo nivel.")
    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/21.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 De igual forma, es importante considerar la aplicación de la biometría en el diseño de un inventario, ya que funciona como un sistema de apoyo integrado que facilita la toma de decisiones. Permite estructurar el proceso como un método paso a paso para desarrollar un inventario biométrico, atendiendo tanto a las necesidades de planificación para el análisis y presentación de los datos como a ciertas demandas relevantes de investigación.
    

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Error de muestreo
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En los inventarios forestales, la muestra corresponde a una porción del bosque seleccionada de manera aleatoria. Esta muestra debe representar adecuadamente la variabilidad presente en la población total.
    
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/23.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0 Una vez definido el tamaño de las parcelas, se establece cuántas serán medidas en el terreno. Según lo indicado en el Decreto 1791 de 1996, compilado en el Decreto Único Reglamentario 1076 de 2015, el inventario estadístico debe aplicarse a todas las especies con un diámetro a la altura del pecho (DAP) igual o superior a 10 centímetros. Además, se debe garantizar una intensidad de muestreo tal que el error no supere el 15%, con un nivel de confianza del 95% (UNAD, 2022, p. 4).




</template>

<script>
export default {
  name: 'Tema4',
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
