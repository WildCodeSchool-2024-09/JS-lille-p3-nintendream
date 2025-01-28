CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(80) NOT NULL,
    name VARCHAR(80) NOT NULL,
    age INT NOT NULL,
    mail VARCHAR(80) NOT NULL,
    username VARCHAR(80) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(80) NOT NULL DEFAULT "user"
);

CREATE TABLE zone (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    `character` VARCHAR(80) NOT NULL,
    parade VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL
);

    CREATE TABLE attraction (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(80) NOT NULL,
        waiting_time VARCHAR(80) NOT NULL,
        type VARCHAR(80) NOT NULL,
        min_height VARCHAR(80) NOT NULL,
        zone_id INT NULL,
        schedule VARCHAR(80) NOT NULL,
        description TEXT NOT NULL,
        state VARCHAR(80) NOT NULL,
        img_src VARCHAR(300),
        FOREIGN KEY (zone_id) REFERENCES zone(id)
    );

CREATE TABLE restaurant (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    intro TEXT NOT NULL,
    text TEXT NOT NULL,
    adult_price DECIMAL(10, 2) NOT NULL,
    kids_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE hotel (
    id INT PRIMARY KEY,
    img VARCHAR(255),
    name VARCHAR(255),
    distance VARCHAR(50),
    hotel_price VARCHAR(50),
    description TEXT,
    secondary_description TEXT,
    tertiary_description TEXT
);

CREATE TABLE room (
    id INT PRIMARY KEY,
    hotel_id INT,
    img VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    price VARCHAR(50),
    link_title VARCHAR(255),
    FOREIGN KEY (hotel_id) REFERENCES hotel(id)
);

CREATE TABLE event (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    short_description VARCHAR(255) NOT NULL,
    description text NOT NULL,
    schedule VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL,
    zone_id INT NOT NULL,
    FOREIGN KEY (zone_id) REFERENCES zone(id)
);

CREATE TABLE operate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_id INT,
    restaurant_id INT,
    zone_id INT,
    attraction_id INT,
    user_id INT,
    event_id INT,
    FOREIGN KEY (hotel_id) REFERENCES hotel(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
    FOREIGN KEY (zone_id) REFERENCES zone(id),
    FOREIGN KEY (attraction_id) REFERENCES attraction(id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (event_id) REFERENCES event(id)
);

INSERT INTO zone (name, `character`,parade, img_src) VALUES
('Mario', 'Mario, Luigi, Peach, Bowser', 'Mario Kart Live Show : La Course Arc-en-Ciel', ''),
('Zelda', 'Link, Zelda, Ganondorf', "Zelda : l'Éveil du Héros", ''),
('Pokémon', 'Pikachu, Bulbizarre, Salamèche, Carapuce', 'Pokémon Parade : Attrapez-les tous !', ''),
('Kirby', 'Kirby, Meta Knight, Roi Dadidou', 'Kirby Parade : L"Étoile Magique"', '');

INSERT INTO attraction ( name, waiting_time, type, min_height, schedule, state, description) VALUES
( 'Mario Kart Racing', '45 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Vivez l’intensité d’une course effrénée inspirée de Mario Kart avec des virages serrés et des obstacles interactifs.'),
( 'Bowser’s Castle Escape', '30 min', 'sensation fortes', '100 cm', '9h - 22h', 'Open', 'Traversez les pièges du château de Bowser dans une aventure immersive pleine de rebondissements.'),
( 'Peach’s Garden Adventure', '15 min', 'enfant', '90 cm', '9h - 22h', 'Open', 'Un manège féérique au milieu des fleurs magiques du jardin de Peach.'),
( 'Yoshi’s Egg Hunt', '15 min', 'famille', '100 cm', '9h - 22h', 'Open', 'Aidez Yoshi à retrouver ses œufs perdus dans une chasse ludique pour toute la famille.'),
( 'Luigi’s Haunted Mansion', '40 min', 'sensation fortes', '110 cm', '9h - 22h', 'Open', 'Explorez un manoir hanté dans l’univers de Luigi et affrontez des fantômes farceurs.'),
( 'Zelda: Master Sword Quest', '40 min', 'famille', '130 cm', '9h - 22h', 'Open', 'Devenez un héros en récupérant l’épée de légende dans une quête interactive au cœur d’Hyrule.'),
( 'Hyrule Sky Glider', '25 min', 'famille', '120 cm', '9h - 22h', 'Open', 'Survolez les paysages d’Hyrule et admirez ses merveilles depuis les airs.'),
( 'Dungeon Escape Challenge', '50 min', 'sensation fortes', '140 cm', '9h - 22h', 'Open', 'Résolvez des énigmes pour vous échapper d’un donjon périlleux et libérer Hyrule.'),
( 'Goron’s Rock Climb', '20 min', 'enfant', 'No restriction', '9h - 22h', 'Open', 'Affrontez un mur d’escalade inspiré des montagnes Goron.'),
( 'Pikachu Thunder Roller', '35 min', 'sensation fortes', '110 cm', '9h - 22h', 'Open', 'Un parcours rapide et électrique inspiré des pouvoirs de Pikachu.'),
( 'Pokémon Trainer Arena', '20 min', 'famille', '100 cm', '9h - 22h', 'Open', 'Participez à un spectacle interactif pour devenir un vrai maître Pokémon.'),
( 'Eevee Evolution Carousel', '10 min', 'enfant', '90 cm', '9h - 22h', 'Open', 'Un manège charmant où chaque siège est une évolution d’Eevee.'),
( 'Snorlax’s Lazy River', '25 min', 'famille', 'No restriction', '9h - 22h', 'Open', 'Détendez-vous sur une rivière paisible avec Snorlax et ses amis.'),
('Gengar’s Haunted Labyrinth', '30 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Trouvez votre chemin à travers un labyrinthe hanté par Gengar.'),
( 'Kirby’s Dreamland Ride', '20 min', 'famille', '85 cm', '9h - 22h', 'Open', 'Plongez dans l’univers coloré de Dreamland avec Kirby à vos côtés.'),
( 'Waddle Dee’s Playground', '10 min', 'enfant', 'No restriction', '9h - 22h', 'Open', 'Un espace de jeu interactif conçu pour les plus petits.'),
( 'Star Allies Spinning Cups', '15 min', 'enfant', '90 cm', '9h - 22h', 'Open', 'Faites tourner votre tasse dans ce manège amusant aux couleurs de Kirby et ses amis.'),
( 'Meta Knight’s Flight Challenge', '25 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Volez à travers des champs de bataille célestes avec Meta Knight.'),
( 'Donkey Kong Jungle Swing', '30 min', 'sensation fortes', '110 cm', '9h - 22h', 'Open', 'Balancez-vous dans une jungle inspirée de Donkey Kong.'),
( 'Mario & Sonic Olympic Dash', '35 min', 'famille', '130 cm', '9h - 22h', 'Open', 'Relevez des défis sportifs en compagnie de Mario et Sonic.');


INSERT INTO event (name, short_description, description, schedule, img_src, zone_id) VALUES
("Mario kart live show : la course arc en ciel","Rejoignez Mario et ses amis pour une course folle sur la piste arc-en-ciel, où l'univers du jeu vidéo prend vie avec des karts en taille réelle et une expérience interactive inédite ! ","Un spectacle interactif où Mario, Luigi, Peach et Bowser s'affrontent sur une piste de course dynamique inspirée de la célèbre Rainbow Road. Grâce à des véhicules téléguidés géants et des projections LED, le public vivra une véritable course effrénée. Les spectateurs pourront même 'lancer' des bananes et des carapaces via des applications mobiles connectées pour influencer la course !","10h","/imageEvents/mario-kart-event.jpg",1),
("Zelda: L'éveil du Héros du temps", "Partez à l'aventure dans une chasse au trésor épique pour retrouver la légendaire Master Sword ! Explorez le parc, résolvez des énigmes et devenez le héros du royaume de Hyrule.","Zelda : L'Éveil du Héros vous invite à plonger dans une quête palpitante pour retrouver l’emblématique Master Sword, cachée quelque part dans les terres enchantées de Nintendream. Cette chasse au trésor immersive vous fera traverser des paysages inspirés des lieux mythiques du royaume d’Hyrule. À chaque étape, des énigmes ingénieuses et des défis captivants mettront votre courage, votre sagacité et votre esprit d’équipe à l’épreuve. Vous croiserez peut-être la route de personnages emblématiques prêts à vous offrir leur aide – ou à compliquer votre mission ! De la Forêt Kokiri aux sommets du Mont du Péril, chaque exploration vous rapprochera de votre destinée : devenir le héros capable de protéger Hyrule des forces du mal. Préparez-vous à une aventure inoubliable où chaque instant est une célébration de l’univers magique de Zelda.","10h, 15h, 16h", "/imageEvents/zelda-quest-event.jpg",2),
("Donkey Kong Jungle Groove", "Un spectacle de percussions qui vous emmènera à travers la jungle de Donkey kong !", "Donkey Kong Jungle Groove est un spectacle vibrant et rythmé qui vous transporte au cœur de la jungle luxuriante de Donkey Kong. Laissez-vous emporter par une symphonie percussive envoûtante, où chaque battement raconte une histoire sauvage et palpitante. Les tambours résonnent comme les battements de la jungle, accompagnés de chorégraphies dynamiques et de projections immersives qui recréent l’univers tropical emblématique. Vous suivrez Donkey Kong et ses amis dans une aventure musicale riche en surprises, où les rythmes effrénés et les mélodies entraînantes captiveront petits et grands. Préparez-vous à une expérience multisensorielle qui fera vibrer toute la salle et réveillera l’explorateur qui sommeille en vous ! ","14h, 17h, 19h", "/imageEvents/donkey-kong-event.jpg", 3);


INSERT INTO hotel (id, img, name, distance, hotel_price, description, secondary_description, tertiary_description)
VALUES
(1, "/imagesHotel/pixel-paradise.webp", "Pixel Paradise Hotel", "300 m du parc", "Entre 90 et 200 €",
 "Niché dans un décor moderne et vibrant, le Pixel Paradise Hotel vous accueille pour un séjour inoubliable !",
 "Bienvenue au Pixel Hotel Paradise, un lieu magique où l'univers des jeux vidéo prend vie. Niché dans un décor moderne et vibrant, cet hôtel unique allie confort, créativité et une immersion totale dans la culture gaming",
 "Bienvenue au Pixel Hotel Paradise, là où confort, modernité et convivialité se rencontrent pour créer le séjour parfait ! Nos 150 chambres élégantes et lumineuses, conçues pour accueillir de 1 à 5 personnes, s’adaptent à toutes vos envies, que vous voyagiez en solo, en couple ou en famille. Profitez d’un cadre contemporain où chaque détail a été pensé pour votre bien-être : Wi-Fi gratuit pour rester connecté, room service pour un confort absolu, et un accès direct à notre restaurant gourmet. Laissez-vous séduire par une cuisine savoureuse, variée et créative, qui ravira petits et grands. Après une journée bien remplie, détendez-vous dans un cocon où modernité et confort se conjuguent à la perfection. Que vous planifiez une escapade en famille, un week-end romantique ou un séjour prolongé, le Pixel Hotel Paradise promet de transformer chaque instant en un moment inoubliable. N’attendez plus pour vivre l’expérience Pixel Hotel Paradise – votre oasis de bonheur vous attend !"),
(2, "/imagesHotel/dunkey-kong-hotel.webp", "Donkey Kong Jungle Resort", "900 m du parc", "Entre 120 et 299 €",
 "Plongez en immersion dans la jungle avec Donkey Kong et ses amis !",
 "Le Donkey Kong Jungle Resort vous invite à un séjour luxueux au cœur d'une jungle immersive, aux côtés de Donkey Kong et ses amis",
 "Bienvenue au Donkey Kong Jungle Resort, un havre de luxe et d'aventure niché au cœur d'une jungle verdoyante et immersive ! Nos 120 chambres et suites spacieuses, pouvant accueillir de 1 à 6 personnes, offrent un cadre unique où confort et exotisme se rencontrent. Que vous voyagiez en solo, en couple, en famille ou entre amis, laissez-vous transporter dans l'univers sauvage de Donkey Kong et ses amis. Profitez d’équipements haut de gamme : Wi-Fi gratuit, room service personnalisé, et accès direct à notre spa tropical et restaurant gastronomique. Découvrez une cuisine inventive et raffinée, inspirée des saveurs de la jungle et pensée pour plaire à tous les palais. Après une journée riche en aventures, détendez-vous dans un décor mêlant nature luxuriante et élégance moderne. Que ce soit pour une escapade romantique ou un séjour inoubliable en famille, le Donkey Kong Jungle Resort promet une immersion totale dans un monde d’évasion et de confort. Plongez dès maintenant dans l'expérience unique du Donkey Kong Jungle Resort – votre aventure de rêve commence ici !"),
(3, "/imagesHotel/mario-hotel.webp", "Mario & Friends Hotel", "600 m du parc", "Entre 60 et 170 €",
 "Venez rencontrer Mario et ses amis dans un hôtel coloré et chaleureux !",
 "Le Mario & Friends Hotel vous accueille dans un univers chaleureux et ludique, idéal pour des séjours en famille. Partagez des moments inoubliables dans un cadre convivial, entouré de Mario et de ses amis emblématiques !",
 "Bienvenue au Mario & Friends Hotel, un havre de convivialité et de divertissement où toute la famille peut se retrouver et s’amuser ! Nos 130 chambres lumineuses et colorées, pouvant accueillir de 1 à 5 personnes, offrent un cadre chaleureux et joyeux, parfait pour petits et grands. Plongez dans l’univers emblématique de Mario et ses amis, avec des décorations ludiques et des espaces pensés pour les moments de partage. Profitez d’équipements adaptés à toute la famille : Wi-Fi gratuit, aires de jeux interactives, et un accès direct à notre restaurant thématique. Savourez une cuisine variée et gourmande, inspirée des saveurs du Royaume Champignon, pour régaler tous les palais. Après une journée riche en aventures, détendez-vous dans un décor où amusement et confort se conjuguent à merveille. Que ce soit pour un week-end en famille, une fête d’anniversaire ou des vacances prolongées, le Mario & Friends Hotel promet des souvenirs inoubliables. Rejoignez-nous pour une expérience unique, où rires et moments magiques vous attendent à chaque coin de couloir !");

INSERT INTO room (id, hotel_id, img, title, description, price, link_title)
VALUES
(1, 1, "/imagesHotel/pixel-chambre1.webp", "Chambre 2 personnes, 25m²", "1 lit double ou 2 lits simples, pour 1 à 2 personnes", "90 €", "pixel-paradise-small-room"),
(2, 1, "/imagesHotel/pixel-chambre2.webp", "Chambre 4 personnes 30m²", "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes", "130 €", "pixel-paradise-medium-room"),
(3, 1, "/imagesHotel/pixel-chambre3.webp", "Chambre duplex 6 personnes, 40m²", "2 lits doubles et un lit superposé, pour 5 à 6 personnes", "200 €", "pixel-paradise-big-room"),
(4, 2, "/imagesHotel/donkey-chambre1.jpg", "Chambre 2 personnes, 25m²", "1 lit double ou 2 lits simples, pour 1 à 2 personnes", "120 €", "donkey-small-room"),
(5, 2, "/imagesHotel/donkey-chambre2.jpg", "Chambre 4 personnes 30m²", "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes", "230 €", "donkey-medium-room"),
(6, 2, "/imagesHotel/donkey-chambre3.jpg", "Chambre duplex 6 personnes, 40m²", "2 lits doubles et un lit superposé, pour 5 à 6 personnes", "299 €", "donkey-big-room"),
(7, 3, "/imagesHotel/mario-chambre1.png", "Chambre 2 personnes, 25m²", "1 lit double ou 2 lits simples, pour 1 à 2 personnes", "60 €", "mario-small-room"),
(8, 3, "/imagesHotel/mario-chambre2.png", "Chambre 4 personnes 30m²", "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes", "99 €", "mario-medium-room"),
(9, 3, "/imagesHotel/mario-chambre3.jpeg", "Chambre duplex 6 personnes, 40m²", "2 lits doubles et un lit superposé, pour 5 à 6 personnes", "170 €", "mario-big-room");

INSERT INTO user (first_name, name, age, mail, username, password)
VALUES 
    ('John', 'Doe', 30, 'john.doe@example.com', 'johndoe', 'password123'),
    ('Jane', 'Smith', 25, 'jane.smith@example.com', 'janesmith', 'password456'),
    ('Alice', 'Johnson', 28, 'alice.johnson@example.com', 'alicej', 'password789'),
    ('Bob', 'Brown', 35, 'bob.brown@example.com', 'bobbrown', 'password101'),
    ('Charlie', 'Davis', 40, 'charlie.davis@example.com', 'charliedavis', 'password202');


INSERT INTO Restaurant (id, name, img, intro, text, adult_price, kids_price) VALUES
(1, 'Champignon Gourmet', '/imgRestaurant/image1.webp', 
 'Plongez dans l’univers magique de Mario avec Le Champignon Gourmet, un restaurant où la gastronomie rencontre l’aventure ! Savourez des plats créatifs inspirés du Royaume Champignon : des pizzas en forme de Super Étoiles, des burgers aux pains colorés comme les blocs  et des desserts rappelant les célèbres champignons rouges et verts. Dans un décor immersif mêlant tuyaux géants, briques suspendues et musique entraînante, vivez une expérience culinaire unique qui ravira petits et grands aventuriers.', 
 'Un restaurant inspiré de l’univers de Mario, avec des plats en forme de champignons, d’étoiles ou de carapaces.', 
 29, 16),
(2, 'Zelda''s Feast', '/imgRestaurant/image3.jpg', 
 'Zelda''s Feast vous invite à une expérience culinaire inspirée de l''univers magique de The Legend of Zelda. Plongez dans une ambiance médiévale avec des plats raffinés et traditionnels dignes des festins d''Hyrule. Savourez des mets savoureux tels que des viandes rôties, des soupes artisanales, et des desserts faits maison, préparés avec soin pour vous offrir une expérience gastronomique inoubliable. L''atmosphère chaleureuse et conviviale du restaurant vous transporte dans un cadre féerique, idéal pour les fans de la saga. Que vous soyez un adulte ou un enfant, Zelda''s Feast propose une expérience culinaire pour tous les âges.', 
 'Une ambiance médiévale avec des plats dignes des banquets d’Hyrule. Parfait pour les fans de la série The Legend of Zelda.', 
 19, 12),
(3, 'Donkey Kong Grill', '/imgRestaurant/image2.webp', 
 'Donkey Kong Grill vous emmène au cœur d''une jungle tropicale où les saveurs exotiques prennent vie. Inspiré par l''univers de Donkey Kong, ce restaurant offre une expérience unique avec des plats savoureux à base de viandes grillées, de fruits frais et de légumes croquants. Dans une ambiance chaleureuse et décontractée, vous pourrez déguster des mets tels que des brochettes juteuses, des hamburgers aux saveurs authentiques et des spécialités aux accents tropicaux. Un véritable festin pour les amateurs de cuisine grillée, tout en étant plongé dans un cadre immersif à la manière de la célèbre jungle. Donkey Kong Grill est le lieu parfait pour un repas en famille ou entre amis, à tout moment de la journée.', 
 'Un barbecue tropical où les bananes et les saveurs exotiques sont à l’honneur, dans une ambiance de jungle.', 
 21, 18),
(4, 'Kirby Snack''s World', '/imgRestaurant/image4.jpg', 
 'Kirby’s Snack’s World est un lieu magique et coloré inspiré par l’univers de Kirby, où les saveurs et les formes se rencontrent dans une explosion de gourmandise. Ce restaurant offre une variété de snacks et de desserts adorables qui rappellent les aventures du petit héros rose. Chaque plat est soigneusement conçu pour émerveiller vos papilles et votre imagination, avec des douceurs sucrées et salées aux couleurs vibrantes et aux formes amusantes. Que vous soyez fan de douceurs légères ou de petites bouchées ludiques, Kirby''s Snack''s World promet de satisfaire toutes vos envies de goûters délicieux et créatifs, le tout dans un cadre joyeux et dynamique.', 
 'Un lieu fun et coloré, proposant des desserts et en-cas aux formes adorables, inspirés de Kirby et de ses aventures.', 
 12, 9),
(5, 'Pokemon Café', '/imgRestaurant/image5.jpg', 
 'Pokémon Café est un lieu unique où les saveurs et les personnages emblématiques de l''univers Pokémon se rencontrent dans un cadre ludique et chaleureux. Plongez dans une ambiance accueillante et découvrez une carte de plats et boissons inspirés par vos Pokémon préférés. Des cafés mignons aux plats délicieux, chaque élément du menu est pensé pour offrir une expérience gastronomique originale, avec des présentations soignées et des touches de fantaisie. Que vous soyez un dresseur chevronné ou un fan de longue date, Pokémon Café vous invite à savourer un moment magique tout en dégustant des créations gourmandes, originales et amusantes.', 
 'Des plats et boissons inspirés de vos Pokémon préférés, avec des présentations ludiques et originales.', 
 13, 11);
