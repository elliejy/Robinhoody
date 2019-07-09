class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column(:watchlists, :company_id)
  end
end
