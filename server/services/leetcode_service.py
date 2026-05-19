import requests
from flask import current_app
from utils.helpers import cache_get, cache_set


def get_leetcode_stats():
    username = current_app.config['LEETCODE_USERNAME']
    key = f'leetcode_stats_{username}'
    cached = cache_get(key)
    if cached:
        return cached

    # Using public stats API
    res = requests.get(
        f'https://leetcode-stats-api.herokuapp.com/{username}',
        timeout=8
    )
    res.raise_for_status()
    data = res.json()
    cache_set(key, data, current_app.config['CACHE_TTL'])
    return data
