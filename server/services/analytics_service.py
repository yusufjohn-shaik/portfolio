from models.analytics_model import PageView
from database.db import db
from flask import request


def record_view(path: str):
    view = PageView(
        path=path,
        referrer=request.referrer,
        user_agent=request.user_agent.string[:500] if request.user_agent.string else None,
    )
    db.session.add(view)
    db.session.commit()


def get_view_counts():
    from sqlalchemy import func
    results = (
        db.session.query(PageView.path, func.count(PageView.id).label('count'))
        .group_by(PageView.path)
        .order_by(func.count(PageView.id).desc())
        .all()
    )
    return [{'path': r.path, 'count': r.count} for r in results]
