class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :company_id, null:false
      t.integer :watcher_id
      t.timestamps
    end
  end
end
