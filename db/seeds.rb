require 'faker'
puts 'Seeding 🌱'

locations = ["New York", "Jersey City", "Seattle", "Atlanta", "Denver", "San Antonio"]
conditions = ["Gently Used", "Used", "Brand New", "Well Loved"]
descriptions = ["Free to a good home", "(batteries not included)", "As is", "Like new", "(assembly required)", "No returns!!!!"]
titles = ["Batman Toy", "basketball", "Toddler Shoes Size 4", "Soccer Cleats", "Softball Bat"]
category_tags = ["clothing", "toys and games", "sports gear", "books and comics", "newborn and babies"]

10.times do
    user = User.create({
      username: Faker::Internet.username,
      password: Faker::Internet.password,
      image_url: Faker::Avatar.image,
      bio: Faker::Lorem.sentence,
      location: locations.sample,
    })
end

20.times do
    offering = Offering.create({
        title: titles.sample,
        description: descriptions.sample,
        image_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['toys']),
        condition: conditions.sample,
        category_tag: category_tags.sample,
        user_id: rand(1..10)
    })
end

50.times do
    bid = Bid.create({
        title: titles.sample,
        description: Faker::Lorem.paragraph,
        image_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['toys']),
        condition: conditions.sample,
        category_tag: category_tags.sample,
        message: Faker::Lorem.sentence,
        user_id: rand(1..10),
        offering_id: rand(1..20)
    })
end

puts 'Seeding complete! ✅'