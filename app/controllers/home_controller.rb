class HomeController < ApplicationController
  def index
    users = User.all
    render json:users
  end
  
  def create

    user = User.create(user_params)
    
    render json: user
  end
  def destroy
    User.destroy(params[:id])
  end
  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render json:user
  end

  # private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :address, :city, :state, :zip_code, :latitude, :longitude, :email, :password)
  end
end
