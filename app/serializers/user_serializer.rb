class UserSerializer < ActiveModel::Serializer
  attributes :username, :image_url, :bio, :location

  has_many :offerings 
  has_many :bids
end
