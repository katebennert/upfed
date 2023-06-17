<br/>
<p align="center">
    <a href="https://upfed.onrender.com/" target="_blank">
        <img width="50%" src="https://i.imgur.com/pDinA3g.png" alt="UpFed logo">
    </a>
</p>

# UpFed: Trading Post For Fed-Up Parents

UpFed is a theoretical community of fed-up parents with too much stuff. The idea is that you can trade stuff your kid doesn't want or need for stuff other people's kids don't want or need.

## Description

The goal of this project was to create a RESTful API using Ruby on Rails to represent a trading application for parents to offer up and trade items that their children have outgrown or don't use anymore. The full stack application was created in partial fulfilment of a Flatiron School software engineering program. Below is a sample of the data structures as well as usage examples and installation instructions.

## Installation

(This project uses Ruby on Rails and React npm package manager.)

Fork and clone this repository to your machine and run:

```
bundle install
```

To install the client-side dependencies, a separate terminal run:

```
npm install --prefix client
```

To start the server run:

```
rails s
```

And to launch the localhost and run the app in development mode, in a separate terminal run:

```
npm start --prefix client
```

You can also look at a deployed version [here](https://upfed.onrender.com/).

## Sample JSON object for the API

```json
  id: 1,
  title: "Offering Title",
  description: "This is the desciption of an offering.",
  image_url: "image.com",
  condition: "good",
  category_tag: "clothing",
  user: {
    username: "username",
    id: 1,
    image_url: "avatar.com",
    bio: "i am a user.",
    location: "Jersey City"
},
  bids: [...]
}
```

## Endpoints

The folowing routes are defined in the API.

```
get /offerings
create /offerings
show /offerings/:id
```
```
create /bids
update /bids
delete /bids
```

## Usage

[Watch a quick walk-through here.](https://www.loom.com/share/b608a8b5f3f9420abe80f7347c08edda?sid=762c7137-d189-4f94-85ac-500f7c40b3a7)

Features:
* Login/Logout
* View Offerings
* Create New Offering
* Bid On An Offering
* Edit or Delete a Bid

[View a full walk through here.](https://www.loom.com/share/743cf1ddde3b4de4ac294217d1269fb6?sid=fcfc8d82-0d91-47bd-bfca-ddd505a5d8c6)

## License

UpFed is made available under the terms of the [MIT License](https://opensource.org/license/mit/).

