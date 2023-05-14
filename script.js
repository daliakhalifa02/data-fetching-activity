/* 
1- Create a program that fetches 10 users from the jsonplaceholderAPI

2- Using the data you just fetched, create 10 user cards and show them on the screen.

3- They might appear directly on the screen, or you can fetch the data with a button click, its your choice.

PS: You definitely dont need to use all the data coming from the API, design and style your user cards to your hearts desire!

BONUS: Do a POST request to the https://jsonplaceholder.typicode.com/posts endpoint adding a new post there, and console log the result.
*/

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    const users = data.slice(0, 10); 
    const userCards = document.getElementById("users");
   
    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const name = document.createElement("h2");
      name.textContent = user.name;
      card.appendChild(name);
  
      const username = document.createElement("p");
      username.textContent = `Username: ${user.username}`;
      card.appendChild(username);
  
      const email = document.createElement("p");
      email.textContent = `Email: ${user.email}`;
      card.appendChild(email);
      const website = document.createElement("p");
      website.textContent = `Website: ${user.website}`;
      card.appendChild(website);
  
      userCards.appendChild(card);
  });
  }
  fetchData();