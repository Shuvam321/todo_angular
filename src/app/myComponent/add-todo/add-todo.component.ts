import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // @Input() todo;
  title!: string;
  desc!:string;
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


constructor(){ }

onSubmit(){
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true  
    }
    this.todoAdd.emit(todo)
}
}
