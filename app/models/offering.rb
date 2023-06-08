class Offering < ApplicationRecord
  belongs_to :user
  has_many :bids
  has_many :users, through: :bids
  after_initialize :initialize_bids

  validates :title, presence: true

  private

  # this doesn't work because there are non-null contraints that are violated (offering and user id cant be null)
  def initialize_bids
    self.bids = []
  end
end
