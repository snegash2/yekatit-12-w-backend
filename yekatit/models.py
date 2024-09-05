import uuid
from django.db import models
from django.utils.text import slugify
from django.core.validators import RegexValidator

# Create your models here.

class Page(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    slug = models.SlugField(unique=True, null=True, blank=True)

    def __str__(self):
        return self.title
    
class Medicine(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='medicines')

    def __str__(self):
        return self.name
    
class PublicHealth(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='publichealths')

    def __str__(self):
        return self.name
    
class Fellowship(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='fellowships')

    def __str__(self):
        return self.name
    
class Undergrad(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='undergrads')

    def __str__(self):
        return self.name

class Residency(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='residencys')

    def __str__(self):
        return self.name
    
class Master(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='masters')

    def __str__(self):
        return self.name
    
class Registrar(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='registrars')

    def __str__(self):
        return self.name
    
class Library(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='libraries')

    def __str__(self):
        return self.name
    
class Research(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='course_images/')
    link = models.URLField(max_length=200, blank=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='researches')

    def __str__(self):
        return self.name

class NewsOverview(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='news_images/', default='default_images/default.png')
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='newsoverview')
    published_date = models.DateField(default='2000-01-01')
    created_at = models.DateTimeField(auto_now_add=True)  # Add this field to track the creation time
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=False, default='')

    def save(self, *args, **kwargs):
        if not self.slug:  # Only generate a slug if it's not already set
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Department(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, default=uuid.uuid4)

    def save(self, *args, **kwargs):
        if not self.slug or self.slug.startswith('temp-slug'):
            self.slug = self.generate_unique_slug()
        super().save(*args, **kwargs)

    def generate_unique_slug(self):
        slug = slugify(self.name)
        unique_slug = slug
        num = 1
        while Department.objects.filter(slug=unique_slug).exists():
            unique_slug = f'{slug}-{num}'
            num += 1
        return unique_slug

    def __str__(self):
        return self.name
     
class StaffProfile(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='staff_pictures/', default='default_images/default.png')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.title} ({self.department.name})"
    

class Resource(models.Model):
    name = models.CharField(max_length=255)
    # page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='resources')
    slug = models.SlugField(unique=True, default='temp-slug')

    def save(self, *args, **kwargs):
        if not self.slug or self.slug == 'temp-slug':
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name
    
class ImageCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Gallery(models.Model):
    category = models.ForeignKey(ImageCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    description = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.description} ({self.category.name})"
    
class Announcement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='announcement_images/', default='default_images/default.png')
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='announcement')
    published_date = models.DateField(default='2024-01-01')
    created_at = models.DateTimeField(auto_now_add=True)  # Add this field to track the creation time
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=False, default='')

    def save(self, *args, **kwargs):
        if not self.slug:  # Only generate a slug if it's not already set
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(
        max_length=10,
        validators=[RegexValidator(regex=r'^\d{10}$', message='Phone number must be exactly 10 digits.')],
        help_text="Enter 10-digit phone number"
    )
    subject = models.CharField(max_length=255)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['-timestamp']