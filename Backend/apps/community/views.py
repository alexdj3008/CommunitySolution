from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics
from .models import usuarios,proyecto,publicacion,like,comentario
from .serializers import (usuariosSerializer,usuariosListSerializer,proyectoSerializer,proyectoListSerializer,
comentarioSerializer,comentarioListSerializer,publicacionSerializer,publicacionListSerializer,
likeSerializer,likeListSerializer)


class proyectoList(generics.ListCreateAPIView):
    queryset = proyecto.objects.all()
    serializer_class = proyectoListSerializer

class proyectoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proyecto.objects.all()
    serializer_class = proyectoSerializer

class usuariosList(generics.ListCreateAPIView):
    queryset = usuarios.objects.all()
    serializer_class = usuariosListSerializer

class usuariosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = usuarios.objects.all()
    serializer_class = usuariosSerializer

class comentarioList(generics.ListCreateAPIView):
    queryset = comentario.objects.all()
    serializer_class = comentarioListSerializer

class comentarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = comentario.objects.all()
    serializer_class = comentarioSerializer

class publicacionList(generics.ListCreateAPIView):
    queryset = publicacion.objects.all()
    serializer_class = publicacionListSerializer

class publicacionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = publicacion.objects.all()
    serializer_class = publicacionSerializer

class likeList(generics.ListCreateAPIView):
    queryset = like.objects.all()
    serializer_class = likeListSerializer

class likeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = like.objects.all()
    serializer_class = likeSerializer
