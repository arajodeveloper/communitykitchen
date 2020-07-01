class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token


  def after_sign_in_path_for(resource_or_scope)
    puts 'MAYBE THIS ONE'
    p current_user
    # call api with current user's address, get lat long
    # update current user in db with lat long
    # call api just once only when they signed up
    # p current_user
    super
  end
end

