import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    DEBUG = os.getenv('FLASK_DEBUG', 'True') == 'True'

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL', 'sqlite:///portfolio.db'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # CORS
    ALLOWED_ORIGINS = os.getenv('ALLOWED_ORIGINS', 'http://localhost:3000').split(',')

    # Mail (for contact form)
    MAIL_SERVER = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
    MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_USERNAME')
    CONTACT_RECEIVER = os.getenv('CONTACT_RECEIVER', 'yusufjohn252007@gmail.com')

    # GitHub
    GITHUB_USERNAME = os.getenv('GITHUB_USERNAME', 'yusufjohn-shaik')
    GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')

    # LeetCode
    LEETCODE_USERNAME = os.getenv('LEETCODE_USERNAME', 'shaikyusufjohn')

    # Cache TTL (seconds)
    CACHE_TTL = int(os.getenv('CACHE_TTL', 3600))
