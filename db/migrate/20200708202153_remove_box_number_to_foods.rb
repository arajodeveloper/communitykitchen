class RemoveBoxNumberToFoods < ActiveRecord::Migration[6.0]
  def change
    remove_column :foods, :box_number, :string
  end
end
