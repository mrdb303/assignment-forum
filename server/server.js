import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";


dotenv.config(); // allow us to use the environment variables (like the DATABASE_URL)

const PORT = 8080;
const app = express();
app.use(cors());

// connect to database
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// Endpoints
app.get("/", (request, response) => {
  response.json("This is my root route. How rude.");
});


app.get("/posts", async (request, response) => {
  const result = await db.query('SELECT gb_users.name AS user, gb_categories.name AS category, gb_posts.title, gb_posts.content, gb_posts.post_date FROM gb_users INNER JOIN gb_posts ON gb_users.id = gb_posts.user_id INNER JOIN gb_categories ON gb_categories.cat_id = gb_posts.cat_id ORDER BY gb_posts.post_date DESC');
  response.json(result.rows);
});


app.get("/categories", async (request, response) => {
  const result = await db.query('SELECT * FROM gb_categories ORDER BY name ASC');
  response.json(result.rows);
});


app.post("/createpost", function (request, response) {
  if(request.body.action != null){
    //if(request.body.action === "like") increaseLikes(request.body.id);
    //if(request.body.action === "delete") deleteMessage(request.body.id);
    console.log("Mockup: processing.");
  } else {
    //insertANewMessage(request.body.username, request.body.message);
    console.log("Called but no data submitted.");
  }

  //let writeQuery = db.prepare("INSERT INTO gb_posts (cat_id, user_id, title, content, likes, post_date) VALUES
  //(num, num, 'title', 'content', 0, NOW() );").all();

  //INSERT INTO gb_posts (cat_id, user_id, title, content, likes, post_date) VALUES
//(num, num, 'title', 'content', 0, NOW() );
  //response.json(writeQuery);
});


/*

function insertANewMessage(username, message){
  const dateTime = new Date();
  const sqliteDate = dateTime.toISOString();
  
  username = username.trim();
  message = message.trim();

  db.prepare(`INSERT INTO guestbook (username, message, visit, likes) 
    VALUES (?, ?, ?, 0)`)
    .run(username, message, sqliteDate);
}
*/



// start my server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));


/*


// Select all rows from the database
const result = await db.query("SELECT * FROM datastore");
return result.rows;

// Get a single row from the database
const result = await db.query("SELECT * FROM datastore WHERE id = $1", [id]);
return result.rows[0];

// Insert a new row into the database
const result = await db.query(
  "INSERT INTO datastore (title, content) VALUES ($1, $2) RETURNING *",
  [name, description]
);
return result.rows[0];

// Update an existing row in the database (RETURNING returns the value of the updated row)
const result = await db.query(
  "UPDATE datastore SET title = $1, content = $2 WHERE id = $3 RETURNING *",
  [title, content, id]
);
return result.rows[0];

// Delete a row from the database
const result = await db.query("DELETE FROM datastore WHERE id = $1", [id]);
return result.rows[0];

*/

