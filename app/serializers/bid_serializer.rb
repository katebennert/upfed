class BidSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :condition, :category_tag, :message, :user

  belongs_to :user, serializer: UserSerializer
  belongs_to :offering
end
