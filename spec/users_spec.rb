require 'rails_helper'

describe "Users API", type: :request do
  it "gets a list of users" do
    User.create(
    first_name:"Hiya", 
    last_name:"Smith", 
    address:"123 Main Street", 
    city:"San Diego", 
    state:"CA", 
    zip_code:"92300",
    email: "test1234@gmail.com",
    password: "123456789"
    )

    get '/users'

    json = JSON.parse(response.body)
    
    expect(response).to have_http_status(:ok)
    
    expect(json.length).to eq 1
  end

  it "creates a user" do
    user_params = {
      user: {
        first_name: "Hey",
        last_name: "Man",
        address: "1234 Carmel Rd",
        city: "San Diego",
        state: "CA",
        zip_code: "92000",
        email: "test123@gmail.com",
        password: "12345678"

      }
    }

    post '/users', params: user_params

    expect(response).to have_http_status(:ok)
    new_user = User.first

    expect(new_user.first_name).to eq('Hey')
  end

end

