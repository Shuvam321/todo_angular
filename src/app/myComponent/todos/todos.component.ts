import { Component, Input } from '@angular/core';
import { Todo } from "../../todos";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  // @Input todo;
  localItem : string | null;
    todos:Todo[];
    constructor(){
      this.localItem = localStorage.getItem("todos");
      if(this.localItem == null){
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
  else{
    this.todos = JSON.parse(this.localItem);
  }

    }
    deleteTodo(todo : Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
    addTodo(todo : Todo){
      console.log(todo);
      // const index = this.todos.indexOf(todo);
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }



}


