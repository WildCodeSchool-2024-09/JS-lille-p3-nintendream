-- Table USER
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(80) NOT NULL,
    name VARCHAR(80) NOT NULL,
    age INT NOT NULL
);
-- Table ACCOUNT
CREATE TABLE account (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80) NOT NULL,
    username VARCHAR(80) NOT NULL,
    password VARCHAR(255) NOT NULL,
    mail VARCHAR(80) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
-- Table ZONE
CREATE TABLE zone (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    `character` VARCHAR(80) NOT NULL,
    parade VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL
);
-- Table ATTRACTION
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
-- Table RESTAURANT
CREATE TABLE restaurant (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    reservation VARCHAR(80),
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    short_description VARCHAR(80) NOT NULL,
    menu VARCHAR(80) NOT NULL,
    schedule VARCHAR(80) NOT NULL,
    state VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL,
    zone_id INT NULL,
    FOREIGN KEY (zone_id) REFERENCES zone(id)
);
-- Table HOTEL
CREATE TABLE hotel (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    reservation VARCHAR(80),
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    nbr_room INT NOT NULL,
    state VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL,
    zone_id INT NOT NULL,
    FOREIGN KEY (zone_id) REFERENCES zone(id)
);
-- Table EVENT
CREATE TABLE event (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    short_description VARCHAR(80) NOT NULL,
    description VARCHAR(255) NOT NULL,
    schedule VARCHAR(80) NOT NULL,
    img_src VARCHAR(300) NOT NULL,
    zone_id INT NOT NULL,
    FOREIGN KEY (zone_id) REFERENCES zone(id)
);
-- Table OPERATE
CREATE TABLE operate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_id INT,
    restaurant_id INT,
    zone_id INT,
    attraction_id INT,
    account_id INT,
    event_id INT,
    FOREIGN KEY (hotel_id) REFERENCES hotel(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
    FOREIGN KEY (zone_id) REFERENCES zone(id),
    FOREIGN KEY (attraction_id) REFERENCES attraction(id),
    FOREIGN KEY (account_id) REFERENCES account(id),
    FOREIGN KEY (event_id) REFERENCES event(id)
);
INSERT INTO attraction ( name, waiting_time, type, min_height, schedule, state, description) VALUES
('Mario Kart Racing', '45 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Vivez l’intensité d’une course effrénée inspirée de Mario Kart avec des virages serrés et des obstacles interactifs.'),
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
( 'Gengar’s Haunted Labyrinth', '30 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Trouvez votre chemin à travers un labyrinthe hanté par Gengar.'),
( 'Kirby’s Dreamland Ride', '20 min', 'famille', '85 cm', '9h - 22h', 'Open', 'Plongez dans l’univers coloré de Dreamland avec Kirby à vos côtés.'),
( 'Waddle Dee’s Playground', '10 min', 'enfant', 'No restriction', '9h - 22h', 'Open', 'Un espace de jeu interactif conçu pour les plus petits.'),
( 'Star Allies Spinning Cups', '15 min', 'enfant', '90 cm', '9h - 22h', 'Open', 'Faites tourner votre tasse dans ce manège amusant aux couleurs de Kirby et ses amis.'),
( 'Meta Knight’s Flight Challenge', '25 min', 'sensation fortes', '120 cm', '9h - 22h', 'Open', 'Volez à travers des champs de bataille célestes avec Meta Knight.'),
( 'Donkey Kong Jungle Swing', '30 min', 'sensation fortes', '110 cm', '9h - 22h', 'Open', 'Balancez-vous dans une jungle inspirée de Donkey Kong.'),
( 'Mario & Sonic Olympic Dash', '35 min', 'famille', '130 cm', '9h - 22h', 'Open', 'Relevez des défis sportifs en compagnie de Mario et Sonic.');
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