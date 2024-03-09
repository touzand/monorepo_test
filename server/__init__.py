from flask import Flask, request
from flask_cors import CORS
import datetime as dt 

# SQLAlchemy{
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
#}

# Marshmallow{
from marshmallow import Schema,fields
from pprint import pprint
#}


# SQLAlchemy{
class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)
#}

app = Flask(__name__)
# CORS(app)
CORS(app, origins='*')
# cors = CORS(app)
# CORS(app, resources={r"/*": {"origins": "*", "methods": "*", "headers": "*"}})
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# app.config['CORS_HEADERS'] = 'Content-Type'

# SQLAlchemy{
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:255684@localhost/mydb"
db.init_app(app)

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(unique=True)
    email: Mapped[str]

with app.app_context():
    db.create_all()
#}

class UserScheme(Schema):
    id = fields.Number()
    username = fields.Str()
    email = fields.Email()

@app.route("/users")
def user_list():
    users = db.session.execute(db.select(User).order_by(User.username)).scalars()
    json_result = UserScheme(many=True).dump(users)
    return json_result

@app.route("/users/<int:id>")
def user_detail(id):
    user = db.get_or_404(User,id)
    json_result = UserScheme().dump(user)
    return json_result

@app.route("/users/create", methods=["POST"])
def user_create():
    # print(request.form["username"])
    # print(request.form["email"])
    user = User( username=request.form["username"],
        email=request.form["email"],
    )
    db.session.add(user)
    db.session.commit()
    return 'transformed'

@app.route("/users/<int:id>/delete",methods=["POST"])
def user_delete(id):
    user = db.get_or_404(User,id)

    db.session.delete(user)
    db.session.commit()
    return 'transformed'

@app.route("/users/<username>/update",methods=["POST"])
def user_update(username):
    # user = db.get_or_404(User,username)
    user = User.query.filter_by(username=username).first()
    user.username = request.form["username"]
    user.email = request.form["email"]

    result_json = UserScheme().dump(user)
    db.session.commit()

    return result_json
    # return username










