from flask import Blueprint
from controllers.contact_controller import submit_contact, get_messages

contact_bp = Blueprint('contact', __name__)

contact_bp.route('/', methods=['POST'])(submit_contact)
contact_bp.route('/', methods=['GET'])(get_messages)
