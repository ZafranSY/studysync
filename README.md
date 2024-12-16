# test_ad

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
Why use this practice (API + JSON)?
Separation of Concerns (Frontend vs Backend):

In your setup, the frontend (Vue.js) handles the user interface and makes requests to the backend (Perl), which retrieves the data from the database and returns it in JSON format.

This is different from traditional web applications (like server-rendered pages in PHP or Ruby on Rails) where the server directly renders HTML, embeds data in the page, and sends it to the client.

Regular practice (non-API approach): A regular approach might involve a server-side language (like PHP) directly embedding data into HTML and sending it to the browser. For example, PHP might generate a full page with HTML markup that includes the result of a database query.

Example: In a traditional PHP application, you would fetch data from a MySQL database like this:

php
Copy code
$query = "SELECT * FROM users WHERE id = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$_GET['id']]);
$user = $stmt->fetch();
echo "<h1>" . $user['name'] . "</h1>"; // embedding data directly in HTML
In contrast, with an API-based setup, you fetch data using JavaScript, and the server returns it as a JSON object, which you then render dynamically in the frontend. For example:

javascript
Copy code
fetch('http://localhost/getUser?id=1')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#user-name').textContent = data.name;
  });
This method offers more flexibility and makes it easier to build dynamic user interfaces.

Better Performance (SPA):

Since you're using an SPA, the app loads once and then dynamically updates only the parts of the page that need to change. This minimizes the need for full page reloads, making your website feel faster and more interactive.
Decoupled Architecture (Backend and Frontend Separation):

This separation allows your backend to be more independent of your frontend. For example, you can switch your frontend technology (e.g., Vue.js, React, Angular) without needing to change your backend.
You could even change the backend technology (e.g., switching from Perl to Python, Node.js, or another language) without affecting the frontend too much.
API Reusability:

An API provides a standardized way for your application to access data, which means other services or applications (like mobile apps, other websites, etc.) can also use the same API without changing how data is handled.
