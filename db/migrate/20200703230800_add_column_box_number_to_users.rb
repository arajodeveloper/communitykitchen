class AddColumnBoxNumberToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :box_number, :string
  end
end
