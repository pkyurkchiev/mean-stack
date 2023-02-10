import {Component} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../view-models/task';

@Component({
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TasksComponent {
    tasks: Task[];
    title: string;
    multiCheck: boolean;
    searchValue: string;

    constructor(private taskService:TaskService){
        this.tasks = [];
        this.title = "";
        this.multiCheck = false;
        this.searchValue = "";
        this.taskService.getTasks()
            .subscribe(result =>{
            this.tasks = result;
            this.multiCheck = result.every(x => x.isDone == true);
        });
    }

    addTask(event: any){
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };

        if(typeof newTask.title !== 'undefined'){
            this.taskService.addTask(newTask)
                .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
                this.multiCheck = this.tasks.every(x => x.isDone == true);
            });
        }        
    }

    deleteTask(id: string){
        var tasks = this.tasks;
        this.taskService.deleteTask(id)
            .subscribe(data => {
            if(data){
                for(var i = 0; i < tasks.length; i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                        this.multiCheck = this.tasks.every(x => x.isDone == true);
                    }
                }
            }
        });
    }

    updateStatus(task: Task){
        let _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };

        this.taskService.updateStatus(_task)
            .subscribe(data => {
            task.isDone = !task.isDone;
            this.multiCheck = this.tasks.every(x => x.isDone == true);
        });
    }

    updateAllStatus(event: any){
        let isDone = false;
        if(event.target.checked)
        {
            isDone = true;
        }

        this.taskService.updateAllStatus(isDone)
            .subscribe(data => {
                this.tasks.forEach(function (item) {
                    item.isDone = isDone;
                });
                
                this.multiCheck = this.tasks.every(x => x.isDone == true);
            });
    }

    searchTasks(){
        let title = typeof this.searchValue !== 'undefined' ? this.searchValue : '';
        
        if(title.trim().length)
        {
            this.taskService.getByName(title)
            .subscribe(data => {
                this.tasks = data;
                this.multiCheck = data.every(x => x.isDone == true);
            });
        } else {
           this.taskService.getTasks()
            .subscribe(data =>{
                this.tasks = data;
                this.multiCheck = data.every(x => x.isDone == true);
            });
        }
    }
 }