from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)


class Resident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nick_name = db.Column(db.String(20))
    name = db.Column(db.String(80))
    graduation_year = db.Column(db.String(10))
    course = db.Column(db.String(30))
    address = db.relationship('Address', backref='person', 
                                lazy='dynamic')


    def __init__(self, name, nick_name, course, graduation_year):
        self.nick_name = nick_name
        self.name = name
        self.course = course
        self.graduation_year = graduation_year
    # def __repr__(self):
    #     return '<Resident %r : nick_name: %r, graduation_year %r>' % self.username
    #                                             self.nick_name self.graduation_year


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
