from flask import Blueprint
from controllers.analytics_controller import track_view, view_counts

analytics_bp = Blueprint('analytics', __name__)

analytics_bp.route('/track', methods=['POST'])(track_view)
analytics_bp.route('/counts', methods=['GET'])(view_counts)
