class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url, :bio, :location
  has_many :offerings 
  has_many :bids
end
