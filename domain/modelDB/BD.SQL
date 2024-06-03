
CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  bio TEXT
);


CREATE TABLE collaborators (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  bio TEXT
);


CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE videos (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  duration INT,
  upload_date DATE,
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);


CREATE TABLE comments (
  id INT PRIMARY KEY,
  video_id INT,
  author_id INT,
  text TEXT,
  created_at DATE,
  FOREIGN KEY (video_id) REFERENCES videos(id),
  FOREIGN KEY (author_id) REFERENCES authors(id)
);


CREATE TABLE reviews (
  id INT PRIMARY KEY,
  video_id INT,
  author_id INT,
  rating INT,
  text TEXT,
  created_at DATE,
  FOREIGN KEY (video_id) REFERENCES videos(id),
  FOREIGN KEY (author_id) REFERENCES authors(id)
);