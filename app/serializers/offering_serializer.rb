class OfferingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :condition, :category_tag
  has_one :user
  has_many :bids, serializer: OfferingBidSerializer
end
