from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Programme, Item, Exercise, Category, Personalbest


class PersonalbestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Personalbest
        fields = ('id', 'weight', 'date',)

class ProgrammeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Programme
        fields = ('id', 'name', 'image', 'location',)


class ItemSerializer(serializers.ModelSerializer):

    personalbests = PersonalbestSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ('id', 'day', 'exercise', 'personalbests', 'sets', 'reps',)


class ExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercise
        fields = ('id', 'name', 'description', 'image', 'categories')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name',)



class PopulatedItemSerializer(ItemSerializer):

    exercise = ExerciseSerializer()
    personalbests = PersonalbestSerializer(many=True)



class PopulatedProgrammeSerializer(ProgrammeSerializer):

    items = PopulatedItemSerializer(many=True)
    user = UserSerializer()

    class Meta(ProgrammeSerializer.Meta):
        fields = ('id', 'name', 'image', 'location', 'items', 'user',)

class PopulatedCategorySerializer(CategorySerializer):

    exercises = ExerciseSerializer(many=True)





# class ItemSerializer(serializers.ModelSerializer):
#     exercises = ExerciseSerializer(many=True)
#     programmes = NestedProgrammeSerializer(many=True)
#
#     class Meta:
#         model = Item
#         fields = ('id', 'day', 'exercises', 'programmes',)
#
#
#
# class ProgrammeSerializer(serializers.ModelSerializer):
#     item = NestedItemSerializer()
#     user = UserSerializer(read_only=True)# changes user id to username, email
#
#     class Meta:
#         model = Programme
#         fields = ('id', 'name', 'item', 'user',)
