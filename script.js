// Récupère les paramètres de l'URL pour déterminer la planète sélectionnée
const urlParams = new URLSearchParams(window.location.search);
const planetName = urlParams.get('name');

// Dictionnaire des données des planètes
const planetData = {
    "Mercure": {
        "image": "https://th.bing.com/th?id=OIP.9H1wqdjFijWxZup99MgnwQHaHZ&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        "description": "Mercure est la planète la plus proche du Soleil et la plus petite du système solaire."
    },
    "Vénus": {
        "image": "https://th.bing.com/th/id/OIP.YAyo6GYBnQLCsGMx4Mv5ygHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Vénus est la deuxième planète du système solaire et possède une atmosphère dense et chaude."
    },
    "Terre": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        "description": "La Terre est la troisième planète du système solaire et la seule connue pour abriter la vie."
    },
    "Mars": {
        "image": "https://th.bing.com/th/id/OIP.C-wlqwznUS-AUs5MKNgfHAHaHQ?w=209&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Mars est souvent appelée la planète rouge en raison de son sol riche en oxyde de fer."
    },
    "Jupiter": {
        "image": "https://th.bing.com/th/id/OIP.q_aVSekcJR5Qf9bzpH1jTAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Jupiter est la plus grande planète du système solaire, célèbre pour sa Grande Tache Rouge."
    },
    "Saturne": {
        "image": "https://th.bing.com/th/id/OIP.LOup40FxIktushsPtOfimwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Saturne est la deuxième plus grande planète du système solaire et possède des anneaux impressionnants."
    },
    "Uranus": {
        "image": "https://th.bing.com/th/id/OIP.IXJnMocYt9mQkfAAn9bJywHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Uranus est une planète géante gazeuse, connue pour son inclinaison extrême."
    },
    "Neptune": {
        "image": "https://th.bing.com/th/id/OIP.e-OsymCQTs5igSAHF5zq8wHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Neptune est la planète la plus éloignée du Soleil, célèbre pour sa couleur bleue intense."
    }
};

// Mise à jour de la page avec les informations de la planète
if (planetData[planetName]) {
    document.getElementById('planet-name').innerText = planetName;
    document.getElementById('planet-image').src = planetData[planetName].image;
    document.getElementById('planet-description').innerText = planetData[planetName].description;
} else {
    document.getElementById('planet-name').innerText = "Planète inconnue";
    document.getElementById('planet-description').innerText = "Désolé, nous n'avons pas d'informations sur cette planète.";
}
