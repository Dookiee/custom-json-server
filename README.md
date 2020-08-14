# Custom json-server

The following are the steps to create your own json server.

1. Initiate a `package.json` file.

```
    npm init -y
```

2. Install the json-server npm package via node package manager

```
    npm install json-server
```

3. Create a json file which should contain the object.
   [sample file](/data.json)

4. Check the `JavaScript` code given in the file [index.js](/index.js), copy paste the code to your file.

5. In `package.json` file add the below scripts.

```
    "start": "node index.js",
    "dev-start": "nodemon"
```

6. Install `nodemon` with the below command.

```
    npm install nodemon --save-dev
```

7. To run your `json-server` use the below command

```
    npm run start
        or
    npm run dev-start
        or
    nodemon
```

8. Push all your files to your `GitHub` repository.

9. Login/Signup with heroku, then Create an app with heroku.

10. Connect your json-server repository to your heroku app and deploy your own server.

---

OR

To ignore the above steps, Simply fork this repository and follow the last two steps(9, 10).
