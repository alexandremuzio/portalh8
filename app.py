from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash, make_response
import os
from sqlite3 import dbapi2 as sqlite3
import csv
import hmac, hashlib
from models import * 
app = Flask(__name__)

key = 'dz7ftw'

@app.route('/')
def index(name=None):
	name = "Milton"
	error = None
	if request.method == 'POST':
		abort(500)

	else:
		return render_template('index.html', name=name)

@app.route('/show')
def show():
	pass

@app.route('/add')
def add():
	pass

@app.route('/delete')
def delete():
	pass

# @app.route('/populate')
# def populate():
# 	filename = 'test.csv' # file containing comma separated informations about residents
# 	db.create_all()


# 	with open(filename, 'r') as f:
# 		reader = csv.reader(f)

# 		for row in reader:
# 			# row is a list of strings
# 			# retrieving data according to the saved table
# 			quarter = row[1]
# 			apartment = row[2]
# 			allocation= row[3]
# 			name = row[4]
# 			course = row[5]
# 			graduation_year = row[6]
# 			nname = "testing"
# 			resident = Resident(name, nname, course, graduation_year) # creating the resident as a Python object
# 			db.session.add(resident) # adding it to the session
# 			db.session.commit() # commiting the session (necessary for retrieving the residents id)

# 			address = Address(quarter, apartment, allocation, resident.id) # creating the address as a Python object
# 			db.session.add(address)	# adding it to the session
# 			db.session.commit() # commiting the session
# 	return "It worked"

# login_manager = LoginManager()
# login_manager.init_app(app)

# @login_manager.user_loader
# def load_user(userid):
#     return User.get(userid)

@app.route('/admin', methods=['POST', 'GET'])
def login():
	error = None
	if request.method == 'POST':
		name = request.form['username']
		password = request.form['password']
		to_hash = hmac.new(key)
		to_hash.update(password)
		pass_hash = to_hash.hexdigest()

		response = make_response(redirect('/'))
		response.set_cookie('username + ph', name + '$$$$$' + pass_hash)

		return response
	else :
		return render_template('admin.html', error=error)
	# form = LoginForm()	
	# if form.validate_on_submit():
        # login and validate the user...
        #login_user(user)
        #flash("Logged in successfully.")
        #return redirect(request.args.get("next") or url_for("index"))
    # return render_template("admin.html")


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)