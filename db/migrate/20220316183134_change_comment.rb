class ChangeComment < ActiveRecord::Migration[5.2]
  def change
    change_table :comments do |t|
      remove_column :comments, :comment, :text
      add_column :comments, :comment, :string, null: false
    end
  end
end
