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
      errors =  @user.errors.full_messages
      render json: errors, status: 404
    end
  end

  def info
    @user = User.find(params[:id])
  end

  def watchlists
     @watchlists = Watchlist.find_by(watcher_id: params[:id])
        render :json: {}
  end

  private
  def user_params
    params.require(:users).permit(:password, :username, :name, :id)
  end
end
