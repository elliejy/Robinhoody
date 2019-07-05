class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      errors = ['Invalid username or password']
      render json: errors, status: 422
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render "api/users/show"
    end
  end
end
