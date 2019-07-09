class TickerToWatchlist < ActiveRecord::Migration[5.2]
  def change
    add_column(:watchlists, :ticker, :string)
    add_column(:watchlists, :following, :boolean, default: false)
  end
end
