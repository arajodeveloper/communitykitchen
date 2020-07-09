class UserFoodController < ApplicationController
  def index
    foods = current_user.foods
    render json:current_user.foods
  end
  
  def show
  end

end
