import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import './App.css'



export default function App() {
  //const [count, setCount] = useState(0)

  const isServUrlLocal = false;
  let servUrl = '';
  servUrl = (isServUrlLocal)? 'http://localhost:8080':'https://db-assignment-forum-serv.onrender.com:8080';


  const [dataFromDb, getDataFromDb] = useState([]);


  const [form, setForm] = useState({
      username: "",
      subject: "",
      category: "",
      message: ""
  });

  const page="categories";


  async function getDataFromPageRequest(url) {
    const fullUrl = servUrl + url;
    //console.log(fullUrl);
    const response = await fetch(fullUrl);
    const allEntries = await response.json();
  
    allEntries.forEach(function (messageEntry) {
      //console.log("Username: " + dataReturned.user + " Category: " + dataReturned.category + " Title: " +
      //dataReturned.title + " Post: " + dataReturned.content);
      console.log(messageEntry);
    });
  }

  getDataFromPageRequest('/posts', []);

  
  //getDataFromPageRequest('/posts');
  //getDataFromPageRequest('/categories');
  //sendPost({});


  async function sendPost(event) {
    event.preventDefault();
    //clearGuestbookMessageContainer();
    //let attr = this.getAttribute("data-id"); // rowid value from sqlite3
    
    //const obj = {username: "", message: "", id: attr, action: "like"};
    //const obj = {num, num, 'title', 'content', 0} 
    
    const obj = {dummydata: "Nothing to see here"};
    const fullUrl = servUrl + '/createpost';
  
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const json = await response.json();
  
    //console.log();
    //getGuestbook(); //new fix?.

   



  }

  return (
    <>
      <Header />
        <div id="wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/posts" element={<Post 
              form={form} 
              setForm={setForm}/>} 
            />
            <Route path="*" element={<NotFound/>} />
          </Routes>

          {(page==='home')?<Home />: null}
          {(page==='posts')?<Post servUrl={servUrl}/>: null}
          {/*(page==='categories')?<Categories />: null*/}
        </div>
      <Footer />
    </>
  )
}

/*

// add to 'pages' as a component

const form = document.getElementById("messageForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData);

  // we are going to give formValues to our API
  // our API will accept this object and do something with it
  // the something in this case is just send it back
  // in the future we will add an entry to the DATABASE with our formValues
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
});

*/




/*

  // Endpoints
app.get("/", (request, response) => {
  response.json("This is my root route. How rude.");
});

app.get("/dans", async (request, response) => {
  const result = await db.query('SELECT * FROM categories');
  response.json(result.rows);
});

*/