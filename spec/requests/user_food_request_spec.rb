require 'rails_helper'

RSpec.describe "UserFoods", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/user_food/index"
      expect(response).to have_http_status(:success)
    end
  end

end
