class TodosController < ApplicationController
  expose(:todos)

  def index
    self.todos = [
      {
        id: 1,
        title: 'todo1',
        completed: true
      },
      {
        id: 2,
        title: 'todo2',
        completed: false
      }
    ]
  end
end
