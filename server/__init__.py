import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv 

from .models import db
from .routes import app as routes_blueprint

def create_app():
    app = Flask(__name__)
    app.register_blueprint(routes_blueprint)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("POSTGRES_URL")
    return app

app = create_app()
CORS(app, origins='*')
db.init_app(app)
load_dotenv()

with app.app_context():
    db.create_all()
