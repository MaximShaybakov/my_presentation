from gen_vars import app
from flask import render_template, jsonify, request
import datetime
from flask.views import MethodView


class AboutUs(MethodView):
    
    def get(self):
        username = 'Vasja'
        return jsonify(name=username)
        
    
class PageView():
    
    def home_view(self):
        return render_template('index.html', utc_dt=datetime.datetime.utcnow().date())
