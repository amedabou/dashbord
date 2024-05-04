from flask import Flask

app =  Flask(__name__)
app.config['SECRET_KEY'] = '15'

from website import routes