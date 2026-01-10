from django.shortcuts import render, redirect, HttpResponse
from .forms import ContactForm

# Create your views here.
def home_view(request):
    return render(request, 'pages/home.html')

def about_view(request):
    return render(request, 'pages/about.html')

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process form data 
            pass
            return redirect('success')
    else:
        form = ContactForm()
    return render(request, 'pages/contact.html', {'form': form})

def success_view(request):
    return HttpResponse("Thank you for your message. We will get back to you soon.")