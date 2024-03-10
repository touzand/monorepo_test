from marshmallow import Schema,fields

class UserSchema(Schema):
    id = fields.Number()
    username = fields.Str()
    email = fields.Email()

