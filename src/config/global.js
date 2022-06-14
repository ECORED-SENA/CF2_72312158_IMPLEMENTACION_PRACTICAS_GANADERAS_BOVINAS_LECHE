export default {
  global: {
    componenteFormativo: 'Implementación de BPG en bovinos de leche.',
    descripcionCurso:
      'En este componente se abordará el tema de la implementación de las BPG en bovinos de leche, el diseño y formulación del plan, junto con todos los componentes, así como el tema documental y gestión de personal, los cuales hacen parte fundamental en la ejecución de las actividades, procesos y procedimientos de la unidad productiva bovina lechera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cronograma',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lista de chequeo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Parámetros',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Metodología',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Estrategias de evaluación',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Documentación',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Metas',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimientos, procesos, registros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características y simbología',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestión de personal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      tema:
        'Buenas prácticas ganaderas en la producción de bovinos de leche - BPG',
      referencia:
        'IICA - SENASA. (2018). Buenas Prácticas Pecuarias en la Producción de Ganado Bovino.',
      tipo: 'Manual',
      link:
        'http://proleche.com/wp-content/uploads/2019/02/ManualProduccio%CC%81nGanadoBovino.pdf',
    },
    {
      tema: 'Aplicación BPG',
      referencia:
        'Sitio Argentino de Producción Animal. (2012). Aplicación de las buenas prácticas ganaderas (BPG). Un caso real.',
      tipo: 'Artículo ',
      link:
        'https://www.produccion-animal.com.ar/etologia_y_bienestar/bienestar_en_bovinos/62-bpg.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Es el estado físico y mental de los animales con relación a las condiciones en las que viven y mueren.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'Prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente. ',
    },
    {
      termino: 'Buenas Prácticas en el Uso de Medicamentos Veterinarios (BPMV)',
      significado:
        'Se define como el cumplimiento de los métodos de empleo oficialmente recomendados para los medicamentos de uso veterinario, de conformidad con la información consignada en el rotulado de los productos aprobados, incluido el tiempo de retiro, cuando los mismos se utilizan bajo condiciones prácticas. ',
    },
    {
      termino: 'Condiciones laborales',
      significado:
        'Capacitación del personal, seguridad e higiene del personal y los animales que se manejan.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Característica o atributo de un alimento, que determina que el consumo del mismo no causa riesgo para la salud del consumidor.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'Es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina.',
    },
    {
      termino: 'Manejo',
      significado:
        'Considera todas aquellas prácticas que promueven la productividad, bienestar general y salud de los animales e incluye el manejo de subproductos y residuos. ',
    },
    {
      termino: 'Registro',
      significado:
        'Documento que presenta los resultados obtenidos o proporciona evidencia de actividades desempeñadas. ',
    },
    {
      termino: 'Riesgo',
      significado: 'Es la probabilidad de que un peligro se presente.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Es el conjunto de acciones y procedimientos que permiten la identificación, registro y seguimiento a todos los eventos de la vida del animal, desde su nacimiento hasta el consumidor final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco Ochoa, M. Á. (s.f.). Zootecnia de Bovinos Productores de Leche, Unidad 3. Universidad Nacional de México.',
      link:
        'Https://fmvz.unam.mx/fmvz/p_estudios/apuntes_zoo/unidad_3_bovinosleche.pdf',
    },
    {
      referencia:
        'Contexto Ganadero. (2008). La importancia de Implementar BPG en las Ganaderías de Carne. ',
      link:
        'https://www.contextoganadero.com/regiones/la-importancia-de-implementar-bpg-en-las-ganaderias-de-carne',
    },
    {
      referencia:
        'Figueredo Candia F. F., Idoyaga H. F., Mendoza, L. & Echeverria, P. (2016). Guía de Buenas Prácticas Pecuarias en Producción Lechera. CONACYT. Servicio Nacional de Calidad y Salud Animal. Investigación para el Desarrollo. Prociencia. ',
      link:
        'https://www.conacyt.gov.py/sites/default/files/upload_editores/u294/guia-produccion-lechera.pdf',
    },
    {
      referencia:
        'Holmann, F., Rivas, L., Carulla, J., Rivera, B., Giraldo, L. A., Guzmán, S., Martínez, M., Medina, A. & Farrow, A. (2004). Producción de Leche y su Relación con los Mercados: Caso Colombiano. Centro Internacional de Agricultura Tropical - CIAT e Instituto Internacional de Investigación en Ganadería - ILRI.',
    },
    {
      referencia: 'ICA. (2021). Censo Pecuario Nacional.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/epidemiologia-veterinaria/censos-2016/censo-2018',
    },
    {
      referencia:
        'Palomino Cadavid, P., Jiménez Arboleda, H. A., Naranjo Ramírez, J. A. et al. (2018). Implementación de Buenas Prácticas Ganaderas: principios básicos. Editorial CES, Universidad CES; Medellín.',
      link:
        'https://repository.ces.edu.co/bitstream/handle/10946/3585/Implemetaci%F3n-de-Buenas-Pr%E1cticas-Ganaderas-principios-b%E1sicos.pdf;jsessionid=206AB5C5E89F88E49FA4002C3E0EC105?sequence=1',
    },
    {
      referencia:
        'Secretaría de Agricultura y Desarrollo Rural. (2017). Sanidad e inocuidad, indispensables en la seguridad alimentaria. Gobierno de México. ',
      link:
        'https://www.gob.mx/agricultura/es/articulos/sanidad-e-inocuidad-indispensables-en-la-seguridad-alimentaria',
    },
    {
      referencia:
        'Universidad de Córdoba, España. (s.f.). Características y Particularidades de la Empresa Ganadera. Departamento de Producción Animal.',
      link:
        'https://www.uco.es/organiza/departamentos/prod-animal/economia/aula/img/pictorex/14_07_59_tema0.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana PINTO',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'nombre',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
