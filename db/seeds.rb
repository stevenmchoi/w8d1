# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# dispatch(login({
# 		username: 'user1',
# 		email: 'email1',
# 		password: 'password'
# 	}))

# dispatch(signup({
# 		username: 'user1',
# 		email: 'email1',
# 		password: 'password'
# 	}))

# last signup: 4

## State Shape
# default:
# {
#   session: {
#     currentUser: null,
#   },
#   errors: {
#     session: []
#   }
# }
#
# {
#   session: {
#     currentUser: null,
#   },
#   errors: {
#     session: ["Invalid credentials"]
#   }
# }
#
# or this:
#
# {
#   session: {
#     currentUser: {
#       id: 1,
#       username: 'breakfast'
#     }
#   },
#   errors: {
#     session: []
#   }
# }
