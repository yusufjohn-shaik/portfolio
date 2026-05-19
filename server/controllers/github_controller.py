from services.github_service import get_github_profile, get_github_repos
from utils.response import success, error


def github_profile():
    try:
        data = get_github_profile()
        return success(data)
    except Exception as e:
        return error(str(e), 502)


def github_repos():
    try:
        data = get_github_repos()
        return success(data)
    except Exception as e:
        return error(str(e), 502)
