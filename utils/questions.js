const sumOfQuestions = [
    [
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?",
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
            question: "Con la C: ¿Donde trabaja Homer Simpson?",
        },
        {
            letter: "c",
            answer: "Carl",
            question: "Con la C: ¿Compañero de trabajo de Homer en la central nuclear que nunca se separa de Lenny?",
        },
        {
            letter: "c",
            answer: "China",
            question: "Con la C: País donde la hermana de Marge, Selma, adopta un bebé",
        }
    ],
    [
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?",

        },
        {
            letter: "d",
            answer: "Duffman",
            question: "Con la D: Mascota de la cerveza Duff",

        },
        {
            letter: "d",
            answer: "Flanders",
            question: "Contiene la D: ¿Cómo se apellida el vecino de los Simpson?",
        }
    ],
    [
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?",
        },
        {
            letter: "e",
            answer: "Eddie",
            question: "Con la E: Compañero policía de Wiggun y Lou",
        },
        {
            letter: "e",
            answer: "Matt Groening",
            question: "Contiene la E: ¿Quién es el creador de los Simpson (nombre y apellidos)?",
        }

    ],
    [

        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?",
        },
        {
            letter: "f",
            answer: "Flameado de Moe",
            question: "Con la F: Famosa bebida que creó Homer Simpson en el bar de Moe",
        },
        {
            letter: "f",
            answer: "Duff",
            question: "Contiene la F: ¿Cómo se llama la cerveza favorita en Springfield?",
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
            question: "Con la H: ¿Quién es el padre de la familia Simpson?",
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
            answer: "Lisa",
            question: "Contiene la I: ¿Quien toca el Saxofon de la familia Simpson?",
        },
        {
            letter: "i",
            answer: "Iguana",
            question: "Con la I: ¿Que tipo de animal tiene como mascota Selma?",
        },
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?",
        }
    ],
    [

        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield (nombre y apellido)?",
        },
        {
            letter: "j",
            answer: "Jay",
            question: "Con la J: Primer apellido de Homer J. Simpson",
        },
        {
            letter: "j",
            answer: "Jimbo",
            question: "Con la J: Abuson amigo de Nelson",
        }
    ],
    [
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?",
        },
        {
            letter: "k",
            answer: "Kent",
            question: "Con la K: Presentador de las noticias de la televisión de Springfield?",
        },
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?",
        }
    ],
    [

        {
            letter: "l",
            answer: "Lisa",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?",
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
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?",
        },

        {
            letter: "n",
            answer: "Nelson",
            question: "Con la N: Abuson del colegio de Springfield",
        },
        {
            letter: "n",
            answer: "Radiactivoman",
            question: "Contiene la N: ¿Superheroe de comics con traje rojo que le gusta a Bart?",
        }
    ],
    [
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: Animal africano que aparece en la serie de los simpson"

        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: Animal africano que aparece en la serie de los simpson",
        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: Animal africano que aparece en la serie de los simpson",
        }
    ],
    [
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?",
        },
        {
            letter: "o",
            answer: "Homer",
            question: "Contiene la O: Padre de Maggie Simpson",
        },
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?",
        }
    ],
    [
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana de Marge?",
        },
        {
            letter: "p",
            answer: "Pica",
            question: "Con la P: Raton de la serie de Krusty el payaso ",
        },
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Selma?",
        }
    ],
    [
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
        }
    ],
    [
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?",
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
            answer: "Springfield",
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
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",

        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",
        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",
        }
    ],
    [
        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical de cuerda toca Lisa en varios episodios de Los Simpson?",
        },

        {
            letter: "v",
            answer: "Shelbyville",
            question: "Contiene la V: Ciudad vecina de Springfield",
        },
        {
            letter: "v",
            answer: "Vegetariana",
            question: "Con la V: Que tipo de dieta come Lisa Simpson para ayudar a los animales",
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
            answer: "Wiggum",
            question: "Con la W: Apellido de Ralph",
        }
    ],
    [

        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?",
        },
        {
            letter: "x",
            answer: "Excelente",
            question: "Con la X: Frase que más repite el señor Montgomery Burns",
        },
        {
            letter: "x",
            answer: "Saxofon",
            question: "Contiene la X: Instrumento que toca Lisa Simpson",
        }
    ],
    [
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
        }
    ],
    [
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?",
        }
    ]
];






export { sumOfQuestions } 