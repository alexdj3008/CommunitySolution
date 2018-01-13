from __future__ import unicode_literals
from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class usuarios(models.Model):
    usuario    = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre     = models.CharField(max_length=50)
    sexo       = models.CharField(max_length=1)
    fecha_nac  = models.DateTimeField(default=datetime.now())
    telefono   = models.CharField(max_length=8)
    direccion  = models.CharField(max_length=60)
    foto       = models.ImageField(upload_to='foto_usuarios')
    
class proyecto(models.Model):
    #id_usuario   = models.CharField(max_length=4, default="")
    #foto         = models.ImageField(upload_to='foto_usuarios')
    categoria = models.CharField(max_length=20, default="")
    nombre       = models.CharField(max_length=50)
    descripcion  = models.CharField(max_length=100)
    fecha_publ   = datetime.now()
    lugar        = models.CharField(max_length=100, blank=True)


class comentario(models.Model):
    id_usuario = models.CharField(max_length=4, default="")
    id_comentario = models.CharField(max_length=4, default="")
    id_proyecto = models.ForeignKey(proyecto)
    contenido = models.CharField(max_length=100)
    fecha = datetime.now()




class publicacion(models.Model):
    id_usuario     = models.CharField(max_length=4, default="")
    descripcion    = models.CharField(max_length=100)
    fecha_publ     = datetime.now()
    #foto           = models.ImageField(upload_to='foto_publicacion')


class like(models.Model):
    id_proyecto  = models.CharField(max_length=4)
    fecha_publ   = datetime.now()



