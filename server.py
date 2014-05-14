from flask import Flask, request, render_template
import csv
from models import * 
app = Flask(__name__)



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

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)