from models.blog_model import BlogPost
from database.db import db


def get_all_posts(category=None):
    query = BlogPost.query.filter_by(is_published=True)
    if category and category != 'All':
        query = query.filter_by(category=category)
    posts = query.order_by(BlogPost.published_at.desc()).all()
    return [p.to_dict() for p in posts]


def get_post_by_slug(slug):
    post = BlogPost.query.filter_by(slug=slug, is_published=True).first()
    if post:
        post.views += 1
        db.session.commit()
    return post.to_dict() if post else None
