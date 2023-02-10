import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../view-models/task';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class TaskService{
    url = 'http://localhost:3000/api/tasks/';

    
    constructor(private http:HttpClient){
        console.log('Task Service init....');
    }

    getTasks(){
        return this.http.get<Task[]>(this.url);
    }

    addTask(newTask: { title: string; isDone: boolean; }){
        return this.http.post<Task>(this.url, JSON.stringify(newTask), httpOptions);
    }

    deleteTask(id: string){
        return this.http.delete<Task>(this.url + id);
    }

    updateStatus(task: Task){
        return this.http.put<Task>(this.url + task._id, JSON.stringify(task), httpOptions);
    }

    updateAllStatus(isDone: boolean){
        return this.http.post<Task>(this.url + 'updateAllStatus/', { isDone }, httpOptions);
    }

    getByName(title: string){
        return this.http.get<Task[]>(this.url + 'getByName/' + title);
    }
}