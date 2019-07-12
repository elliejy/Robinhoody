# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.firs

ActiveRecord::Base.transaction do
User.destroy_all
  demo_user = User.new({ username: 'user', password: 'testing' })
  demo_user.save!
Company.destroy_all
Watchlist.destroy_all

User.create!(
  {
          username: 'ellie',
          password: 'password',
          name: 'Ellie DaBomb', 
       }
)
User.create!(
  {
          username: 'fancybanker',
          password: 'password',
          name: 'Elliot Humph', 
       }
)
User.create!(
  { 
          username: 'harold', 
          password: 'password',
          name: 'Ryan Mapa' }
)

User.create!(
  {       id: 3, 
          username: 'bronil',
          password: 'password',
          name: 'Ronil Stach'}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'aapl',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'tsla',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'nflx',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'fb',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'msft',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'dis',
      following: true}
)

Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'sbux',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'baba',
      following: true}
)
Watchlist.create! (
  {   watcher_id: demo_user.id, 
      ticker: 'amzn',
      following: true}
)

Company.create! (
  {
    company_name: "Apple",
    ticker: "aapl"
  })

Company.create! (
  {
    company_name: "Tesla",
    ticker: "tsla"
  })
Company.create! (
  {
    company_name: "Netflix",
    ticker: "nflx"
  })
Company.create! (
  {
    company_name: "Facebook",
    ticker: "fb"
  })
Company.create! (
  {
    company_name: "Microsoft",
    ticker: "msft"
  })
Company.create! (
  {
    company_name: "Starbucks",
    ticker: "sbux"
  })
Company.create! (
  {
    company_name: "Alibaba",
    ticker: "baba"
  })
Company.create! (
  {
    company_name: "Amazon",
    ticker: "amzn"
  })

 end