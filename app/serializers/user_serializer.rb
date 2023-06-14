class UserSerializer < ActiveModel::Serializer
  attributes :username, :id, :image_url, :bio, :location

  has_many :offerings 
  has_many :bids
end
