from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

