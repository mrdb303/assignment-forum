import { useState, useEffect } from 'react';
import IndivPost from "../components/IndivPost";

export default function Post({form, setForm, servUrl}){



  async function getPosts(event) {
    event.preventDefault();
    //clearGuestbookMessageContainer();
    //let attr = this.getAttribute("data-id"); // rowid value from sqlite3
    
    //const obj = {username: "", message: "", id: attr, action: "like"};
    //const obj = {num, num, 'title', 'content', 0} 
    
    const obj = {dummydata: "Nothing to see here"};
    const fullUrl = servUrl + '/posts';
  
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    
    const json = await response.json();

    console.log("Doing something here!");

    json.forEach(function (messageEntry) {
      console.log("Username: " + messageEntry.user + " Category: " + messageEntry.category + " Title: " +
      messageEntry.title + " Post: " + messageEntry.content);
      
      //console.log("Test: " + messageEntry);
    });
  
    //console.log(json);
  }

  //console.log("Doing something here!");

  function preFillForm() {
    setForm({
      username: "",
      subject: "",
      category: "",
      message: ""
    });
  }


  function handleChange(event) {
    setForm({
      ...form, // the spread operator will add all existing values of form
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    //console.log(form);
    setForm({
      username: username,
      subject: subject,
      category: category,
      message: message
      /*username: "test1",
      subject: "test2",
      category: "test3",
      message: "test4"*/
    });
    console.log(form);
    // form handling logic goes here (accept or reject)

    /*
    if (form.password.length > 6) {
      // do something like logging in the user
      setForm({
        username: "",
        password: "",
      });
      setPasswordError("");
    } else {
      // moan about the password
      setPasswordError("your password isn't long enough");
    }
    */
  }


  return (
    <>
      <div className="heading-box"><h2>Please create a post:</h2></div>

      <section>
        <form id="guestbookform" onSubmit={handleSubmit}>
          <label>Your Name:</label><br/>
          <input name="username" 
            placeholder="Your name" 
            onChange={handleChange} 
            value={form.username}
            required
          />

          <br/><br/>
          <label>Subject Title:</label><br/>
          <input name="subject" 
            placeholder="Subject title" 
            onChange={handleChange} 
            value={form.subject}
            required
          />

          <br/><br/>
          

          <label htmlFor="category">Category:</label>

          {/* Pull data in from database instead*/}
          <select name="category" 
            id="category" 
            onChange={handleChange} 
            value={form.category}
            required
          >
            <option value="Turnips">Turnips</option>
            <option value="Crimplene Trousers">Crimplene Trousers</option>
            <option value="Christopher Biggins">Christopher Biggins</option>
            <option value="Charcoal Biscuits">Charcoal Biscuits</option>
            <option value="Marigold Gloves">Marigold Gloves</option>
          </select> 

          <br/><br/>
          <label>Message:</label><br/>

          <textarea onChange={handleChange} 
            value={form.message} 
            name="message" 
            cols="50" 
            rows="3" 
            maxLength="255" 
            placeholder="Your message"
            required
            >
          </textarea>
          <br/><br/>

          <button>Add Message</button>
        </form>
      </section>

      <div className="heading-box"><h2>Previous messages</h2></div>
      {/*<!-- Populated by JS-->*/}
    <div id="guestbookContainer"></div> 
      <IndivPost/>
    </>
  );


}

/*

const combineHTMLElementsPerMessageInstance = (messageEntry) =>{
  const h3 = document.createElement("h3");
  h3.textContent = messageEntry.username;

  const p = document.createElement("p");
  p.textContent = messageEntry.message;

  const likes = document.createElement("p");
  likes.textContent = "Likes: " + messageEntry.likes;

  const dateTime = document.createElement("p");
  const id = messageEntry.rowid;
  
  dateTime.textContent = convertISOString(messageEntry.visit);
  buildMessageInstance(h3, p, likes, dateTime, id);
};

*/


/*

// Ensures the removal of existing entries. This needs to be done to
// stop messages appearing twice on a submit, when messages are 
// already displayed.
const clearGuestbookMessageContainer = () => {
  document.querySelector('footer').style.display = "none";
  const existingMessages = document.getElementById("guestbookContainer");
  existingMessages.innerHTML = '';
};

*/