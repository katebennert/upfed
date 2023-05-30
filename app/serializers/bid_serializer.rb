class BidSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :description, :condition, :category_tag, :message
  has_one :user
  has_one :offering
end
