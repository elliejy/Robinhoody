class ChangeColumnNulls < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:watchlists, :company_id, true)
  end
end
