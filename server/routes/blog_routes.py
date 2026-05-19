from flask import Blueprint
from controllers.blog_controller import list_blogs, get_blog

blog_bp = Blueprint('blogs', __name__)

blog_bp.route('/', methods=['GET'])(list_blogs)
blog_bp.route('/<string:slug>', methods=['GET'])(get_blog)
