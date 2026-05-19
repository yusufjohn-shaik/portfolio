from flask import Flask
from flask_cors import CORS
from config import Config
from database.db import init_db

from routes.contact_routes import contact_bp
from routes.github_routes import github_bp
from routes.leetcode_routes import leetcode_bp
from routes.project_routes import project_bp
from routes.blog_routes import blog_bp
from routes.analytics_routes import analytics_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # CORS — allow React frontend
    CORS(app, origins=Config.ALLOWED_ORIGINS, supports_credentials=True)

    # Init DB
    init_db(app)

    # Register blueprints
    app.register_blueprint(contact_bp, url_prefix='/api/contact')
    app.register_blueprint(github_bp, url_prefix='/api/github')
    app.register_blueprint(leetcode_bp, url_prefix='/api/leetcode')
    app.register_blueprint(project_bp, url_prefix='/api/projects')
    app.register_blueprint(blog_bp, url_prefix='/api/blogs')
    app.register_blueprint(analytics_bp, url_prefix='/api/analytics')

    @app.route('/api/health')
    def health():
        return {'status': 'ok', 'message': 'Server is running'}

    return app


app = create_app()

if __name__ == '__main__':
    app.run(debug=Config.DEBUG, host='0.0.0.0', port=5000)
