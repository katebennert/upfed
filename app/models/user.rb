class User < ApplicationRecord
    has_many :bids
    has_many :offerings, through: :bids

    has_secure_password
    validates :username, presence: true, uniqueness: true

end
