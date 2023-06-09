class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :offering

  validates :image_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }
end
