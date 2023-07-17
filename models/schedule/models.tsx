export enum dayOfWeek{
    DOMINGO     = 0,
    LUNES       = 1,
    MARTES      = 2,
    MIÉRCOLES   = 3,
    JUEVES      = 4,
    VIERNES     = 5,
    SÁBADO      = 6,
}

export const EVERYDAY: number[] = [
    dayOfWeek.LUNES, 
    dayOfWeek.MARTES, 
    dayOfWeek.MIÉRCOLES,
    dayOfWeek.JUEVES,
    dayOfWeek.VIERNES,
    dayOfWeek.SÁBADO,
    dayOfWeek.DOMINGO
]

export const LUNESaJUEVES: number[] = [
    dayOfWeek.LUNES,
    dayOfWeek.MARTES,
    dayOfWeek.MIÉRCOLES,
    dayOfWeek.JUEVES
]

export const LUNESaVIERNES: number[] = [
    dayOfWeek.LUNES,
    dayOfWeek.MARTES,
    dayOfWeek.MIÉRCOLES,
    dayOfWeek.JUEVES,
    dayOfWeek.VIERNES
]

export const SÁBADOyDOMINGO: number[] = [
    dayOfWeek.SÁBADO,
    dayOfWeek.DOMINGO
]

export interface TimeHHMM{
    hour: number,
    minute: number
}

export interface Time{
    day: dayOfWeek[],
    startAt: TimeHHMM,
    endAt: TimeHHMM
}

export interface Task{
    id: number,
    name: string,
    depends?: number[],
    times: Time[]
}

export interface TaskEvent{
    id: number,
    name: string,
    taskId: number,
    depends?: number[],
    startAt: TimeHHMM,
    endAt: TimeHHMM,
    completed?: boolean
}