class Offering < ApplicationRecord
  belongs_to :user
  has_many :bids
  has_many :users, through: :bids
end
