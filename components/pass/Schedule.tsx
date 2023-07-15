'use client'

import TaskEventComponent from "@/components/pass/Task";
import { tasks } from "@/models/schedule/data";
import { TaskEvent } from "@/models/schedule/models";
import { loadTaskEvents, setTaskEvents } from "@/models/schedule/service";


export default function Schedule(){
    
    const HOY = new Date()
    const TODAY = HOY.getDay()
    let taskEvents = loadTaskEvents()

    console.log("Load TaskEvents: ", taskEvents)

    if(!taskEvents){
        const filterTask = tasks.filter(task => {
            let days = task.times
                .map((time) => time.day)
                .flat()
                .filter(day => day === TODAY)
    
            return days.length > 0
        })
    
        taskEvents = filterTask.map((task, indexTask) => 
            task.times
                .map((time, indexTime)=>(time.day.includes(TODAY) ? {
                    id: (indexTask+1)*10+(indexTime+1),
                    name: task.name,
                    depends: task.depends,
                    taskId: task.id,
                    startAt: time.startAt,
                    endAt: time.endAt,
                    completed: false,
                } : undefined))) //Add undefined results
                .flat()
                .filter(a=>a) //Delete undefined results

        console.log("Create TaskEvents: ", taskEvents)

        setTaskEvents(taskEvents)
    }

    const actualTaskEvents = taskEvents
        .filter(({startAt} :TaskEvent) => startAt.hour <= HOY.getHours())
        .filter(({startAt} :TaskEvent) => 
            startAt.hour === HOY.getHours() 
            ? startAt.minute <= HOY.getMinutes() : true)
        .filter(({completed}: TaskEvent)=>!completed)
        .sort((a: TaskEvent,b: TaskEvent)=>a.endAt.minute-b.endAt.minute)
        .sort((a: TaskEvent,b: TaskEvent)=>a.endAt.hour-b.endAt.hour)
        .sort((a: TaskEvent,b: TaskEvent)=>a.startAt.minute-b.startAt.minute)
        .sort((a: TaskEvent,b: TaskEvent)=>a.startAt.hour-b.startAt.hour)

    console.log("Actual TaskEvents: ", actualTaskEvents)
        
    return(
        <div className="flex flex-col gap-2 p-2">
            {actualTaskEvents.map((taskEvent: any, index: number) => <TaskEventComponent key={index} taskEvent={taskEvent}/>)}
        </div>
    )
}