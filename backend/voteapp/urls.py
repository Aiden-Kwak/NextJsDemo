from django.urls import path
from .views import PostAPI, GetAPI

app_name = 'voteapp'

urlpatterns = [
    path('post-vote', PostAPI.as_view(), name='post-vote'),
    path('get-vote', GetAPI.as_view(), name='get-vote'),
]