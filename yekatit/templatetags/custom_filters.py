from django import template

register = template.Library()

@register.filter(name='split_paragraphs')
def split_paragraphs(value):
    """Split text by custom delimiter into paragraphs."""
    return value.split('\r\n\r\n')