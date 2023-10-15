import requests 
from geopy.distance import geodesic

def get_object_coordinates(object_name):
# Функция для получения координат объекта с использованием OpenStreetMap API
    base_url = "https://nominatim.openstreetmap.org/search"
    params = {
        'q': object_name,
        'format': 'json',
    }
    posponse = requests.get(base_url, params=params)
    data = posponse.json()

    if data:
        coords = []
        for location in data:
            latitude = float(location['lat'])
            longitude = float(location['lon'])
            coords.append((latitude, longitude))
        return coords
    else:
        return None

def calculate_distance(coord1, coord2):
# Используйте библиотеку geopy для расчета расстояния между двумя точками
    return geodesic(coord1, coord2).kilometers

def count_objects_in_radius(center_coord, objects_coords, radius_km):
    count = 0
    if not objects_coords:
        return 0
    for obj_coord in objects_coords:
        distance_between_objects = calculate_distance(center_coord, obj_coord)
        if distance_between_objects <= radius_km:
            count += 1
    return count

radius_km = 10.0 # Радиус в километрах


def main (center):
    center_coords = get_object_coordinates(center)[0]
    pos = {}
    pos["Бассейны"] = count_objects_in_radius(center_coords, get_object_coordinates("Бассейн Екатеринбург, Россия"), radius_km)
    pos["Стадионы"] = count_objects_in_radius(center_coords, get_object_coordinates("Стадион Екатеринбург, Россия"), radius_km)
    pos["Манежи"] = count_objects_in_radius(center_coords, get_object_coordinates("Манеж Екатеринбург, Россия"), radius_km)
    pos["Фитнес-клубы"] = count_objects_in_radius(center_coords, get_object_coordinates("Фитнес-клуб Екатеринбург, Россия"), radius_km)
    pos["Спортивные залы"] = count_objects_in_radius(center_coords, get_object_coordinates("Спортивный зал Екатеринбург, Россия"), radius_km)
    pos["Велодорожки"] = count_objects_in_radius(center_coords, get_object_coordinates("Велодорожка Екатеринбург, Россия"), radius_km)
    pos["Катки"] = count_objects_in_radius(center_coords, get_object_coordinates("Каток Екатеринбург, Россия"), radius_km)
    pos["Парки"] = count_objects_in_radius(center_coords, get_object_coordinates("Парк Екатеринбург, Россия"), radius_km)
    pos["Рынки"] = count_objects_in_radius(center_coords, get_object_coordinates("Рынок Екатеринбург, Россия"), radius_km)

    neg = {}
    neg["Бары"] = count_objects_in_radius(center_coords, get_object_coordinates("Бар Екатеринбург, Россия"), radius_km)
    neg["Пабы"] = count_objects_in_radius(center_coords, get_object_coordinates("Паб Екатеринбург, Россия"), radius_km)
    neg["Винные магазины"] = count_objects_in_radius(center_coords, get_object_coordinates("Винный магазин Екатеринбург, Россия"), radius_km)
    neg["Фаст-фуды"] = count_objects_in_radius(center_coords, get_object_coordinates("Фастфуд Екатеринбург, Россия"), radius_km)
    neg["Магазин сигарет"] = count_objects_in_radius(center_coords, get_object_coordinates("Сигареты Екатеринбург, Россия"), radius_km)

    count_pos = sum(pos.values())
    count_neg = sum(neg.values())  

    return {
    "Исследуемы объект": center,
    "Кол-во бассейнов": pos["Бассейны"],
    "Кол-во стадионов": pos["Стадионы"],
    "Кол-во манежей": pos["Манежи"],
    "Кол-во фитнес-клубоы": pos["Фитнес-клубы"],
    "Кол-во спортивных залов": pos["Спортивные залы"],
    "Кол-во велодорожек": pos["Велодорожки"],
    "Кол-во катков": pos["Катки"],
    "Кол-во парков": pos["Парки"],
    "Кол-во рынков": pos["Рынки"],

    "Кол-во баров": neg["Бары"],
    "Кол-во пабов": neg["Пабы"],
    "Кол-во винных магазинов": neg["Винные магазины"],
    "Кол-во фаст-фудов": neg["Фаст-фуды"],
    "Кол-во магазинов сигарет": neg["Магазин сигарет"],

    "Общая оценка объекта: ": count_pos / (count_pos + count_neg)}

print(main("Университет Екатеринбург Россия"))