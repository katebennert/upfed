class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image, :bio, :location
end
