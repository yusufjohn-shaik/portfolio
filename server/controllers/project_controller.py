from utils.response import success

# Projects are static data — served from frontend data files.
# This controller exists if you want to move them to a DB later.

PROJECTS = [
    {
        'id': 1,
        'slug': 'flask-auth-system',
        'title': 'Flask Authentication System',
        'tagline': 'Secure login and signup system built with Flask',
        'tags': ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
        'category': 'Backend',
        'githubUrl': 'https://github.com/yusufjohn-shaik',
        'year': 2025,
    },
    {
        'id': 2,
        'slug': 'portfolio-website',
        'title': 'Portfolio Website',
        'tagline': 'Full stack developer portfolio with React and Flask',
        'tags': ['React', 'Tailwind CSS', 'Flask', 'Vite'],
        'category': 'Full Stack',
        'githubUrl': 'https://github.com/yusufjohn-shaik',
        'year': 2026,
    },
]


def get_projects():
    return success(PROJECTS)


def get_project(slug):
    project = next((p for p in PROJECTS if p['slug'] == slug), None)
    if not project:
        from utils.response import error
        return error('Project not found', 404)
    return success(project)
