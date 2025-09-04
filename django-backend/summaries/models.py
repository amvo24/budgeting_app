from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Category(models.Model):
    name = models.CharField(max_length=50, null=False)
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name="categories"
    )

    def __str__(self):
        return self.name


class Summary(models.Model):
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name="summaries"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="summaries"
    )
    month = models.IntegerField()
    year = models.IntegerField()
    total_spent = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = ("user", "category", "month", "year")  # ensures one summary per user/category/month

    def __str__(self):
        return f"{self.user} - {self.category} - {self.month}/{self.year}"