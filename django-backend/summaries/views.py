from django.db.models import Sum
from django.utils.timezone import now
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer
from transactions.models import Transaction

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SummaryView(APIView):
    def get(self, request):
        year = int(request.query_params.get("year", now().year))
        month = int(request.query_params.get("month", now().month))

        from calendar import monthrange
        start_date = f"{year}-{month:02d}-01"
        end_day = monthrange(year, month)[1]
        end_date = f"{year}-{month:02d}-{end_day}"

        transaction_summary = (
            Transaction.objects.filter(
                user=request.user,
                created_at=[start_date, end_date]
                )
                .values("category_name")
                .annotate(total_spent=Sum("amount"))
                .order_by("-total_spent")
            )
        
        return Response(transaction_summary)