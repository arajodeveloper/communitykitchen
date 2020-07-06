class FoodsController < ApplicationController
  def index
    foods = Food.all
    render json: foods
  end

  def new
  end

  def create
    food = current_user.foods.create(food_params)
    p "current user and food params"
    p current_user
    p food_params
    food.latitude = current_user.latitude
    food.longitude = current_user.longitude
    p "current_user lat and long:"
    p current_user.latitude
    p current_user.longitude
    food.reservation = false
    # food.time = food.available_time
    # food.note = food.description
    # food.image = food.image_url
    food.save()

    if food.valid?
      render json:food
    else
      render json: food.errors, status: 422
    end
  end

  private
  def food_params
    params.require(:food).permit(:name, :ingredients, :note, :time, :image, :box_number)
  end
 
end
