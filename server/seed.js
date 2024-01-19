/*   

CREATE TABLE IF NOT EXISTS gb_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  pass VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS gb_categories (
  cat_id SERIAL PRIMARY KEY,
  name VARCHAR(60)
);


CREATE TABLE IF NOT EXISTS gb_posts (
  id SERIAL PRIMARY KEY,
  cat_id INTEGER REFERENCES gb_categories(cat_id),
  user_id INTEGER REFERENCES gb_users(id),
  title VARCHAR(60) NOT NULL,
  content VARCHAR(255) DEFAULT '',
  likes INTEGER DEFAULT 0 NOT NULL,
  post_date timestamp
);



//===========
INSERT INTO gb_categories (name) VALUES
('Turnips'),
('Crimplene Trousers'),
('Christopher Biggins'),
('Charcoal Biscuits'),
('Marigold Gloves');

INSERT INTO gb_users (name, pass) VALUES
('cyril567', 'anotheronebitesthedust'),
('Cuthbert1', 'rumbleinthejungle'),
('nincompoop52', 'dooflod567');

INSERT INTO gb_posts (cat_id, user_id, title, content, likes, post_date) VALUES 
(1, 1, 'Funny turnip', 'Exactly the same shape as a ...', 22, '2022-07-22 09:13:27.14538'),
(2, 1, 'Dashing', 'Crimplene trousers are rather fetching.', 5, '2022-07-22 09:13:27.14538'),
(4, 2, 'Cure', 'Since I started eating them, my wife has let me back in the house.', 42, '2022-07-22 09:13:27.14538'),
(1, 3, 'Turnip escapades', 'A worthy addition to my allotment', 8, '2024-01-17 09:13:27.14538'),
(3, 3, 'The bigginsmeister', 'A little known fact, he was in the TV programme Porridge', 2, '2024-01-18 09:13:27.14538');

====Queries

SELECT gb_users.name, gb_posts.title, gb_posts.content
FROM gb_users
INNER JOIN gb_posts ON gb_users.id = gb_posts.user_id; 


SELECT gb_users.name AS user, gb_categories.name AS category, gb_posts.title, gb_posts.content
FROM gb_users
INNER JOIN gb_posts 
ON gb_users.id = gb_posts.user_id
INNER JOIN gb_categories 
ON gb_categories.cat_id = gb_posts.cat_id;


INSERT INTO gb_posts (cat_id, user_id, title, content, likes, post_date) VALUES
(num, num, 'title', 'content', 0, NOW() );



SELECT * FROM customers
WHERE customer_id = 19; 

UPDATE cars
SET color = 'red'
WHERE brand = 'Volvo'; 


INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964); 

DELETE FROM cars
WHERE brand = 'Volvo'; 








*/