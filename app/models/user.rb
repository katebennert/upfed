class User < ApplicationRecord
    has_many :bids
    has_many :offerings

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8, maximum: 20 }
    validates :image_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }
    validates :bio, presence: true, length: { maximum: 300 }
    validates :location, presence: true

end
