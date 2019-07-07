class Api::WatchlistController < ApplicationController

    def index
        @watchlists = Watchlist.all
    end

    def update

    end

    
end
