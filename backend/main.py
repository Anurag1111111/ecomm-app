from flask import Flask, g, request, session, redirect, url_for
from flask_cors import CORS
import pymysql
import logging
from waitress import serve

app = Flask(__name__)
CORS(app)


@app.before_request
def before_request():

    g.db = pymysql.connect(host="localhost", user="root",
                           password="Anurag11@#jangir", db="ecomm_app", autocommit=True)
    g.cursor = g.db.cursor()
    print()


@app.teardown_request
def teardown_request(exception):
    g.cursor.close()
    g.db.close()


@app.route("/api/register", methods=["POST"])
def add_register():

    try:
        print("hey")
        register = request.json
        query = "insert into register values(%s,%s,%s,%s);"

        # contact = g.cursor.fetchall()

        print(register)

        g.cursor.execute(query, [register['first_name'], register['last_name'], register['email'], register['password']
                                 ])

        return {"isSuccessful": True}

    except Exception as e:
        logging.error(e)
        print(e)
        return {"isSuccessful": False}


@app.route("/api/login", methods=["POST"])
def add_login():

    msg = ''

    if request.method == 'POST' and 'email' in request.json and 'password' in request.json:
        email = request.json['email']
        password = request.json['password']

        g.cursor.execute(
            'SELECT email, password FROM register WHERE email = %s AND password = %s;', (email, password,))
        account = g.cursor.fetchone()
        print(account)
        if account:
            # Create session data, we can access this data in other routes
            # session['loggedin'] = True
            # session['id'] = account['id']
            # session['username'] = account['username']
            # Redirect to home page
            print("success")
            return {"isSuccessful": True, msg: msg}

        else:
            # Account doesnt exist or username/password incorrect
            return {msg: 'Incorrect username/password!'}

    # except Exception as e:
    #     logging.error(e)
    #     print(e)
    #     return {"isSuccessful": False}
