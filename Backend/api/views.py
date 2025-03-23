from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Task, Donation, ShopDonation, ReceiverDonation
from .serializers import TaskSerializer, DonationSerializer, ShopDonationSerializer, ReceiverDonationSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def shop_donate(request):
    data = request.data
    data['shop'] = request.user.id
    serializer = ShopDonationSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Shop donation successful'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_shop_donations(request):
    donations = ShopDonation.objects.all()
    serializer = ShopDonationSerializer(donations, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def admin_to_receiver(request):
    data = request.data
    data['receiver'] = request.user.id
    serializer = ReceiverDonationSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Items successfully sent to receiver'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_receiver_donations(request):
    donations = ReceiverDonation.objects.all()
    serializer = ReceiverDonationSerializer(donations, many=True)
    return Response(serializer.data)