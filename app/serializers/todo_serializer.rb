class TodoSerializer < ActiveModel::Serializer
  attributes :id, :description, :status
end
