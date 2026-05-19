import pytest
import json
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from app import create_app
from database.db import db as _db


@pytest.fixture
def app():
    app = create_app()
    app.config.update({
        'TESTING': True,
        'SQLALCHEMY_DATABASE_URI': 'sqlite:///:memory:',
    })
    with app.app_context():
        _db.create_all()
        yield app
        _db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


def test_get_all_projects(client):
    res = client.get('/api/projects/')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['success'] is True
    assert isinstance(data['data'], list)
    assert len(data['data']) >= 1


def test_get_project_by_slug(client):
    res = client.get('/api/projects/flask-auth-system')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['success'] is True
    assert data['data']['slug'] == 'flask-auth-system'


def test_get_project_not_found(client):
    res = client.get('/api/projects/nonexistent-project')
    assert res.status_code == 404
    data = json.loads(res.data)
    assert data['success'] is False


def test_project_has_required_fields(client):
    res = client.get('/api/projects/')
    data = json.loads(res.data)
    project = data['data'][0]
    required = ['id', 'slug', 'title', 'tagline', 'tags', 'category', 'year']
    for field in required:
        assert field in project, f'Missing field: {field}'


def test_portfolio_project_exists(client):
    res = client.get('/api/projects/portfolio-website')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['data']['title'] == 'Portfolio Website'
