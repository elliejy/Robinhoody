class Api::WatchlistsController < ApplicationController

    def index
        watcher_id = current_user.id
        @watchlists = Watchlist.where(watcher_id: watcher_id)
    end

    def create
        @watchlist = Watchlist.new(ticker:params[:ticker])
        @watchlist.watcher_id = current_user.id
        @watchlist.following = true
        @watchlist.save!
    end

    def show
        @watchlist = Watchlist.find_by(params[:ticker])
    end

    def destroy
        @watchlist= Watchlist.find_by(watcher_id:current_user.id)
        company = @watchlist.find_by(ticker:params[:ticker])
        company.following=false
        company.save
    end
     private
  def company_params
    params.require(:company).permit(:ticker)
  end
end
