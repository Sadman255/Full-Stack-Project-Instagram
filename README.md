# InstaThrones


## Technologies 

* Ruby on Rails

* PostgreSql

* React

* Redux

* AWS S3


## Summary
 [InstaThrones](https://instathrones.herokuapp.com/#/login) is a social networking application inspired by Instagram. InstaThrones features fictional characters from one of the most popular TV shows Game of Thrones. The application focuses on image sharing and allows users to connect with each other.
 Image hosting for this application utilizes Amazon Web Services S3 cloud storage.The backend of InstaThrones uses Ruby on Rails and PostgresSQL, allowing for database queries to run effiecently utilizing RESTful API routes. The frontend incorporates React.js with a Redux framework. This enables InstaThrones to a have a state management library to optimize both logging changes to data, and persisting data throughout navagation.
 
 ## Features 
 
* Demo Login
 
* User Authentication

* User Profile

* Editing User Information

* Image Uploading/Deleting

* Searching Users

* Like/Comment & View Images

* Following/Unfollowing Other Users
 
* User Feed

## Demo Login
  An user is able to use a demo login button to explore the application with an existing account already seeded into the database.

## User-Authentication

User Authentication is secured by incorporating BCrypt, creating a password-digest to ensure no users actual password is stored in the database. Session tokens are created at login and destroyed at logout, to store a user's current session as a client-side cookie in the browser.

User signup & login components render an animated display of images. An user is able to login, create an account, or use a demo login account to explore the application.  

## User-Profile

 An  user who has created an account on InstaThrones, has their own profile page. From this page, the user is able to see details about their account including how many users they are following as well as how many users follow them.

Images on a users profile have an overlay, that when hovered over, display statistics about that particular image.

## Editing-User-Information

Users can update their information such as username, email, bio as well as their profile picture. An image preview shows their current profile picture and several textfields show their current username,email and bio.However,to make sure that no one is able to mutate the demo user,this feature is not available for demo user and you need to create an account first to use this feature.

## Image Uploading/Deleting

InstaThrones features Amazon Web Services to host uploaded images. Users are able to post images from their profile. When a file is selected, a preview of the image is shown prior to confirming upload. Users are also able to delete their own images.

## Searching Users 

 While actively logged in, a nav bar is displayed with a fixed position at the top of their browser window. From the nav bar, users are able to:
   - Use the search box to search for a particular user.
   - Navigate to the main profile (throne icon)
   - Navigate to the feed (home icon)
   - Navigate to the explore(compass icon)


## Like,Comment & View Images

 Users are able to view individual photo's from their feed or profile. InstaThrones incorporates modal components to show an image once clicked from either location.

Users are able to like and comment on photos from the image modal as well as the image feed, which renders posts from other member  which the current user is following.  

<img width="1420" alt="Screen Shot 2020-04-10 at 11 07 42 PM" src="https://user-images.githubusercontent.com/53314634/79033949-73f9c300-7b80-11ea-81e1-575ec3f5b149.png">



## Following/Unfollowing Other Users 

Users are able to follow/unfollow other users by toggling a follow/unfollow button. Whenever an user follows a particular user the number of followers for that user he or she is following increases and at the same time the number of followings for the user himself increases.

## User Feed 

The feed displays only the photos of the user the logged in user is currently following. If the logged in user unfollows existing users or follows new users, the feed updates automatically.


