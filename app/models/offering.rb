class Offering < ApplicationRecord
  belongs_to :user
  has_many :bids
  has_many :users, through: :bids

  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 250 }
  validates :image_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }
  validates :condition, presence: true
  validates :category_tag, presence: true

end
