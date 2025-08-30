from rest_framework.routers import DefaultRouter
from .views import UserModelViewSet

router = DefaultRouter()
router.register('users', UserModelViewSet, basename='user')

urlpatterns = router.urls