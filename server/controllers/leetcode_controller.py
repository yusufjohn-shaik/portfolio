from services.leetcode_service import get_leetcode_stats
from utils.response import success, error


def leetcode_stats():
    try:
        data = get_leetcode_stats()
        return success(data)
    except Exception as e:
        return error(str(e), 502)
