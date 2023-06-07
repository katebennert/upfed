class OfferingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :condition, :category_tag
  belongs_to :user, serializer: UserSerializer
  has_many :bids, serializer: BidSerializer

end
