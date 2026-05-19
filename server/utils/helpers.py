import time

_cache = {}


def cache_get(key: str):
    entry = _cache.get(key)
    if entry and time.time() < entry['expires']:
        return entry['value']
    return None


def cache_set(key: str, value, ttl: int = 3600):
    _cache[key] = {'value': value, 'expires': time.time() + ttl}


def cache_clear(key: str = None):
    if key:
        _cache.pop(key, None)
    else:
        _cache.clear()
