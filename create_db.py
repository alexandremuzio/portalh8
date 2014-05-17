# manage.py

from flask.ext.script import Manager
from app import app
from models import *

manager = Manager(app)

@manager.command
def create_tables():
    db.create_all()
    print 'It worked!'

if __name__ == "__main__":
    manager.run()