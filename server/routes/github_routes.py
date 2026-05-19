from flask import Blueprint
from controllers.github_controller import github_profile, github_repos

github_bp = Blueprint('github', __name__)

github_bp.route('/profile', methods=['GET'])(github_profile)
github_bp.route('/repos', methods=['GET'])(github_repos)
