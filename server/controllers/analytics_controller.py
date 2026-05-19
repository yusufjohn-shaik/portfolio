from flask import request
from services.analytics_service import record_view, get_view_counts
from utils.response import success, error


def track_view():
    data = request.get_json(silent=True) or {}
    path = data.get('path', '/')
    record_view(path)
    return success(message='Tracked')


def view_counts():
    counts = get_view_counts()
    return success(counts)
