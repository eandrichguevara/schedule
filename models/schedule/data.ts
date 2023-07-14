import { EVERYDAY, LUNESaJUEVES, LUNESaVIERNES, SÁBADOyDOMINGO, Task, dayOfWeek } from "./models";

export const tasks: Task[] = [
    {
        id: 1,
        name: "Desayuno",
        times: [
            {
                day: EVERYDAY,
                startAt: {
                    hour: 8,
                    minute: 0
                },
                endAt: {
                    hour: 9,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 2,
        name: "Pastilla",
        depends: [1],
        times: [
            {
                day: EVERYDAY,
                startAt: {
                    hour: 8,
                    minute: 0
                },
                endAt: {
                    hour: 9,
                    minute: 0
                }
            },
            {
                day: EVERYDAY,
                startAt: {
                    hour: 21,
                    minute: 15
                },
                endAt: {
                    hour: 22,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 3,
        name: "Tomar presión",
        depends: [2],
        times: [
            {
                day: EVERYDAY,
                startAt: {
                    hour: 8,
                    minute: 0
                },
                endAt: {
                    hour: 9,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 4,
        name: "Cosas de los niños",
        times: [
            {
                day: EVERYDAY,
                startAt: {
                    hour: 8,
                    minute: 0
                },
                endAt: {
                    hour: 13,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 5,
        name: "Revisar recordatorios",
        depends: [3,4],
        times: [
            {
                day: LUNESaVIERNES,
                startAt: {
                    hour: 8,
                    minute: 0
                },
                endAt: {
                    hour: 13,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 6,
        name: "Trabajo",
        times: [
            {
                day: LUNESaJUEVES,
                startAt: {
                    hour: 9,
                    minute: 0
                },
                endAt: {
                    hour: 19,
                    minute: 0
                }
            },
            {
                day: [dayOfWeek.VIERNES],
                startAt: {
                    hour: 9,
                    minute: 0
                },
                endAt: {
                    hour: 16,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 7,
        name: "Clases de Ingles",
        times: [
            {
                day: [dayOfWeek.LUNES],
                startAt: {
                    hour: 15,
                    minute: 0
                },
                endAt: {
                    hour: 16,
                    minute: 0
                }
            },
            {
                day: [dayOfWeek.MIÉRCOLES],
                startAt: {
                    hour: 15,
                    minute: 30
                },
                endAt: {
                    hour: 16,
                    minute: 30
                }
            }
        ]
    },
    {
        id: 8,
        name: "Curso de Matemáticas",
        depends: [6],
        times: [
            {
                day: [dayOfWeek.MARTES, dayOfWeek.JUEVES],
                startAt: {
                    hour: 18,
                    minute: 0
                },
                endAt: {
                    hour: 20,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 8,
        name: "Curso de Matemáticas",
        times: [
            {
                day: [dayOfWeek.MARTES, dayOfWeek.JUEVES],
                startAt: {
                    hour: 18,
                    minute: 0
                },
                endAt: {
                    hour: 20,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 9,
        name: "Ejercicio",
        times: [
            {
                day: [dayOfWeek.LUNES, dayOfWeek.MIÉRCOLES, dayOfWeek.VIERNES],
                startAt: {
                    hour: 19,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            }
        ]
    },
    {
        id: 10,
        name: "Trabajo Personal",
        depends: [8],
        times: [
            {
                day: [dayOfWeek.MARTES, dayOfWeek.JUEVES],
                startAt: {
                    hour: 19,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            },
            {
                day: [dayOfWeek.SÁBADO],
                startAt: {
                    hour: 9,
                    minute: 0
                },
                endAt: {
                    hour: 12,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 11,
        name: "Caminar",
        times: [
            {
                day: [dayOfWeek.MARTES, dayOfWeek.JUEVES],
                startAt: {
                    hour: 19,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            },
            {
                day: [dayOfWeek.SÁBADO],
                startAt: {
                    hour: 12,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            }
        ]
    },
    {
        id: 12,
        name: "Estudiar Escrituras",
        depends: [6],
        times: [
            {
                day: [dayOfWeek.LUNES, dayOfWeek.MIÉRCOLES],
                startAt: {
                    hour: 18,
                    minute: 0
                },
                endAt: {
                    hour: 20,
                    minute: 0
                }
            },
            {
                day: [dayOfWeek.SÁBADO],
                startAt: {
                    hour: 9,
                    minute: 0
                },
                endAt: {
                    hour: 12,
                    minute: 0
                }
            }
        ]
    },
    {
        id: 13,
        name: "Tareas del Hogar",
        times: [
            {
                day: LUNESaVIERNES,
                startAt: {
                    hour: 19,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            },
            {
                day: SÁBADOyDOMINGO,
                startAt: {
                    hour: 9,
                    minute: 0
                },
                endAt: {
                    hour: 21,
                    minute: 15
                }
            }
        ]
    }
]