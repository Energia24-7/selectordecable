const cableTree = {

    name: "¿Qué desea instalar?",

    children: [

        {
            name: "Potencia",

            children: [

                {
                    name: "Baja Tensión",

                    children: [

                        {
                            type: "cable",
                            name: "THHN",
                            voltage: "600 V",
                            application: "Instalaciones en tubería."
                        },

                        {
                            type: "cable",
                            name: "THHN Flex",
                            voltage: "600 V",
                            application: "Instalaciones flexibles."
                        },

                        {
                            type: "cable",
                            name: "Exzhellent Green",
                            voltage: "600 V",
                            application: "Libre de halógenos."
                        },

                        {
                            type: "cable",
                            name: "Prysolar",
                            voltage: "1500 V",
                            application: "Sistemas fotovoltaicos."
                        }

                    ]
                },

                {
                    type: "cable",
                    name: "Media Tensión",
                    voltage: "5 kV - 35 kV",
                    application: "Distribución eléctrica."
                }

            ]
        },

        {
            name: "Control",

            children: [

                {
                    type: "cable",
                    name: "Cable de Control",
                    voltage: "600 V",
                    application: "Control industrial."
                }

            ]
        },

        {
            name: "Instrumentación",

            children: [

                {
                    type: "cable",
                    name: "Instrumentación",
                    voltage: "300 V",
                    application: "Señales analógicas y digitales."
                }

            ]
        },

        {
            name: "Telecomunicaciones",

            children: [

                {
                    type: "cable",
                    name: "Cat 5e",
                    voltage: "-",
                    application: "Redes Ethernet."
                },

                {
                    type: "cable",
                    name: "Cat 6",
                    voltage: "-",
                    application: "Redes Ethernet."
                },

                {
                    type: "cable",
                    name: "Fibra Óptica",
                    voltage: "-",
                    application: "Backbone de comunicaciones."
                }

            ]
        }

    ]
};
