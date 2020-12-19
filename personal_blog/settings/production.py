from .base import *

DEBUG = False

try:
    from .local import *
except ImportError:
    pass

SECURE_SSL_REDIRECT = True
