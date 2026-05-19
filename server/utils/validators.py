import re


def is_valid_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return bool(re.match(pattern, email))


def validate_contact_form(data: dict) -> list:
    errors = []
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()

    if not name or len(name) < 2:
        errors.append('Name must be at least 2 characters.')
    if not email or not is_valid_email(email):
        errors.append('A valid email address is required.')
    if not message or len(message) < 10:
        errors.append('Message must be at least 10 characters.')
    if len(message) > 2000:
        errors.append('Message must be under 2000 characters.')

    return errors
