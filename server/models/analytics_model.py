from database.db import db
from datetime import datetime


class PageView(db.Model):
    __tablename__ = 'page_views'

    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(200), nullable=False)
    referrer = db.Column(db.String(500))
    user_agent = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'path': self.path,
            'referrer': self.referrer,
            'created_at': self.created_at.isoformat(),
        }
