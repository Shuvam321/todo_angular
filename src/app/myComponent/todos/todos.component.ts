import { Component, Input } from '@angular/core';
import { Todo } from "../../todos";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  // @Input todo;
    todos:Todo[];
    constructor(){
      
     this.todos = [
      // {
      //   sno:1,
      //   title:"Title",
      //   desc:"Description",
      //   active:false,
      //  },
      //  {
      //   sno:2,
      //   title:"Title",
      //   desc:"Description",
      //   active:false,
      //  },
      //  {
      //   sno:3,
      //   title:"Title",
      //   desc:"Description",
      //   active:false,
      //  }
    ]

    }
    deleteTodo(todo : Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
    addTodo(todo : Todo){
      console.log(todo);
      // const index = this.todos.indexOf(todo);
      this.todos.push(todo);
    }



}


