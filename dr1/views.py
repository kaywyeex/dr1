import json

import requests
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render


def render_app(url, parameters):

    print(3 * "----")
    print(url)
    print(3 * "----")

    data = {"url": url}
    payload = json.dumps(data)

    res = requests.post(
        settings.RENDER_URL,
        json=data,
        data=payload,
        headers={"Content-type": "application/json"}
    )

    return res.json()


def home(request, **kwargs):
    html = render_app(request.path, kwargs)
    return HttpResponse(html)


def posts(request, **kwargs):
    html = render_app(request.path, kwargs)
    return HttpResponse(html)


def todos(request, **kwargs):
    html = render_app(request.path, kwargs)
    return HttpResponse(html)
