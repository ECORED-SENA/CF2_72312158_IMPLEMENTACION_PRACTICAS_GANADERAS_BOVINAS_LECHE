<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de personal 
    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-0 La gestión de personal hace referencia a la administración de las relaciones que se establecen entre los trabajadores y la empresa y comprende un conjunto de tareas legales, pago de nóminas, vacaciones, contratación, la afiliación de los trabajadores a un régimen de la seguridad social, entre otros. En otras palabras, comprende desde el proceso de contratación hasta el cese de cada empleado. Este tipo de gestión la desarrolla el departamento de recursos humanos y es necesaria para el funcionamiento de la empresa ya que permite hacer más ordenados y sencillos los procesos que tienen que ver con la relación entre la empresa y el empleado, generando mayor satisfacción de los empleados y por ende mejorando la productividad y competitividad de la organización.
      .col-lg-5
        figure.mb-4.mb-lg-0
         img(src='@/assets/curso/tema5/img01.png', style="width: 450px").m-auto(data-aos="fade-right")
    p Las herramientas para la gestión de personal manejan todos los procesos básicos interrelacionados con la función de Recursos Humanos y se pueden utilizar soluciones tecnológicas como un software de RH que a través de la automatización y mejoramiento de los procesos ha simplificado las tareas que se realizan en la gestión del personal, dando como resultado empleados más proactivos, motivados y productivos.
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
