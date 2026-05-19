from flask import request
from services.blog_service import get_all_posts, get_post_by_slug
from utils.response import success, error


def list_blogs():
    category = request.args.get('category')
    posts = get_all_posts(category)
    return success(posts)


def get_blog(slug):
    post = get_post_by_slug(slug)
    if not post:
        return error('Post not found', 404)
    return success(post)
