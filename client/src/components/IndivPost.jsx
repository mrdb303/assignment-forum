

export default function IndivPost({}){

  return (
    <div>
      <p>Post</p>
    </div>
  );

}


/*

*/




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