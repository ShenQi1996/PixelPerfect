class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :title, null: false
      t.boolean :private 
      t.text :description
      t.integer :ownerId
      t.timestamps
    end
    add_index :pictures, :ownerId
  end
end
