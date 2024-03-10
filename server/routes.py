from flask import Blueprint
from .models import db,User
from .schemas import UserSchema
from flask import request

app = Blueprint("routes",__name__)

@app.route("/users")
def user_list():
    users = db.session.execute(db.select(User).order_by(User.username)).scalars()
    json_result = UserSchema(many=True).dump(users)
    return json_result

@app.route("/users/<int:id>")
def user_detail(id):
    user = db.get_or_404(User,id)
    json_result = UserSchema().dump(user)
    return json_result

@app.route("/users/create", methods=["POST"])
def user_create():
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
    user = User.query.filter_by(username=username).first()
    user.username = request.form["username"]
    user.email = request.form["email"]

    result_json = UserSchema().dump(user)
    db.session.commit()

    return result_json
