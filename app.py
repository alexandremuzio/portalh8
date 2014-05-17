from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash, make_response, jsonify
from sqlite3 import dbapi2 as sqlite3
from models import * 
import csv, hmac, hashlib, os

app = Flask(__name__)
key = 'dz7ftw'

def configure_app():
	#f = open('password.txt', 'r')
	username = 'a'
	password = 'b'
	print username, password
	# Load default config and override config from an environment variable
	app.config.update(dict(
		DATABASE=os.path.join(app.root_path, 'flaskr.db'),
		DEBUG=True,
		SECRET_KEY='development key',
		USERNAME= username,
		PASSWORD= password
		))
	app.config.from_envvar('FLASKR_SETTINGS', silent=True)
	if not db:
		db.create_all()


@app.route('/')
def index():
    return make_response(open('templates/index.html').read())


@app.route('/add', methods=['GET', 'POST'])
def add():
	error = None
	if request.method == 'POST':
		name = request.form['name']
		nname = request.form['nick_name']
		course = request.form['course']
		graduation_year = request.form['graduation_year']
		telephone = request.form['telephone']
		email = request.form['email']
		resident = Resident(name, nname, course, graduation_year, 
							telephone, email)
		try:
			db.session.add(resident)
			db.session.commit()
		#IntegrityError 
		except Exception, e:
			return jsonify({'success' : False, 'name' : name})

		return jsonify({'success' : True, 'name' : name})

	# request.method == 'GET'
	return render_template('add.html', error=error)

@app.route('/<name>', methods=['GET', 'POST'])
def modify(name):
	error = None
   	#check if admin is logged in
   	if request.method == 'POST':
   		action = request.form['action']
   		if action == 'delete':
   			resident = Resident.query.filter_by(name=name).first()
   			try:
   				db.session.delete(resident)
   				db.session.commit()
   			except:
   				#print to log
   				pass

   		if action == 'modify':
			name = request.form['name']
			nname = request.form['nick_name']
			course = request.form['course']
			graduation_year = request.form['graduation_year']
			telephone = request.form['telephone']
			email = request.form['email']
			resident = Resident.query.filter_by(nick_name=nname).first()
			try:
				db.session.delete(resident)
   				db.session.commit()
   			except:
   				#print to log
   				pass
	# request.method == 'GET'
	abort(404)
	resident = Resident.query.filter_by(name=name).first()
	print resident
	return render_template('perfil.html', resident=residente)


@app.route('/admin', methods=['POST', 'GET'])
def login():
	error = None
	if request.method == 'POST':
		name = request.form['username']
		password = request.form['password']
		to_hash = hmac.new(key)
		to_hash.update(password)
		pass_hash = to_hash.hexdigest()

		# searching for user in database
		user = User.query.filter_by(username=name).first()

		#verifying if there is a match
		if (user is None):
			return jsonify({'success': False})
		else:
			response = make_response(redirect('/'))
			return jsonify({'success': True, 'username': name, 'pass_hash': pass_hash})
			
			#response.set_cookie('username + ph', name + '_' + pass_hash)
			#return response
	else :
		return render_template('admin.html', error=error)

	# form = LoginForm()	
	# if form.validate_on_submit():
        # login and validate the user...
        #login_user(user)
        #flash("Logged in successfully.")
        #return redirect(request.args.get("next") or url_for("index"))
    # return render_template("admin.html")

# @app.cli.command('populate')
# def populate():
#     filename = 'test.csv' # file containing comma separated informations about residents
#     db.create_all()

#     with open(filename, 'r') as f:
#     reader = csv.reader(f)

#     for row in reader:
#     # row is a list of strings
#     # retrieving data according to the saved table
#     quarter = row[1]
#     apartment = row[2]
#     allocation= row[3]
#     name = row[4]
#     course = row[5]
#     graduation_year = row[6]
#     nname = "testing"
#     resident = Resident(name, nname, course, graduation_year) # creating the resident as a Python object
#     db.session.add(resident) # adding it to the session
#     db.session.commit() # commiting the session (necessary for retrieving the residents id)

#     address = Address(quarter, apartment, allocation, resident.id) # creating the address as a Python object
#     db.session.add(address)    # adding it to the session
#     db.session.commit() # commiting the session
#      return "It worked"


configure_app()
app.run(debug=True)
