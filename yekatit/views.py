from django.shortcuts import render, redirect, get_object_or_404
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import HttpResponse, JsonResponse
from django.template import loader
from django.contrib import messages
from .forms import ContactForm
from django.db.models import Q
from .models import Page, Department, StaffProfile, Resource, Gallery, ImageCategory, Contact, NewsOverview, Announcement

def index(request):
    template = loader.get_template("yekatit/index.html")
    context = {
    }
    return HttpResponse(template.render(context, request))

def health_tips(request):
    template = loader.get_template("yekatit/health-tips.html")
    context = {
    }
    return HttpResponse(template.render(context, request))

def events(request):
    template = loader.get_template("yekatit/events.html")
    context = {
    }
    return HttpResponse(template.render(context, request))


def academic_service(request):
    template = loader.get_template("yekatit/academic_service.html")
    context = {
    }
    return HttpResponse(template.render(context, request))

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save form data to the database
            form.save()

            # Return JSON response for AJAX requests
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'success': True, 'message': 'Thank you for contacting us! We will get back to you shortly.'})

            # For non-AJAX requests, you can still use the Django messages framework
            # messages.success(request, 'Thank you for contacting us! We will get back to you shortly.')

        else:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'success': False, 'errors': form.errors})

    else:
        form = ContactForm()

    return render(request, 'yekatit/contact.html', {'form': form})

def org_chart(request):
    template = loader.get_template("yekatit/org_chart.html")
    context = {
    }
    return HttpResponse(template.render(context, request))

def about(request, page_slug):
    page = get_object_or_404(Page, slug=page_slug)
    return render(request, 'yekatit/about.html', {'page': [page]})

def service(request, page_slug):
    page = get_object_or_404(Page, slug=page_slug)
    return render(request, 'yekatit/service.html', {'page': [page]})

def post_grad(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/masters.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def residency(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/residency.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def undergrad(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/undergrad.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def registrar(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/registrar.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def library(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/library.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def academic_research(request, page_slug):
    department = get_object_or_404(Department, slug=page_slug)
    staff_profiles = StaffProfile.objects.filter(department=department)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    return render(request, 'yekatit/academic_research.html', {'department': department, 'staff_profiles': staff_profiles, 'content_list': [page]})

def resource(request, page_slug):
    resource_name = get_object_or_404(Resource, slug=page_slug)
    page = get_object_or_404(Page, slug=page_slug)  # Assuming each department has a corresponding Page entry
    
    return render(request, 'yekatit/resource.html',{
        'resource_name': resource_name,
        'content_list': [page]
    })

def gallery(request):
    # Fetch all image categories
    categories = ImageCategory.objects.all()
    # Fetch all gallery images
    galleries = Gallery.objects.all()

    return render(request, 'yekatit/gallery.html', {
        'categories': categories,
        'galleries': galleries,
    })

def page_view(request, page_slug):
    page = get_object_or_404(Page, slug=page_slug)
    return render(request, 'yekatit/academics.html', {'content_list': [page]})

def content_view(request):
    content_list = Page.objects.all().prefetch_related('images')
    return render(request, 'yekatit/academics.html', {'content_list': content_list})

def announcement(request):
    content_list = Page.objects.all()
    all_announcement = Announcement.objects.all().order_by('-published_date', '-created_at')

    # Pagination
    paginator = Paginator(all_announcement, 3)  # Show 5 announcements per page
    page = request.GET.get('page')
    
    try:
        paginated_announcements = paginator.page(page)
    except PageNotAnInteger:
        paginated_announcements = paginator.page(1)
    except EmptyPage:
        paginated_announcements = paginator.page(paginator.num_pages)

    context = {
        'announcement_items': paginated_announcements,
        'content_list': content_list
    }
    return render(request, 'yekatit/announcement_overview.html', context)

def announcement_detail(request, announcement_slug):
    announcement = get_object_or_404(Announcement, slug=announcement_slug)
    # Split the description into paragraphs based on newlines
    paragraphs = announcement.description.split('\n\n')
    other_announcement = Announcement.objects.exclude(slug=announcement_slug).order_by('-published_date')[:3]

    return render(request, 'yekatit/announcement_detail.html', {
        'announcement': announcement,
        'paragraphs': paragraphs,
        'other_announcement': other_announcement,
    })

def news(request):
    content_list = Page.objects.all()
    all_news = NewsOverview.objects.all().order_by('-published_date', '-created_at')
    context = {
        'news_items': all_news,
        'content_list': content_list
    }
    return render(request, 'yekatit/news_overview.html', context)

def news_detail(request, news_slug):
    news = get_object_or_404(NewsOverview, slug=news_slug)
    # Split the description into paragraphs based on newlines
    paragraphs = news.description.split('\n\n')
    other_news = NewsOverview.objects.exclude(slug=news_slug).order_by('-published_date')[:3]

    return render(request, 'yekatit/news_detail.html', {
        'news': news,
        'paragraphs': paragraphs,
        'other_news': other_news,
    })

def search_news(request):
    query = request.GET.get('q', '').strip().lower()
    current_news_slug = request.GET.get('current_news_slug', '').strip()

    if query:
        # Filter news based on the query and exclude the current news
        news_items = NewsOverview.objects.filter(
            name__icontains=query
        ).exclude(slug=current_news_slug).order_by('-published_date')
    else:
        # Get the top 3 news, excluding the current news, if no query is provided
        news_items = NewsOverview.objects.exclude(slug=current_news_slug).order_by('-published_date')[:3]
    
    results = [
        {
            'slug': news.slug,
            'name': news.name,
            'description': news.description,
            'published_date': news.published_date.strftime("%d %B, %Y")
        }
        for news in news_items
    ]
    return JsonResponse({'results': results})

def search_announcement(request):
    query = request.GET.get('q', '').strip().lower()
    current_announcement_slug = request.GET.get('current_announcement_slug', '').strip()

    if query:
        # Filter news based on the query and exclude the current news
        announcement_items = Announcement.objects.filter(
            name__icontains=query
        ).exclude(slug=current_announcement_slug).order_by('-published_date')
    else:
        # Get the top 3 news, excluding the current news, if no query is provided
        announcement_items = Announcement.objects.exclude(slug=current_announcement_slug).order_by('-published_date')[:3]
    
    results = [
        {
            'slug': announcement.slug,
            'name': announcement.name,
            'description': announcement.description,
            'published_date': announcement.published_date.strftime("%d %B, %Y")
        }
        for announcement in announcement_items
    ]
    return JsonResponse({'results': results})