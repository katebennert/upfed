class User < ApplicationRecord
    has_many :offerings
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
