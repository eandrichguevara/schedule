import { TaskEvent } from "./models"

const HOY = new Date()
const DATE = `${HOY.getFullYear}-${HOY.getMonth}-${HOY.getDate}`
const TASKEVENTS = "TaskEvents_"+DATE

export const loadTaskEvents = 
    () => JSON.parse(localStorage.getItem(TASKEVENTS) ?? "null")

export const setTaskEvents = 
    (taskEvents: TaskEvent[]) => 
        localStorage.setItem(TASKEVENTS, JSON.stringify(taskEvents))