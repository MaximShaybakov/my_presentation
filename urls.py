from gen_vars import app
from views import AboutUs


app.add_url_rule('/home/', view_func=AboutUs.as_view('about_us'), methods=['GET'])