
from models import * 
import csv, hmac, hashlib, os

key = 'dz7ftw'

#@app.cli.command('create_address')
def create_address():
    db.create_all()
    for apartment in range (301,331):
        for allocation in range(ord('A'), ord('G')):
            address = Address('H8C', str(apartment), chr(allocation))
            db.session.add(address)
    for apartment in range (101, 132):
        for allocation in range(ord('A'), ord('G')):
            addressB = Address('H8B', str(apartment+100), chr(allocation))
            addressC = Address('H8C', str(apartment), chr(allocation))
            db.session.add(addressB)
            db.session.add(addressC)
    for apartment in range (132,143):
        for allocation in range(ord('A'), ord ('E')):
            addressB = Address('H8B', str(apartment+100), chr(allocation))
            addressC = Address('H8C', str(apartment), chr(allocation))
            db.session.add(addressB)
            db.session.add(addressC)
    db.session.commit()

#@app.cli.command('create_admin')
def create_admin(username, email, password):
	db.create_all()
	to_hash = hmac.new(key)
	to_hash.update(password)
	pass_hash = to_hash.hexdigest()
	new_admin = User(username, email, pass_hash)
	db.session.add(new_admin)
	db.session.commit()

def admin_ilharco(): #for testing purposes
	db.create_all()
	to_hash = hmac.new(key)
	to_hash.update('#aredecaiw')
	pass_hash = to_hash.hexdigest()
	ilharco = User('Ilharco', 'gabriel.ilharco@gmail.com', pass_hash)
	db.session.add(ilharco)
	db.session.commit()