const sumOfQuestions = [
    [
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?1",
        },
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?2",
        },
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?3",
        }
    ],
    [
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?1",
        },
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?2",
        },
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?1",
        },
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?2",
        },
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?3",
        }
    ],
    [
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?1",

        },
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?2",

        },
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?3",
        }
    ],
    [
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?1",
        },
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?2",
        },
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?3",
        }

    ],
    [

        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?1",
        },
        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?2",
        },
        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?3",
        }

    ],
    [

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?1",

        },

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?2",

        },

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?3",
        }
    ],
    [
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?1",
        },
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?2",
        },
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?1",
        },
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?2",
        },
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?3",
        }
    ],
    [

        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?1",
        },
        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?2",
        },
        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?3",
        }
    ],
    [
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?1",
        },
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?2",
        },
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?3",
        }
    ],
    [

        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?1",
        },
        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?2",
        },
        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?3",
        }
    ],
    [

        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?1",
        },
        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?2",
        },
        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?1",
        },

        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?2",
        },
        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?3",
        }
    ],
    [
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?1",

        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?2",
        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?3",
        }
    ],
    [
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?1",
        },
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?2",
        },
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?3",
        }
    ],
    [
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?1",
        },
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?2",
        },
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?3",
        }
    ],
    [
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?1",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?2",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?3",
        }
    ],
    [
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?1",
        },
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?2",
        },
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?3",
        }
    ],
    [
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?1",
        },
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?2",
        },
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?3",
        }
    ],
    [
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?1",
        },
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?2",
        },
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?3",
        }
    ],
    [
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?1",

        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?2",
        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?3",
        }
    ],
    [
        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?1",
        },

        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?2",
        },
        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?3",
        }
    ],
    [
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?1",
        },
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?2",
        },
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?3",
        }
    ],
    [

        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?1",
        },
        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?2",
        },
        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?3",
        }
    ],
    [
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?1",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?2",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?3",
        }
    ],
    [
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?1",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?2",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?3",
        }
    ]
];






export { sumOfQuestions } 