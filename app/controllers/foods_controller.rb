class FoodsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]

  def index
    foods = Food.all
    render json: foods
  end

  def show
    food = Food.find(params[:id])
    render json: food
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

  def edit
    food = current_user.foods.find(params[:id])
  end

  def update
    food = Food.find(params[:id])
    if params[:reserveRIGHTNOW]
      p 'RESERVED YO'
      food.reservation = !food.reservation 
      food.save()
      render json: food
    else
      p 'NOT RESERVED :('
      food = current_user.foods.find(params[:id])
      food.update(food_params)
      if food.valid?
        render json: food
      else
        render json: food.errors, status: 422
      end
    end

  end


  def destroy
    food = current_user.foods.find(params[:id])
    if food.destroy
      render json: food
    else
      render json: food.errors, status: 422
    end
  end


  private
  def food_params
    params.require(:food).permit(:name, :ingredients, :note, :time, :image, :box_number, :reserveRIGHTNOW)
  end
 
end
