from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SummaryView

router = DefaultRouter()
router.register(r'categories',CategoryViewSet, basename='categories')
# router.register(r'summaries/monthly', SummaryView.as_view, basename='monthly-summary')

urlpatterns = [
    path('summaries/monthly/', SummaryView.as_view(), name='monthly-summary'),
]

urlpatterns += router.urls