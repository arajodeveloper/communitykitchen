users = [
  {
    first_name:"Dorak", 
    last_name:"Tovb", 
    address:"970 Gunpowder Point Drive", 
    city:"Chula Vista", 
    state:"CA", 
    zip_code:"91910",
    email: "doraktovb@gmail.com",
    password: "1234567",
    latitude: 32.639954,
    longitude: -117.106705
  },
  {
    first_name:"Ari", 
    last_name:"Shane", 
    address:"1250 Olympic Pkwy", 
    city:"Chula Vista", 
    state:"CA", 
    zip_code:"91913",
    email: "arishane@gmail.com",
    password: "12345678",
    latitude: 32.61451,
    longitude: -116.99242
  }
]

users.each do |attributes|
  User.create attributes
end

foods = [
  {
  name: "Meat Pasta",
  ingredients: "Tomato sauce, meat, and whole wheat pasta",
  note: "This is made with my special tomato sauce!",
  latitude: 32.639954,
  longitude: -117.106705,
  reservation: false,
  time: "6/30 12:00-12:15",
  user_id: 1,
  box_number: "1",
  image: "bYiu0nI - Imgur.jpg"
  },

  {

  name: "Pumpkin Pie",
  ingredients: "Pumpkin, Butter, Sugar, Cinnamon, Nuts",
  note: "A perfect pie for your family gathering!",
  latitude: 32.61451,
  longitude: -116.99242,
  reservation: false,
  time: "6/30 12:00-12:15",
  user_id: 2,
  box_number: "2",
  image: "ZbPbSTS - Imgur.jpg"

  }

]
foods.each do |attributes|
  Food.create attributes
end