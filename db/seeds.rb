# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# locations = ["New York", "Jersey City", "Seattle", "Atlanta", "Denver", "San Antonio"]
# conditions = ["Gently Used", "Well-Loved", "Heirloom", "Antique", "WANTED", "Slightly damaged"]
# descriptions = ["Free to a good home", "(batteries not included)", "As is", "Like new", "(assembly required)", "No returns!!!!"]
# titles = ["Batman Toy", "basketball", "Toddler Shoes Size 4", "Soccer Cleats", "Softball Bat"]
# category_tags = ["clothing", "toys", "sports gear", "books", "shoes", "newborn"]

# 5.times do
#     user = User.create(
#       username: Faker::Internet.username,
#       password: Faker::Internet.password,
#       image_url: Faker::Avatar.image,
#       bio: Faker::Lorem.sentence,
#       location: locations.sample,
#     )
  
#     rand(2..4).times do
#       user.offerings.create(
#         title: titles.sample,
#         description: descriptions.sample,
#         image_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['toys']),
#         condition: conditions.sample,
#         category_tag: category_tags.sample
#       )
#     end
#   end