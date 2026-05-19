from flask import request
from models.contact_model import ContactMessage
from database.db import db
from services.mail_service import send_contact_email
from utils.validators import validate_contact_form
from utils.response import success, error


def submit_contact():
    data = request.get_json(silent=True) or {}
    errors = validate_contact_form(data)
    if errors:
        return error('Validation failed', 422, errors)

    name = data['name'].strip()
    email = data['email'].strip()
    message = data['message'].strip()

    # Save to DB
    msg = ContactMessage(name=name, email=email, message=message)
    db.session.add(msg)
    db.session.commit()

    # Send email (non-blocking failure)
    send_contact_email(name, email, message)

    return success(message='Message received. I will get back to you soon.')


def get_messages():
    messages = ContactMessage.query.order_by(ContactMessage.created_at.desc()).all()
    return success([m.to_dict() for m in messages])
