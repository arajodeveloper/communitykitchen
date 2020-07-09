class RemoveBoxNumberToUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :box_number, :string
  end
end
