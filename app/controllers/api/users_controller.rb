class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: 'I need to render the server side errors here', status: 418
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :name)
  end
end
