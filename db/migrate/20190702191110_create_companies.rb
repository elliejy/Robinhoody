class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :company_name, null:false
      t.string :ticker, null:false
      t.timestamps
    end
    add_index :companies, :company_name
    add_index :companies, :ticker
  end
end
