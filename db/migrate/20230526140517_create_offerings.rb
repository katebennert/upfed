class CreateOfferings < ActiveRecord::Migration[6.1]
  def change
    create_table :offerings do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.string :condition
      t.string :category_tag
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
