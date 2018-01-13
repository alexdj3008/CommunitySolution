from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^proyecto/$', views.proyectoList.as_view()),
    url(r'^proyecto/(?P<pk>[0-9]+)/$', views.proyectoDetail.as_view()),
    url(r'^usuarios/$', views.usuariosList.as_view()),
    url(r'^usuarios/(?P<pk>[0-9]+)/$', views.usuariosDetail.as_view()),
    url(r'^comentario/$', views.comentarioList.as_view()),
    url(r'^comentario/(?P<pk>[0-9]+)/$', views.comentarioDetail.as_view()),
    url(r'^publicacion/$', views.publicacionList.as_view()),
    url(r'^publicacion/(?P<pk>[0-9]+)/$', views.publicacionDetail.as_view()),
    url(r'^like/$', views.likeList.as_view()),
    url(r'^like/(?P<pk>[0-9]+)/$', views.likeDetail.as_view()),
]
