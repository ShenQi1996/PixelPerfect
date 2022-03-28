class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :userId, null: false
      t.integer :pictureId, null: false
      t.timestamps
    end
    add_index :comments, :pictureId
    add_index :comments, :userId
  end
end
