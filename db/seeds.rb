# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


User.destroy_all
Picture.destroy_all
Like.destroy_all


user1 = User.create!(email: 'tester@gmail.com', password:'123456789', username: 'Guest')
user2 = User.create!(email: 'test1@gmail.com', password:'123456789', username: 'MINA MIMBU')
user3 = User.create!(email: 'test3@gmail.com', password:'123456789', username: 'Peter K')
user4 = User.create!(email: 'test4@gmail.com', password:'123456789', username: 'Sam Qi')