from rest_framework import serializers
from .models import Vote

class VoteSerializer(serializers.ModelSerializer):
    vote = serializers.CharField(max_length=10, write_only=True)  # 입력 전용 필드

    class Meta:
        model = Vote
        fields = ['biden_count', 'trump_count', 'vote']
