1. create a firebase account 
  - set up name of project 
  - set location on project 
  - under authentiction tab add your google account (for now)
    - this will allow users to login with google, thus making authentication easier with firebase 
   - in src create js file to hold code from firebase to import the database, (firebase-config.js)
  - copy code from firebase (under the settings in project settings)
  - add => 
  import { getFirestore } from 'firebase/firestore';
  import { getAuth, GoogleAuthProvider } from 'firebase/auth';
  <= at the top of the file
    - these will connect the authentication factors and store of data to our app.
  - create variable for them a the bottom of the page, which we will use later in our compoenets 

2. run npx create-react-app
  - delete unessary files, i.e(index.css, testfile, etc. )

3. create components page
    - for this simple blog app, create login, home and create post 
    - I added out of habit the index.js and Navbar.js for a cleaner set up and that is what we are use to from fullStack 

4. Authentication 
  - import those variables we created in the firebase file to the login compoenent.
  - then use authentication to get the intial comp. opened to logged in users 