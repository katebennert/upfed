class OfferingBidSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :image_url, :description, :condition, :category_tag, :message, :user
    
  end