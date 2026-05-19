from flask import current_app
from flask_mail import Mail, Message

mail = Mail()


def init_mail(app):
    mail.init_app(app)


def send_contact_email(name: str, email: str, message: str) -> bool:
    try:
        receiver = current_app.config.get('CONTACT_RECEIVER', 'yusufjohn252007@gmail.com')
        msg = Message(
            subject=f'Portfolio Contact: {name}',
            recipients=[receiver],
            reply_to=email,
            body=f'From: {name} <{email}>\n\n{message}',
        )
        mail.send(msg)
        return True
    except Exception as e:
        current_app.logger.error(f'Mail send failed: {e}')
        return False
