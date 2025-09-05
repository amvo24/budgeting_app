from rest_framework import viewsets
from rest_framework.views import APIView
from .models import Category
from .serializers import CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# class SummaryView(APIView):
#     def get(self, request):
#         queryset = 