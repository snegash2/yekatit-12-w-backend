from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .models import NewsOverview, Announcement


urlpatterns = [
    path("about/", views.about, {'page_slug': 'about'}, name='about'),
    path('org-chart/', views.org_chart, name='org_chart'),
    path("service/", views.service, {'page_slug': 'service'}, name='service'),
    path('contact/', views.contact, name='contact'),
    path('events/', views.events, name='events'),
    path("health-tips/", views.health_tips, name='health_tips'),
    path('gallery/', views.gallery, name='gallery'),
    path('academic-service/', views.academic_service, name='academic_service'),
    path('residency-program/<slug:page_slug>/', views.residency, name='residency'),
    path('undergraduate-program/<slug:page_slug>/', views.undergrad, name='undergrad'),
    path('postgrad-program/<slug:page_slug>/', views.post_grad, name='post_grad'),
    path('registrar/<slug:page_slug>/', views.registrar, name='registrar'),
    path('library/<slug:page_slug>/', views.library, name='library'),
    path('research-and-publication-department/<slug:page_slug>/', views.academic_research, name='academic_research'),
    path('resource/<slug:page_slug>/', views.resource, name='resource'),
    path('news/', views.news, name='news'),
    path('news/<slug:news_slug>/', views.news_detail, name='news_detail'),
    path('announcement/', views.announcement, name='announcement'),
    path('announcement/<slug:announcement_slug>/', views.announcement_detail, name='announcement_detail'),
    path('search-news/', views.search_news, name='search_news'),  # AJAX search endpoint
    path('search-announcement/', views.search_announcement, name='search_announcement'),  # AJAX search endpoint
    
    path('<slug:page_slug>/', views.page_view, name='page_view'),
    path("", views.index, name="index"),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
