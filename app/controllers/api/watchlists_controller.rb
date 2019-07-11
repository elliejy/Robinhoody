class Api::WatchlistsController < ApplicationController

    def index
        watcher_id = current_user.id
        @watchlists = Watchlist.where(watcher_id: watcher_id)
    end

    def create
        
        @watchlist = Watchlist.new(ticker: params[:ticker])
        @watchlist.watcher_id = current_user.id
        @watchlist.following = true
        @watchlist.save!
        render :show
    end

    def show
        @watchlist = Watchlist.find_by(params[:id])
    end

    def destroy
        @watchlist= Watchlist.find_by(id: params[:id])
        @watchlist.destroy
        render :show
    end

    # def update
    #     @watchlists= Watchlist.where(watcher_id:current_user.id)
    #     company = @watchlists.find_by(ticker:params[:ticker])
    #     company.following=true
    #     company.save
    # end
     private
  def company_params
    params.require(:watchlists).permit( :ticker)
  end
end
