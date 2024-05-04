#Je définis ce fichier pour fixer toutes les routes possibles à l'utilisateur
from flask import render_template
from website import app
from website.dataready import *

#J'utilise un décorateur
@app.route('/', endpoint='main_home') 
# / represente l'URL de la page d'accueil, toutes les fonctions au dessous du decorateur seront executées uniquement lorque l'utilisateur
# accede à l'URL associé, qui sera / pour notre cas.
def home():



    return render_template('index.html')

@app.route('/equipements')
def equipements():

    return render_template('equipements.html', colleges = colleges )
@app.route('/is')
def indicesocial():

    return render_template('is.html', colleges = colleges )
@app.route('/effectifs')
def effectifs():

    return render_template('effectifs.html', colleges = colleges )

@app.route('/all')
def carte():

    return render_template('all.html', colleges = colleges )
'''@app.route('/map')
def carte():

    return render_template('mapf.html', colleges = colleges )

'''

