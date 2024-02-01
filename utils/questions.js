const sumOfQuestions = [
    [
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?1",
        },
        {
            letter: "a",
            answer: "Ayudante de santa claus",
            question: "Con la A: ¿Como se llama el perro de la familia Simpson?",
        },
        {
            letter: "a",
            answer: "Abe",
            question: "Con la A: Nombre del abuelo de la familia de los Simpson",
        }
    ],
    [
        {
            letter: "b",
            answer: "Bob",
            question: "Con la B: ¿Que personaje de los simpson quiere matar siempre a bart?",
        },
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?",
        },
        {
            letter: "b",
            answer: "Bola de nieve",
            question: "Con la B: ¿Como se llama el gato de la familia Simpson?",
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
            answer: "Carl",
            question: "Con la C: ¿Compañero de trabajo de Homer en la central nuclear que nunca se separa de Lenny?",
        },
        {
            letter: "c",
            answer: "China",
            question: "Con la C: País donde la hermana de Marge, Selma adopta un bebé",
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
            answer: "Duffman",
            question: "Con la D: Mascota de la cerveza Duff",

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
            answer: "Eddie",
            question: "Con la E: Compañero policía de Wiggun y Lou",
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
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?",

        },

        {
            letter: "g",
            answer: "Gato",
            question: "Con la G: ¿Que tipo de animal tiene la familia Simpson?",

        },

        {
            letter: "g",
            answer: "Gumble",
            question: "Con la G: Apellido de Barny amigo de Homer Simpson",
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
            answer: "Hank",
            question: "Con la H: Maléfico villano dueño de las empresas globex de apellido Scorpio",
        },
        {
            letter: "h",
            answer: "Hombre Abeja",
            question: "Con la H: Mexicano disfrazado en Los Simpson",
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
            answer: "Jay",
            question: "Con la J: Primer apellido de Homer J. Simpson",
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
            answer: "Kent",
            question: "Con la K: Presentador de las noticias de la televisión de Springfield?",
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
            answer: "Lisa",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?1",
        },
        {
            letter: "l",
            answer: "Lenny",
            question: "Con la L: ¿Compañero de trabajo de Homer Simpson en la central nucelar que nunca se separa de Carl?",
        },
        {
            letter: "l",
            answer: "Luann",
            question: "Con la L: Mujer de Kirk Van Houten",
        }
    ],
    [

        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?",
        },
        {
            letter: "m",
            answer: "Montgomery Burns",
            question: "Con la M: ¿Cómo se llama el jefe de la central nuclear?",
        },
        {
            letter: "m",
            answer: "Milhouse",
            question: "Con la M: Mejor amigo de Bart Simpson",
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
            answer: "Nelson",
            question: "Con la N: Abuson del colegio de Springfield",
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
            answer: "Pica",
            question: "Con la P: Raton de la serie de Krusty el payaso ",
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
            answer: "Rod",
            question: "Con la R: Hijo mayor de Ned Flanders",
        },
        {
            letter: "r",
            answer: "Rasca",
            question: "Con la R: Gato negro de la serie de dibujos de Krusty el payaso",
        }
    ],
    [
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?",
        },
        {
            letter: "s",
            answer: "Shelbyville",
            question: "Con la S: Ciudad de la familia Simpson",
        },
        {
            letter: "s",
            answer: "Seymour Skinner",
            question: "Con la S: Nombre y apellido del director del colegio de Springfield",
        }
    ],
    [
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: Exmarido de Selma Bouvier",
        },
        {
            letter: "t",
            answer: "Todd",
            question: "Con la T: ¿Cómo se llama el hijo de Ned Flanders?",
        },
        {
            letter: "t",
            answer: "Tenacitas",
            question: "Con la T: Nombre que le pone Homer a la langosta",
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
            question: "Con la V: ¿Qué instrumento musical de cuerda toca Lisa en varios episodios de Los Simpson?1",
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
            answer: "Willie",
            question: "Con la W: Escocés que se encarga del mantenimiento del colegio de Springfield?",
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