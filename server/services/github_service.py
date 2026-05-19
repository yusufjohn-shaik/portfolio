import requests
from flask import current_app
from utils.helpers import cache_get, cache_set


def _headers():
    token = current_app.config.get('GITHUB_TOKEN')
    return {'Authorization': f'Bearer {token}'} if token else {}


def get_github_profile():
    username = current_app.config['GITHUB_USERNAME']
    key = f'github_profile_{username}'
    cached = cache_get(key)
    if cached:
        return cached

    res = requests.get(
        f'https://api.github.com/users/{username}',
        headers=_headers(), timeout=8
    )
    res.raise_for_status()
    data = res.json()
    result = {
        'login': data.get('login'),
        'name': data.get('name'),
        'bio': data.get('bio'),
        'avatar_url': data.get('avatar_url'),
        'public_repos': data.get('public_repos'),
        'followers': data.get('followers'),
        'following': data.get('following'),
        'html_url': data.get('html_url'),
    }
    cache_set(key, result, current_app.config['CACHE_TTL'])
    return result


def get_github_repos():
    username = current_app.config['GITHUB_USERNAME']
    key = f'github_repos_{username}'
    cached = cache_get(key)
    if cached:
        return cached

    res = requests.get(
        f'https://api.github.com/users/{username}/repos',
        headers=_headers(),
        params={'sort': 'updated', 'per_page': 20, 'type': 'owner'},
        timeout=8,
    )
    res.raise_for_status()
    repos = res.json()
    result = [
        {
            'name': r['name'],
            'description': r['description'],
            'url': r['html_url'],
            'stars': r['stargazers_count'],
            'forks': r['forks_count'],
            'language': r['language'],
            'updated_at': r['updated_at'],
        }
        for r in repos
    ]
    cache_set(key, result, current_app.config['CACHE_TTL'])
    return result
