require 'httparty'
require 'uri'

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :address, :city, :state, :zip_code, :email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :address, :city, :state, :zip_code, :email, :password])
  end

  def after_sign_in_path_for(resource_or_scope)
    puts 'MAYBE THIS ONE'
    p current_user
    p current_user.city
    params = {
      'access_key' => '04e5781ed21b11dfd7d36eb0b6155189',
      'query' => current_user.address + ' ' + current_user.city + ', ' + current_user.state + ' ' + current_user.zip_code ,
      'limit' => 1
    }
    p URI.encode_www_form(params)
    if current_user.latitude.nil?
      p 'data doesnt exist'
      response = HTTParty.get('http://api.positionstack.com/v1/forward?' + URI.encode_www_form(params))
      if response.code == 200
        current_user.latitude = response['data'][0]['latitude']
        current_user.longitude = response['data'][0]['longitude']
        current_user.save()
      
      else
        p 'failed to get lat long'
      end
    end
    
    # call api with current user's address, get lat long
    # update current user in db with lat long
    # call api just once only when they signed up
    # p current_user
    super
  end
end

