<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión documental
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 De acuerdo con Función Pública la gestión documental es el conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final con el objeto de facilitar su utilización y conservación. Teniendo en cuenta estas actividades, a continuación, se publican los Instrumentos archivísticos implementados en el Departamento Administrativo de Función Pública, en cumplimiento de la Ley 594 de 2000 "Ley General de Archivos" y demás disposiciones emitidas por el Archivo General de la Nación – AGN. (Función Pública, 2022).
    p.mb-5 Dentro de los procedimientos de gestión documental se disponen los principios y estrategias para el correcto tratamiento de la información y documentos, con el propósito de asegurar el fácil acceso y la conservación. Este proceso tiene como fin llevar de forma organizada la información de la empresa y por esto, se deben seguir secuencialmente los siguientes pasos:
    .row.row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="40%" y="7%" numero="1")
            .h5.mb-2 Planeación
            p En este punto se desarrollan actividades de tipo administrativo para hacer revisión y valoración de la información considerando el contexto legal, técnico y funcional de la empresa. Es así como en esta etapa se revisa, analiza e interpreta los requerimientos y objetivos, de los cuales surgirán las estrategias de gestión documental a futuro. Dicho de otra forma, la planeación es la implementación de los protocolos, normas y objetivos de gestión.
          .tarjeta.color-acento-botones.p-3(x="75%" y="16%" numero="2")
            .h5.mb-2 Producción
            p Aquí se realiza la creación, ingreso, clasificación y evaluación de los documentos de acuerdo a su funcionalidad y la relevancia en los procesos en los que interviene, de la misma manera se hace revisión con todo lo relacionado a la creación, estructura, soportes y medios de tratamiento de los documentos y la ejecución de tecnologías y de estrategias, con el fin de gestionar e intervenir en la aplicación o ahorro de recursos. 
          .tarjeta.color-acento-botones.p-3(x="93%" y="44%" numero="3")
            .h5.mb-2 Gestión y tramite
            p Aquí se da importancia al análisis del documento de manera integral, es decir, su incidencia en los procesos de la empresa, así como las funcionabilidades que tiene en el exterior. Se da revisión a los trámites en los que incide el documento, su nivel de relevancia y la calidad y facilidad del acceso que este debe tener. Así pues, se identifica y controla el propósito del documento y su intervención en los distintos procesos administrativos, legales, de consulta y gestión empresarial.
          .tarjeta.color-acento-botones.p-3(x="85.3%" y="75%" numero="4")
            .h5.mb-2 Organización
            p Son todas las operaciones técnicas de gestión documental, a las que por medio de una revisión a fondo del documento se establece su categoría, serie documental, valorización, tiempo de almacenamiento, departamento al que pertenece y el tipo de archivo al que será designado. Lo anterior a fin de establecer ordenación y almacenamiento documental, con base en su ciclo de vida. 
          .tarjeta.color-acento-botones.p-3(x="57%" y="93%" numero="5")
            .h5.mb-2 Transferencia
            p Políticas de transferencia de los documentos en su fase de archivo en donde se tienen en cuenta los formatos, migración, estructura, conservación y conversión, ceñidas a las tablas de valoración documental (TVD).
          .tarjeta.color-acento-botones.p-3(x="25%" y="84%" numero="6")
            .h5.mb-2 Disposición de documentos
            p Se considera como todos los procesos de selección y valoración del documento, en pro de su conservación o eliminación; teniendo como base las tablas de retención y valoración documental. Esto permite el seguimiento de todos los ciclos de vida de cada documento, a fin de darle su respectivo tratamiento, y de ser el caso, de establecer las pautas para llevar a cabo su eliminación y destrucción.
          .tarjeta.color-acento-botones.p-3(x="7%" y="56.6%" numero="7")
            .h5.mb-2 Preservación a largo plazo
            p Son todos los procedimientos, tácticas y requerimientos que se deben llevar a cabo durante todo el procedimiento de gestión documental y archivo, con el propósito de garantizar su preservación a largo plazo. De este modo se implementan los medios y formas para la conservación de la información.
          .tarjeta.color-acento-botones.p-3(x="15.3%" y="27%" numero="8")
            .h5.mb-2 Valoración
            p Es el procedimiento continuo en el que se determinan sus valores primarios y secundarios, los cuales ayudan a establecer su relevancia al interior de la empresa y de este modo su conservación y disposición final, temporal o definitiva.        
          
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
