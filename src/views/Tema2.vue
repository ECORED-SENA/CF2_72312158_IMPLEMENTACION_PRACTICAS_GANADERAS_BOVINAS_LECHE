<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-left") Procedimientos, procesos, registros
    p.mb-4 Un procedimiento no es más que la explicación en detalle de cómo se lleva a cabo un proceso. Este además debe ser documentado, ya sea en papel o forma digital y conocerse por todo el personal de la unidad productiva. Por otra parte, un proceso es la lista de tareas o actividades que se llevan secuencialmente una tras otra, siempre que existe un proceso en una empresa existe un procedimiento, así mismo siempre que existe un procedimiento en una empresa es porque existe un proceso detrás. Luego estos dos conceptos están relacionados íntimamente y es a partir de allí donde se generan los registros con el fin de que estas actividades sean documentadas de manera apropiada.
    .row.justify-content-center
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Texto que describa la imagen')
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos
    p.mb-5 En la implementación de las BPG en bovinos de leche los principales procedimientos pueden afectar directamente la inocuidad y calidad de la leche. Algunos de ellos se mencionan a continuación:
    .row.justify-content-center
      .col-lg-8
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 11')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='11' aria-label='Slide 12')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='12' aria-label='Slide 13')
          .carousel-inner
            .carousel-item.active
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img05.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Rutina de ordeño]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img06.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Plan sanitario]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img07.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Programa de control y prevención de mastitis]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Manejo leche de retiro]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img09.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Manejo de enfermedades endémicas y de control oficial]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Procedimientos de limpieza  y desinfección del tanque y equipo de ordeño]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Procedimiento para la compra de animales]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Procedimiento de limpieza instalaciones cuarto del tanque y sitio de ordeño]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Limpieza y desinfección de utensilios y elementos usados en el ordeño]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Manejo de animales enfermos]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img15.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-3
                    p.mb-0.ms-4 #[b Registro de entrada de personas y vehículos]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img16.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Manejo de cuarentena]
            .carousel-item
              .row
                .col-12.bg15
                  .p-5
                    figure
                      img(src='@/assets/curso/tema2/img17.png', alt='Texto que describa la imagen')
                .col-12.bg11.tema2-carousel
                  .p-4
                    p.mb-0.ms-4 #[b Procedimiento para  el  lavado  de  los  recipientes  de  la leche de retiro]
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Características y simbología
    p.mb-5 Cada procedimiento tiene sus propias tipologías de acuerdo con el proceso que se realice, es así como para la implementación de las buenas prácticas ganaderas en bovinos de leche se describen ciertas características por cada proceso, tal y como se muestra a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BHwq211HfWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
    p.mb-5 En cuanto a los registros se ha afirmado que deben llevarse procedimientos, procesos e implementación del plan de BPG. Por ello, a continuación, se podrá acceder a algunos formatos de marcas registradas, se debe recordar que estos solo serán de apoyo para que se pueda construir los propios:
    .row.align-items-center.mb-5
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Aplicación de medicamentos veterinarios
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal1")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img19.jpg', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Control  de plagas y roedores
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal2")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img21.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Manejo de potreros
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal3")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img20.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro ingreso de personas y vehículos
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal4")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img22.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro de temperatura del equipo y tanque de ordeño
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal5 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal5")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img23.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Control programa de limpieza y desinfección
              .col-auto
               a.boton.color-acento-contenido.indicador__container(@click="modal6 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal6")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img24.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro de las pruebas de mastitis (CMT)
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal7 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal7")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img25.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Inventario de alimentos
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal8 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal8")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img26.jpg', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Capacitaciones del personal
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal9 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal9")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img27.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Ingreso y  salida de animales
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal10 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal10")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img28.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro individual de cada animal
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal11 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal11")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img29.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Limpieza y desinfección tanque de almacenamiento y equipo de ordeño
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal12 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal12")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img30.png', style="width: 900px").m-auto
    p.mb-5.text-center #[b Ahora bien, se puede ver en el siguiente recurso los documentos externos que son utilizados en el plan de implementación de las BPG:]
    .row.align-items-center
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Certificado uso del suelo
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal13 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal13")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img31.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Certificado hato libre de tuberculosis
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal14 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal14")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img35.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Guía de movilización interna
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal15 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal15")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img32.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Constancia registro de predio ante el ICA
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal16 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal16")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img37.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro sanitario de predio
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal17 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal17")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img33.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg12
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Registro único de vacunación - RUV aftosa y brucelosis
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal18 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal18")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img36.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Certificado hato libre de brucelosis
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal19 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal19")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img34.png', style="width: 900px").m-auto
      .col-lg-6.mb-2
        .bg13
          .p-4
            .row.align-items-center
              .col
                p.mb-0 Constancia expedida por el médico veterinario que le preste asistencia técnica a su finca
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal20 = true")                 
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")   
        ModalA(:abrir-modal.sync="modal20")
          .contenido-modal
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img38.png', style="width: 900px").m-auto
    
         
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
    modal20: false,
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
