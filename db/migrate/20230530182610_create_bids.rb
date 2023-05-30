class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.string :title
      t.string :image_url
      t.text :description
      t.string :condition
      t.string :category_tag
      t.text :message
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :offering, null: false, foreign_key: true

      t.timestamps
    end
  end
end
