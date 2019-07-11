class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      Watchlist.create({ticker: 'aapl', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'tsla', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'nflx', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'fb', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'msft', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'dis', watcher_id: @user.id, following: true})
      Watchlist.create({ticker: 'amzn', watcher_id: @user.id, following: true})
      sign_in(@user)
      render "api/users/show"
    else
      errors =  @user.errors.full_messages
      render json: errors, status: 404
    end
  end

  # def info
  #   @user = User.find(params[:id])
  # end

  # def watchlists
  #    @watchlists = Watchlist.find_by(watcher_id: params[:id])
  #       render json: {}
  # end

  private
  def user_params
    params.require(:user).permit(:username, :password, :name)
  end
end
