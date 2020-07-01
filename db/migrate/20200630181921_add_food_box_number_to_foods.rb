class AddFoodBoxNumberToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :box_number, :string
  end
end
