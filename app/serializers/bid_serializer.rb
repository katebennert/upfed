class BidSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :description, :condition, :category_tag, :message
  belongs_to :user
  belongs_to :offering
end
