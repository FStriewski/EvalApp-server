
# Student Evaluation App
The purpose of the app is to give teachers a tool to manage classes and students. The app allows you to create new classes, add students, evaluate students and pick a random student for a test, based on his past results (weighted random selection). I build this app for my final assignment at Codaisseur. 



## 1. Functionality:

### Frontend: 
* User authentication: Log in, log out for teachers (users)
* Class management: Display and add classes, track and check class performance.
* Student management: Display and add new students, assign them to classes
* Evaluation management: Pick a random student, evaluate students, display their past scores and add remarks

### Backend / Routes:

#### Login routes:

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|---------------------|
| /login/     | POST      | Login user          |

#### Teacher routes:

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|---------------------|
| /users/     | GET       | Get all users       |
| /users/:id  | GET       | Get single user     |
| /users/     | POST      | Add new user        |


#### Class (batch) routes:

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|---------------------------|
| /batch/     | GET       | Get all classes           |
| /batch/:id  | GET       | Get single class          |
| /batch/     | POST      | Add single class          |
| /products/:id  | PUT    | Update single class       |

#### Student routes:

|**URI**|**VERB**|**ACTION**|
|------------------------|-----------|------------------------|
| /students/             | GET       | Get all students       |
| /students/:id          | GET       | Get single student     |
| /batch/:id/student     | POST      | Add single student     |
| /students/:id          | DELETE    | Delete single student  |

#### Evaluation routes:

|**URI**|**VERB**|**ACTION**|
|--------------------------|-----------|------------------------|
| /evaluation/             | GET       | Get all evaluations    |
| /evaluation/:id          | GET       | Get single evaluation  |
| /evaluation/student/:id  | POST      | Add single student     |
| /evaluation/:id          | DELETE    | Delete single student  |



## 2. Installation & Prerequisites
For installation & running the app best use: 
 [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management

### Frontend: 
Open terminal, go to frontend folder, run "yarn install" start or "npm install" depending on your setup.
Then run "yarn start" or "npm start" This will run the app on port 3000 in your web browser. 

### Backend: 
Same as frontend, run "yarn install" for the dependencies. Afterwards run "nodemon ." in the terminal. This will start the server on port 4009.

### Database: 
I'm running a docker container (port 5432) with a Postgres DB. A local DB should work as well.



## 3. Copyright etc.

### Build with:
* [React](https://reactjs.org/) - The web framework used for frontend
* [Redux](https://redux.js.org) - State manager for React
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - Styling
* [TypeOrm](https://github.com/typeorm) - TypeScript focused ORM for the backend.  

### Authors
**Friedrich Striewski**

### License
Feel free to use as you see fit.

### Acknowledgments
* LogIn / LogOut uses parts of Codaisseurs boilerplate code. 
