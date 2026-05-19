from database.db import db
from datetime import datetime


class BlogPost(db.Model):
    __tablename__ = 'blog_posts'

    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(200), unique=True, nullable=False)
    title = db.Column(db.String(300), nullable=False)
    excerpt = db.Column(db.Text)
    content = db.Column(db.Text)
    tags = db.Column(db.String(500))
    category = db.Column(db.String(50))
    read_time = db.Column(db.String(20))
    published_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_published = db.Column(db.Boolean, default=False)
    views = db.Column(db.Integer, default=0)
    external_url = db.Column(db.String(500))
    platform = db.Column(db.String(50))

    def to_dict(self):
        return {
            'id': self.id,
            'slug': self.slug,
            'title': self.title,
            'excerpt': self.excerpt,
            'tags': self.tags.split(',') if self.tags else [],
            'category': self.category,
            'readTime': self.read_time,
            'publishedAt': self.published_at.strftime('%Y-%m-%d') if self.published_at else None,
            'views': self.views,
            'externalUrl': self.external_url,
            'platform': self.platform,
        }
