from django.urls import path
from .views import shop_donate, get_shop_donations, admin_to_receiver, get_receiver_donations

urlpatterns = [
    path('shop/donate/', shop_donate),
    path('shop/donations/', get_shop_donations),
    path('admin/receiver/', admin_to_receiver),
    path('admin/receivers/', get_receiver_donations),
]
