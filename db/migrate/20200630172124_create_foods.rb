class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.text :ingredients
      t.text :note
      t.float :latitude
      t.float :longitude
      t.string :time
      t.boolean :reservation
      t.integer :user_id

      t.timestamps
    end
  end
end
