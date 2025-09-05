from django.db import models

# Create your models here.
class Transaction(models.Model):
    CATEGORY_CHOICES = [
        ("groceries", "Groceries"),
        ("bills", "Bills"),
        ("utilities", "Utilities"),
        ("rent/mortgage", "Rent/Mortgage"),
        ("entertainment", "Entertainment"),
        ("dining", "Dining"),
        ("misc", "Misc"),   
    ]

    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=255)
    date = models.DateField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    #PAID BY WILL BE A FOREIGN KEY TO USER MODEL LATER ON
    paid_by = models.CharField(max_length=100)     
    
    def __str__(self):
        return f"{self.description} - {self.category} - {self.amount}"
