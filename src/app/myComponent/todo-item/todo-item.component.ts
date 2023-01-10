import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../todos";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo){
    this.todoDelete.emit(todo); 
    console.log("Onclick ");
  }
}
