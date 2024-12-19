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
    zone_id INT NOT NULL,
    schedule VARCHAR(80) NOT NULL,
    description VARCHAR(255) NOT NULL,
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
    zone_id INT NOT NULL,
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

