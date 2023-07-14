import { TaskEvent } from "@/models/schedule/models"
import { loadTaskEvents, setTaskEvents } from "@/models/schedule/service"
import { useState } from "react";

interface TaskProps{
    taskEvent: TaskEvent
}

export default function Task({taskEvent}: TaskProps){
    
    const [completed, setCompleted] = useState(false)
    const {startAt, endAt} = taskEvent;

    function completeTask({id}: TaskEvent) {
        setCompleted(!completed)
        const taskEvents = loadTaskEvents()
            .map((task: TaskEvent) => {
                if(task.id === id) task.completed = !task.completed
                return task
            })
        
        setTaskEvents(taskEvents)
    }

    return (
        <div className="w-full min-h-[100px] bg-green-600 rounded-xl">
            <div className="flex justify-evenly items-center h-full ">
                <span className="uppercase text-2xl font-bold">{taskEvent.name}</span>
                <input 
                    id={`${taskEvent.id}`} 
                    name="completed" 
                    className="h-20 w-6" 
                    type="checkbox" 
                    checked={completed} 
                    onChange={(e: any)=>completeTask(taskEvent)} 
                    />
            </div>
            <div className="flex justify-center gap-1">
                <span>
                    {startAt.hour}
                    :
                    {startAt.minute < 10 
                        ? "0"+startAt.minute 
                        : startAt.minute}
                </span>
                {"-->"}
                <span>
                    {endAt.hour}
                    :
                    {endAt.minute < 10 
                        ? "0"+endAt.minute 
                        : endAt.minute}
                </span>
            </div>
        </div>
    )
}