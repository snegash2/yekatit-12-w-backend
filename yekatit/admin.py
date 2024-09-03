from django.contrib import admin

# Register your models here.
from .models import Page, Medicine, PublicHealth, Fellowship, Undergrad, Residency, Master, Registrar, Library, Research, Department, StaffProfile, Resource, ImageCategory, Gallery, Announcement, Contact, NewsOverview

@admin.register(Medicine)
class MedicineAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(PublicHealth)
class PublicHealthAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Fellowship)
class FellowshipAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Undergrad)
class UndergradAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Residency)
class ResidencyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Master)
class MasterAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Registrar)
class RegistrarAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Library)
class LibraryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

@admin.register(Research)
class ResearchAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'image', 'link', 'page')

admin.site.register(Page)

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(StaffProfile)
class StaffProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'title', 'department')

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('name',)

admin.site.register(ImageCategory)
admin.site.register(Gallery)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'subject', 'timestamp')  # Customize fields as needed
    search_fields = ('name', 'email', 'subject')  # Enable search functionality
    list_filter = ('timestamp',)  # Filter by date if needed

class NewsOverviewAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'published_date')
    search_fields = ('name', 'description')
    list_filter = ('published_date',)

admin.site.register(NewsOverview, NewsOverviewAdmin)

class AnnouncementAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'published_date')
    search_fields = ('name', 'description')
    list_filter = ('published_date',)

admin.site.register(Announcement, AnnouncementAdmin)