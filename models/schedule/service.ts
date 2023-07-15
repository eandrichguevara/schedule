import { TaskEvent } from "./models"

const HOY = new Date()
const DATE = `${HOY.getFullYear}-${HOY.getMonth}-${HOY.getDate}`
const TASKEVENTS = "TaskEvents_"+DATE

const bd = () => {
    if (typeof localStorage !== 'undefined') return localStorage
    else return null
}

export const loadTaskEvents = 
    () => JSON.parse(bd()?.getItem(TASKEVENTS) ?? "null")

export const setTaskEvents = 
    (taskEvents: TaskEvent[]) => 
        bd()?.setItem(TASKEVENTS, JSON.stringify(taskEvents))