class User < ApplicationRecord
    has_many :bids
    has_many :offerings

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :image_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }

end
