import { Component } from '@angular/core';

class Todo {
  descriprion: string;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  public todos: Todo[] = [];
  public description: string;

  addNewTodo(): void {
    this.todos.push({
      descriprion: this.description,
      isDone: false
    });
    this.description = null;

  }
}
