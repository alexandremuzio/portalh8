from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test2.db'
db = SQLAlchemy(app)
if not db:
    db.create_all()

class Resident(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    nick_name = db.Column(db.String(20), unique=True)
    name = db.Column(db.String(80))
    graduation_year = db.Column(db.String(10))
    email = db.Column(db.String(30))
    telephone = db.Column(db.String(30))
    course = db.Column(db.String(30))
    address = db.relationship('Address', backref='resident', uselist=False)     

    def __init__(self, name, nick_name, course, graduation_year, email, telephone):
        self.nick_name = nick_name
        self.name = name
        self.course = course
        self.graduation_year = graduation_year
        self.email = email
        self.telephone = telephone

    def __repr__(self):
        return '<Resident %s : nick_name: %s, course %s, graduation_year %s, id %s>' \
                                        % (self.name, self.nick_name, self.course,   \
                                        self.graduation_year, self.id)

class Address(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quarter = db.Column(db.String(100))
    apartment = db.Column(db.String(100))
    allocation = db.Column(db.String(100))
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'))

    def __init__(self, quarter, apartment, allocation, resident_id):
        self.quarter = quarter
        self.apartment = apartment
        self.allocation = allocation
        self.resident_id = resident_id

    def __init__(self, quarter, apartment, allocation):
        self.quarter = quarter
        self.apartment = apartment
        self.allocation = allocation

    def __repr__(self):
        return '<Quarter %s : Apartment: %s, Allocation %s, Resident Id %s, Id %s>' \
                                 % (self.quarter, self.apartment, self.allocation,  \
                                    self.resident_id, self.id)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=True)
    email = db.Column(db.String(200))
    password_hash = db.Column(db.String(500))

    def __init__(self, username, email, password_hash):
        self.username = username
        self.email = email
        self.password_hash = password_hash

    