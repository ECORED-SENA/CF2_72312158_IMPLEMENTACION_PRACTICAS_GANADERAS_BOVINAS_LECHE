<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-left") Plan de implementación
    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-0 #[b Cuando se habla del plan de implementación se hace referencia a la descripción de los pasos propuestos que debe seguir un equipo de una organización para alcanzar sus objetivos, a través de una estrategia planificada en una línea de tiempo y actividades. Para tener éxito en la ejecución de este plan, por tanto, se deben tener en cuenta los aspectos que se presentan a continuación (ver figura 1):]
      .col-lg-5.mb-4.mb-lg-0
        figure.mt-0.mt-lg-4
         img(src='@/assets/curso/tema1/img01.png', style="width: 500px").m-auto(data-aos="fade-right")
    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1]. Aspectos para lograr una implementación exitosa de un plan
    .row.justify-content-center(data-aos="fade-right").mb-5
      .col-lg-12
        figure
          img(data-aos="fade-right")(src='@/assets/curso/tema1/img02.svg').m-auto
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center.justify-content-center
            .col-auto
              img(src='@/assets/curso/tema1/img03.svg', style="width: 107px")
            .col-lg-10
              p.mb-o Siendo la producción de leche un eslabón de importancia para la economía del país aportando cerca del 9,5% del PIB del sector agropecuario, lo cual representa el 25% del PIB pecuario, que se traduce en 365.000 productores en el territorio nacional y una producción manufacturera de lácteos de 3,8%. (ICA, 2021).
    .row.justify-content-center
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/B0MegPWJuh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Objetivos
    p.mb-5 Para diseñar un plan de implementación en primera instancia se debe identificar qué es lo que se busca lograr principalmente; es decir, cuáles son las metas claras que se quieren alcanzar, cuál es el propósito del programa y cómo se quiere conseguir, además de que se ponga en práctica en la unidad productiva, cada una de las anteriores cuestiones deben estar visualizadas en cada uno de los procesos y en la misión y visión, en un tiempo definido.
    .row.mb-5.align-items-center(data-aos="fade-right")
      .col-lg-7.mb-4.mb-lg-0
        .dual-txt-deco
          p.p-0(style="position: relative; z-index: 1;") De esta forma teniendo claridad en lo planeado, será más fácil el proceso para el personal que interviene, debido a que se traza una dirección en la que todos contribuyen e interactúan por un mismo propósito. Estos objetivos deben comunicarse a toda la unidad productiva, siendo este punto clave en la implementación del plan, por lo cual deben ser claros, precisos y bien definidos para que todo el personal pueda entenderlos fácilmente y contribuyan al logro de los mismos.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img02.png', style="width: 315px").m-auto
    p Por otra parte, la forma correcta de redactar los objetivos es comenzando por un verbo en infinitivo, permitiendo ser evaluado con el fin de saber si se alcanza o no lo propuesto e incluyendo una condición; como, por ejemplo: 
      span.etiqueta #[strong Realizar el direccionamiento de los insumos agrícolas y de medicamentos veterinarios, teniendo en cuenta proceso de producción.]
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Cronograma
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Un cronograma es la planeación de las actividades para ejecución en una línea de tiempo; por ende, esta herramienta permite visualizar el pan de implementación en todas sus dimensiones y el tiempo que este requiere para llevarse a cabo, siendo más claros un cronograma permite hacerse un mejor panorama de cómo encajan todos los puntos del plan, como interactúan las fases y cuál es el proceso para lograrlo en un determinado tiempo, muchas veces vinculando también el equipo de personas que participan en los mismos.
    .row.justify-content-center
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center.justify-content-center.mb-5
            .col-lg-12.p-3
              p.mb-0 Para crear un cronograma se debe tener en cuenta el tiempo total definido para la implementación, los objetivos o metas, las actividades que se incluyen por más minúsculas que parezcan, como:
          .row.align-items-center.mb-5
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Documentación
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Recopilación de información
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Inspección de la unidad productiva
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Diagnóstico de la unidad productiva
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Elaboración del plan
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Reuniones
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Divulgación
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Entre otras
            .col-lg-5 
              img(src='@/assets/curso/tema1/img04.png')
          .row.align-items-center.justify-content-center
            .col-lg-8.bg3.m-2
                p.mb-0.p-4 Entre más específico mejor quedará el cronograma y por tanto, las actividades serán mejor planeadas y ejecutadas en los tiempos requeridos.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Lista de chequeo
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img05.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 Las listas de chequeo son una herramienta diseñada para evaluar un listado de requisitos de forma organizada y sistemática, corroborando una lista de actividades y su cumplimiento, para que sea correctamente aplicada debe tenerse en cuenta cada uno de los procesos detallados los cuales se van a comprobar y el concepto o criterio del profesional quien la aplica.
    p.mb-5 En los planes de implementación de las BPG, las listas son una herramienta muy utilizada para realizar el seguimiento de cada uno de los componentes, así como la implementación de procedimientos y procesos dentro de la unidad productiva dirigidos al cumplimiento en la ejecución de las BPG. De igual forma esta herramienta es utilizada con el fin de diagnosticar, evaluar y monitorear el predio, la producción y la implementación de las BPG en bovinos dedicados a la producción de leche.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center.justify-content-center
            .col-auto
              img(src='@/assets/curso/tema1/img04.svg', style="width: 107px")
            .col-lg-10
              p.mb-o Finalmente, los datos obtenidos pueden ser utilizados con el fin de hacer reportes estadísticos a través de gráficas, en forma de diagramas para facilitar la interpretación de los mismos y observar la evolución de las actividades, procedimientos y procesos que hacen parte de la estrategia planteada para lograr los objetivos del plan.
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Parámetros
    p.mb-0 #[span.etiqueta #[b Para implementar las BPG en bovinos de leche se debe tener en cuenta el decreto ICA 616 y la resolución 67449 ]] los cuales pertenecen a la normatividad establecida por el estado colombiano para establecer los puntos a cumplir y así lograr satisfacer los requerimientos solicitados en la ejecución de las buenas prácticas ganaderas. 
    p.mb-5 Es así como los parámetros necesarios dentro del plan son exactamente los componentes solicitados por esta normatividad. Se puede ver entonces los criterios que tiene en cuenta el ICA, para la certificación en buenas prácticas ganaderas, agrupados en los siguientes aspectos:
    .tarjeta.tarjeta--amarilla2.p-4
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Sanidad animal y bioseguridad
            p Los predios y el inventario ganadero deben estar registrados ante el ICA y estar autorizados por el plan de ordenamiento territorial (POT), además las reses deben cumplir con un plan sanitario que incluya la prevención, diagnóstico y manejo de enfermedades de control oficial, endémicas y las demás que pudiere requerir la autoridad sanitaria, también debe incluir prácticas de manejo, planes de vacunación y desparasitación, tratamientos comúnmente realizados en la producción. 
            p Se debe efectuar un programa de prevención y control de la mastitis a todas las vacas en producción, con frecuencia por los menos una vez al mes, a través del test de california y tomar las medidas necesarias para el tratamiento y control del hato productivo. Por otra parte, las instalaciones deben contar como mínimo con corrales, bretes, salas de ordeño, embarcadero, entre otros, que permitan llevar a cabo las labores rutinarias de forma segura para el personal y garantizando el bienestar de los animales, además deben estar construidas con materiales que permitan la fácil limpieza y desinfección.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img06.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Cuarto de tanque de frio 
            p Este es uno de los puntos neurálgicos en cuanto al momento de garantizar la inocuidad de la leche, siendo imprescindible la conservación y protección del producto en el momento del acopio, puesto que aquí es en donde aumentan los riesgos de contaminación debido a la mezcla de leches de diferentes fuentes de origen.
            p Los predios deben disponer de un espacio especial para dedicarse solo al fin de acopio y conservación de leche a través del enfriamiento, con paredes y pisos lisas, sin poros construidas con materiales de fácil limpieza y desinfección, contar con desagües de rejilla, con ventanas protegidas que impidan la entrada de animales extraños, roedores, insectos y aves. Además, los equipos, implementos y utensilios usados en el ordeño, manipulación y almacenamiento de la leche deben ser de material apropiado que aseguren la inocuidad del producto y por ende disminuyendo el riesgo de cualquier tipo de contaminación. 
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img07.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Sistema y sitio de ordeño
            p El sitio en donde se lleve a cabo el ordeño debe proporcionar comodidad y tranquilidad a las vacas, además de seguridad al ordeñador, razón por la cual debe estar protegido. Se deben cumplir las normas físicas básicas de infraestructura, ya sea que el ordeño se lleve a cabo en un lugar fijo o sea móvil en los potreros.
            p #[b Terreno de fácil drenaje:] Evitando que se produzcan encharcamientos. <br> #[b Evitando que se produzcan encharcamientos:] Para impedir el ingreso de perros, gatos y otros animales extraños.<br> #[b Sala fija:]  Los pisos y las paredes deben ser lisas y construidas en materiales que permitan el fácil lavado, limpieza y desinfección.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img08.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Rutina de ordeño
            p La labor de ordeño debe ser rutinaria, sin complicaciones, sin interrupciones, lo más rápido y de forma completa posible. De primera mano se debe realizar limpieza de los cuartos con agua limpia, luego se hace un despunte o prueba de fondo oscuro con el fin de detectar posibles mastitis, por lo cual se utilizan los primeros chorros de leche de cada cuarto antes de iniciar con el ordeño.
            p El operador debe realizar el protocolo de lavado de manos y aplicar gel antibacterial, guantes de látex o nitrilo para evitar contaminación. Se realiza un pre sellado con una solución desinfectante, se secan con toallas absorbentes desechables y luego al concluir el ordeño se aplica a cada cuarto el sellante con desinfectante. 
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img09.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Suministro y calidad de agua
            p Una vez al año como mínimo debe efectuarse un análisis químico, físico y microbiológico del agua del predio, en especial de la que es destinada para el consumo animal, además se debe tener en cuenta la ubicación de las fuentes de agua en el predio y los accesos a los potreros.
            p Las distancias y las condiciones climáticas también son de importancia ya que de acuerdo a estas condiciones deben diseñarse y ubicar reservorios para el hato. En cada etapa los animales requieren de agua limpia y fresca, sobre todo en las fases productivas, razón por la cual debe asegurarse su fácil y continuo acceso.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img10.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Control de medicamentos veterinarios e insumos agropecuarios
            p Utilizar de forma correcta los medicamentos veterinarios, las vacunas, suplementos, alimentos balanceados, sales mineralizadas, insumos agropecuarios y plaguicidas es de gran importancia en la implementación de las BPG, estas de igual forma deben tener el registro ICA. 
            p Adicionalmente los medicamentos veterinarios deben ir organizados y direccionados de acuerdo a su principio y acción terapéutica, separados de otros insumos como fertilizantes, plaguicidas o alimentos. Si es el caso de que se administren medicamentos de control especial, como las hormonas, analgésicos, sedantes, anestésicos, entre otros, deben ser formuladas y expedidas por un médico veterinario autorizado.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img15.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Registro documentación
            p El registro de la información que se almacena en la producción asegura que se pueda tener un historial con todo lo acontecido para que pueda ser tenido en cuenta en la toma de decisiones y el mejoramiento en la productividad, sanidad e inocuidad de la producción. Todos los planes y procedimientos que hacen parte del plan de implementación de BPG deben ser registrados y archivados de manera adecuada, junto con cada uno de los formatos que posibilitan esta actividad, el registro puede llevarse sistematizado o de manera escrita pero siempre deben estar de forma física.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img11.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Manejo integrado de residuos y plagas
            p La disposición temporal y final de basuras, realizando la clasificación y segregación siguiendo la normatividad ambiental vigente, para esto se debe realizar un protocolo de recolección, clasificación, disposición, almacenamiento y rutas de residuos en la unidad productiva, asignado responsables y demás.
            p En cuanto al manejo de plagas se debe elaborar un programa escrito de control de plagas y roedores, el cual sirve como guía procedimental para los operarios de la unidad productiva, este debe incluir los registros de la aplicación de los productos y las herramientas utilizadas en esta labor. Por otra parte, el manejo adecuado del estiércol ya sea en compostaje, tanques o purines evita la proliferación de plagas e infestaciones en la producción.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img12.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Bienestar animal
            p Los principios básicos del tema de bienestar en las producciones pecuarias se basan en las cinco libertades propuestas para el mismo de las cuales se han derivado diferentes prácticas que buscan que los animales se encuentren en las mejores condiciones productivas respetando sus condiciones y comportamiento natural.
            p Estas libertades buscan que a los animales se les suministre adecuadamente el alimento y agua necesarios, suficientes y con calidad; que se les suministre un lugar acorde con sus requerimientos, con techo y  suficiente espacio, donde puedan estar tranquilos y a gusto, donde puedan desplazarse cómodamente; prevenir enfermedades y/o tratarlas oportunamente.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img13.png', style="width: 535px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-5
            h4 Personal
            p El componente humano hace parte fundamental en la producción animal y por tanto debe asegurarse de que este no sea susceptible a adquirir o transmitir enfermedades que puedan poner en riesgo el producto.
            p La indumentaria adecuada para el ordeño y demás labores en la producción debe ser portada y exigida en cada una de las labores. Pero además debe haber registro de las capacitaciones realizadas por la unidad pecuaria sobre temas como enfermedades de control oficial, sanidad animal, manejo, procesos productivos en la industria pecuaria, entre otros.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img12.png', style="width: 535px").m-auto

    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Metodología
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La implementación de las buenas prácticas ganaderas en la producción de leche, parte del interés que tenga el productor en tener una empresa sostenible, con un aumento de su productividad, amigable con el medio ambiente, que preserve la integridad física y emocional de sus trabajadores, una producción que brinde un trato digno a sus animales, que en la comunidad genere impacto positivamente y por supuesto, que la leche que es su producto final sea inocuo y de buena calidad y de esta manera tengan gran aceptación en el mercado, asegurando el proceso de comercialización y la rentabilidad de la empresa ganadera.
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center.justify-content-center
            .col-lg-12.p-3
              p.mb-5 #[b La metodología utilizada para la implementación de las buenas prácticas ganaderas en la producción de leche consiste en realizar un diagnóstico del predio teniendo en cuenta algunos aspectos importantes que van a permitir obtener una “fotografía” de las condiciones reales de la producción como, por ejemplo:]
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Mostrar el manejo que se les da a los animales.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Las condiciones en que los trabajadores desarrollan sus labores.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Los riesgos a los que están expuestos.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | La limpieza y orden que se tiene con los equipos.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Medicamentos, alimentos, insumos agrícolas. 
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Cuarto de tanque frío. 
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Sala de ordeño. 
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | El establo. 
            .col-lg-5 
              img(src='@/assets/curso/tema1/img17.png')
    p.mb-5 Además del desarrollo de las actividades rutinarias que se ejecutan en la finca como el ordeño, rotación de potreros, alimentación, crianza de terneras, entre otros. 
    p.mb-5 Luego de esto es necesario revisar la normatividad vigente de las BPG, establecida por el Instituto Colombiano Agropecuario - ICA y finalmente aplicar la lista de chequeo de “predios productores de leche con destino al consumo humano - Forma 3-852 V. 5” que se aplica con el fin de encontrar carencias ante la normatividad e iniciar un plan que permita completar los aspectos faltantes para poder solicitar una visita de un auditor del ICA. 
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bg11.p-3
          .row.justify-content-around.align-items-center
            .col-12.col-sm-2.col-lg-2
              img.imgt(src='@/assets/curso/tema1/img18.svg', style="width: 125px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3 Importante
                  p Una vez efectuada la solicitud de visita de auditoría, el ICA o a quien éste autorice, contará con quince (15) días para realizarla, con el fin de verificar el cumplimiento de los requisitos establecidos en la Resolución 067449 del 8 de mayo de 2020. Como resultado de la visita se diligenciará una lista de chequeo y se realizará informe de auditoría, en el cual constará el correspondiente concepto que podrá ser certificable o aplazado y formará parte integral del soporte para la expedición.
    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Estrategias de evaluación
    .row.bg14.align-items-center.justify.content-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-4
        p.mb-0 Después de realizar el diagnóstico se debe aplicar la lista de chequeo de “predios productores de leche con destino al consumo humano - Forma 3-852 V. 5”, se van a contabilizar los aspectos fundamentales (F), los mayores (My) y los menores (Mn) para determinar los porcentajes de incumplimiento y fijar un plan de trabajo que permita sobre todo, llevar los criterios fundamentales al 100%, los criterios mayores por encima de 80% y los criterios menores a un rango mejor que 60%, para garantizar efectivas buenas prácticas ganaderas en la producción de leche, lo que será suficiente para la expedición del certificado de buenas prácticas ganaderas BPG, en la producción de leche por parte del ICA y permitirá obtener beneficios en la empresa tanto en el nivel interno como externo, lo que le permitirá obtener una ventaja competitiva en temas de producto, mercado, medio ambiente, bienestar animal, disminución de riesgos laborales, entre otros (ver tabla 1). 
      .col-lg-5
        figure
         img(src='@/assets/curso/tema1/img19.png', style="width: 450px").m-auto(data-aos="fade-right")
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Totalización de criterios para certificación de BPG (Tomado de: Lista de chequeo de predios productores de leche con destino al consumo humano).
    .row(data-aos="fade-right")
      .col-12
        .p-3.p-lg-5
          .tabla-b
            table.mb-5(data-aos="fade-right")
              thead
                tr(style="background-color: #FFD63D")
                  th(style="background-color: #FFFFFF")
                  th.h4(style="border: 1px solid #454545") Total Criterios
                  th.h4(style="border: 1px solid #454545")  No Criterios NA
                  th.h4(style="border: 1px solid #454545")  No. Criterios a Cumplir 
                  th.h4(style="border: 1px solid #454545")  % Criterios a Cumplir 
                  th.h4(style="border: 1px solid #454545")  Criterios Cumplidos 
                  th.h4(style="border: 1px solid #454545")  % Criterios Cumplidos
              tbody    
                tr
                  th(style="background-color: #FFCDB7") Fundamentales (F)
                  td.h4.text-center(style="border: 1px solid #454545")  23
                  td(style="border: 1px solid #454545")  
                  td(style="border: 1px solid #454545") 
                  td.h4.text-center(style="border: 1px solid #454545")   100%
                  td(style="border: 1px solid #454545")  
                  td(style="border: 1px solid #454545") 
                tr 
                  th(style="background-color: #FFCDB7") Mayores (My)
                  td.h4.text-center(style="border: 1px solid #454545")   34
                  td(style="border: 1px solid #454545") 
                  td(style="border: 1px solid #454545") 
                  td.h4.text-center(style="border: 1px solid #454545")   80%
                  td(style="border: 1px solid #454545") 
                  td(style="border: 1px solid #454545") 
                tr 
                  th(style="background-color: #FFCDB7") Mayores (My)
                  td.h4.text-center(style="border: 1px solid #454545")   5
                  td(style="border: 1px solid #454545") 
                  td(style="border: 1px solid #454545") 
                  td.h4.text-center(style="border: 1px solid #454545")   60%
                  td(style="border: 1px solid #454545")  
                  td(style="border: 1px solid #454545") 
    p.mb-5 Después de haber realizado el diagnóstico, implementado la lista de chequeo y tomado las medidas y acciones correctivas, el productor deberá solicitar la visita de auditoría ante el ICA para que en un tiempo no mayor a 15 días posteriores a la solicitud se le realice la visita donde a través de un informe y una lista de chequeo, se verificará el cumplimiento de lo establecido en la Resolución 067449 del 8 de mayo de 2020. 
      span.etiqueta #[strong El resultado de esta visita dará el concepto de Certificable o Aplazado de acuerdo con lo siguiente:]
    .row.mb-5.h-100
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img20.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 APLAZADO
              p El concepto será aplazado, cuando el predio cumpla con menos del 100% de los criterios fundamentales, y/o menos del 80% de los criterios mayores, y/o menos del 60% de los criterios menores; las no conformidades encontradas se pueden corregir en un plazo máximo de tres (3) meses, contados a partir de la fecha de la visita. Una vez cumplidos dichos requerimientos, la persona podrá remitir la documentación pertinente o informar al ICA o a quien éste autorice, con el fin de programar una nueva visita para la auditoría del predio, la cual se realizará dentro de los treinta (30) días hábiles siguientes a la solicitud.
      .col-lg-6
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img21.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 CERTIFICABLE
              p El concepto técnico será certificable cuando el predio cumpla con: el 100% de los criterios Fundamentales, mínimo el 80% de los criterios Mayores y mínimo 60 % de los criterios Menores, ante lo cual se expedirá el certificado de Buenas Prácticas Ganaderas BPG en la producción de leche. (Resolución 67449 de 2020 [ICA], Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de leche).
      
      Separador
    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Documentación
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La toma y registro de la información generada en la unidad productiva, garantiza contar con un historial de todos los eventos ocurridos, permitiendo la recolección de datos y el análisis de información que se traduce en un constante mejoramiento de la sanidad, inocuidad y producción de la finca (Tafur y Nieto, 2011).
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center.justify-content-center
            .col-lg-12.p-3
              p.mb-0 #[b Algunos de estos eventos ocurridos pueden ser:]
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Vacunación
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Desparasitación
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Lavado y desinfección del tanque frio
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Lavado y desinfección de utensilios de ordeño
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Rutina de ordeño
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Análisis y calidad de agua
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Utilización de medicamentos veterinarios e insumos agropecuarios
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Mantenimiento de equipos de la granja
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Entrada y salida del personal a la granja
            .col-lg-5 
              img(src='@/assets/curso/tema1/img22.svg')
    p.mb-5 De igual forma debe existir un registro individual para cada animal, donde se escriban todos los procedimientos realizados durante la estadía en la finca (eventos sanitarios, reproductivos, desempeño productivo, procedimientos quirúrgicos y sus respectivos tratamientos) y archivar la guía sanitaria de movilización del ICA (original y copia), de todos los animales que ingresan a la granja.
    
      
    .row.align-items-center.justify-content-center
      .col-lg-12.p-3
        p.mb-0 El ganadero que desee certificarse en BPG en la producción de leche, deberá tener en regla la siguiente documentación: 
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0.p-5
        ul.lista-ul.ms-3
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Vacunación
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Desparasitación
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Lavado y desinfección del tanque frio
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Lavado y desinfección de utensilios de ordeño
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Rutina de ordeño
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Análisis y calidad de agua
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Utilización de medicamentos veterinarios e insumos agropecuarios
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Mantenimiento de equipos de la granja
          li 
            i.fas.fa-check(style="color: #FF854E")
            | Entrada y salida del personal a la granja
      .col-lg-4 
        img(src='@/assets/curso/tema1/img23.svg')
    p.mb-5 Además, es necesario revisar la normatividad vigente de las BPG, establecida por el Instituto Colombiano Agropecuario - ICA y finalmente aplicar la lista de chequeo de “predios productores de leche con destino al consumo humano - Forma 3-852 V. 5” Esta lista de chequeo se aplica con el fin de encontrar carencias ante la normatividad e iniciar un plan que permita completar los aspectos faltantes para poder obtener la certificación.
    .row.justify-content-center.mb-5
      .col-lg-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img24.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="38.7%" y="93%" numero="1")
            p Disminuir directamente el impacto ambiental de la producción.
          .tarjeta.color-acento-botones.p-3(x="46.5%" y="93%" numero="2")
            p Garantizar la calidad e inocuidad de la leche.
          .tarjeta.color-acento-botones.p-3(x="53.5%" y="93%" numero="3")
            p Mejorar las prácticas de manejo y el bienestar de los animales.
          .tarjeta.color-acento-botones.p-3(x="61.3%" y="93%" numero="4")
            p Proporcionar seguridad y salud al personal de la unidad productiva.

    p.mb-0 #[span.etiqueta #[b Además, establecer las BPG ]] implica a la organización y control de las operaciones, procesos y procedimientos en la producción, la corrección de actividades o prácticas erróneas o con defectos, establecer nuevos o mejores métodos técnicos y administrativos, registrar adecuadamente la información y documentarla de manera organizada, capacitar continuamente al personal para producir leche con calidad, trazabilidad e inocuidad.
    
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
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
