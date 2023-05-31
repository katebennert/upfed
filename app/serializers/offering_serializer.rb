class OfferingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :condition, :category_tag
  belongs_to :user
  has_many :bids, serializer: OfferingBidSerializer
end
