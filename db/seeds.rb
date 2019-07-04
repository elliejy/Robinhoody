# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.firs

ActiveRecord::Base.transaction do
User.destroy_all
  demo_user = User.new({ email: 'user@user.com', username: 'user', password: 'testing' })
  demo_user.save!

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

 end