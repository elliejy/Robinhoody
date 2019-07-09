@watchlists.each do |watchlist|
    json.set! watchlist.id do 
        json.extract! watchlist, :following, :ticker
    end
end