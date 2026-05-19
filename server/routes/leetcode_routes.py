from flask import Blueprint
from controllers.leetcode_controller import leetcode_stats

leetcode_bp = Blueprint('leetcode', __name__)

leetcode_bp.route('/stats', methods=['GET'])(leetcode_stats)
