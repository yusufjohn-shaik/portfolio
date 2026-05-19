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
        'WTF_CSRF_ENABLED': False,
    })
    with app.app_context():
        _db.create_all()
        yield app
        _db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


def test_health(client):
    res = client.get('/api/health')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['status'] == 'ok'


def test_contact_submit_success(client):
    payload = {
        'name': 'Test User',
        'email': 'test@example.com',
        'message': 'Hello, this is a test message from pytest.',
    }
    res = client.post(
        '/api/contact/',
        data=json.dumps(payload),
        content_type='application/json',
    )
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['success'] is True


def test_contact_missing_fields(client):
    payload = {'name': 'Test'}
    res = client.post(
        '/api/contact/',
        data=json.dumps(payload),
        content_type='application/json',
    )
    assert res.status_code == 422
    data = json.loads(res.data)
    assert data['success'] is False
    assert 'errors' in data


def test_contact_invalid_email(client):
    payload = {
        'name': 'Test User',
        'email': 'not-an-email',
        'message': 'This should fail validation.',
    }
    res = client.post(
        '/api/contact/',
        data=json.dumps(payload),
        content_type='application/json',
    )
    assert res.status_code == 422


def test_contact_message_too_short(client):
    payload = {
        'name': 'Test User',
        'email': 'test@example.com',
        'message': 'Short',
    }
    res = client.post(
        '/api/contact/',
        data=json.dumps(payload),
        content_type='application/json',
    )
    assert res.status_code == 422


def test_get_messages(client):
    # Submit one first
    payload = {
        'name': 'Yusuf',
        'email': 'yusufjohn252007@gmail.com',
        'message': 'Test message for retrieval check.',
    }
    client.post(
        '/api/contact/',
        data=json.dumps(payload),
        content_type='application/json',
    )
    res = client.get('/api/contact/')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data['success'] is True
    assert isinstance(data['data'], list)
    assert len(data['data']) >= 1
