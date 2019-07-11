@watchlists.each do |watchlist|
    json.set! watchlist.ticker do 
        json.extract! watchlist, :id, :following, :ticker
    end
end