class TodosController < ApplicationController
  expose(:todos)

  def index
    self.todos = [
      {
        title: 'todo1',
        completed: true
      },
      {
        title: 'todo2',
        completed: false
      }
    ]
  end
end
