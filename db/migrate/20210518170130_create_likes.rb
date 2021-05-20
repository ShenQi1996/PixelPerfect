class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :userId, null: false
      t.integer :pictureId, null: false
      t.timestamps
    end

    add_index :likes, [:userId, :pictureId], unique: true 
  end
end
