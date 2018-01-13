from rest_framework import serializers

from .models import  proyecto,usuarios,comentario,publicacion,like

from rest_framework.authtoken.models import Token

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ('key', 'user')

class proyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = proyecto
        fields=('id','nombre', 'categoria',
            'descripcion', 'lugar')

class proyectoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = proyecto
        fields=('id','nombre', 'categoria',
            'descripcion', 'lugar')

class usuariosListSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuarios
        fields=('usuario_id','nombre','sexo','fecha_nac','telefono')

class usuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuarios
        fields=('usuario_id','nombre','sexo','fecha_nac','telefono')

class comentarioListSerializer(serializers.ModelSerializer):
    class Meta:
        model = comentario
        fields=('id','id_usuario','id_comentario','id_proyecto',
        'contenido','fecha')
        

class comentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = comentario
        fields=('id','id_usuario','id_comentario','id_proyecto',
        'contenido','fecha')

class publicacionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = publicacion
        fields=('id','id_usuario', 'descripcion',
         'fecha_publ')
        ordering=('-id') 

class publicacionSerializer(serializers.ModelSerializer):
     class Meta:
        model = publicacion
        fields=('id','id_usuario', 'descripcion',
         'fecha_publ')

class likeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = like
        fields=('id_proyecto','fecha_publ')

class likeSerializer(serializers.ModelSerializer):
     class Meta:
        model = like
        fields=('id_proyecto','fecha_publ')


