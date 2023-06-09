class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :offering

  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 250 }
  validates :image_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }
  validates :condition, presence: true
  validates :category_tag, presence: true
  validates :description, presence: true, length: { maximum: 500 }
end
