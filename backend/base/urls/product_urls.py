from django.urls import path
from base.views import product_views as views


urlpatterns = [
  
    path('', views.getProducts, name='products'),
<<<<<<< HEAD
=======
    path('create/', views.createProduct, name='product-create'),
    path('upload/', views.uploadImage, name='image-upload'),
    
    path('<str:pk>/reviews/', views.createProductReview, name='create-review'),
    path('top/', views.getTopProducts, name='top-products'),
>>>>>>> parent of c2cf0a0 (Revert "Going to merge my frontend files with my backend")
    path('<str:pk>/', views.getProduct, name='product'),
]