# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  company_id :integer          not null
#  watcher_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
    belongs_to :user,
    foreign_key: :watcher_id,
    class_name: :User
end
