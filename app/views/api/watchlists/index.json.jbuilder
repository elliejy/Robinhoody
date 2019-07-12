@watchlists.each do |watchlist|
    json.set! watchlist.ticker.upcase do 
        json.extract! watchlist, :id, :following, :ticker
    end
end