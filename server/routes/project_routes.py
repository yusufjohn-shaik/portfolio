from flask import Blueprint
from controllers.project_controller import get_projects, get_project

project_bp = Blueprint('projects', __name__)

project_bp.route('/', methods=['GET'])(get_projects)
project_bp.route('/<string:slug>', methods=['GET'])(get_project)
