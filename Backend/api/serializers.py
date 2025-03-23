from rest_framework import serializers
from .models import Task, Donation, ShopDonation, ReceiverDonation

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'

class ShopDonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopDonation
        fields = '__all__'

class ReceiverDonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReceiverDonation
        fields = '__all__'

