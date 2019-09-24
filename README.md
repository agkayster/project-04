# project-04

## Collaborators
Ejike Chiboka
Prashanth Mohan

#  Project #4: A Python/Django + React App

## Overview
Launch on [HeroKu](https://gymproapp.herokuapp.com/#/).
Gympro is a web application primarily aimed at those who love to go to the gym and work out. It allows users:
1. Search for exercises for each category of the body e.g. Thighs, Legs, Shoulders, Chest, Core and Arms.
2. Create workout programmes like Summer Body,etc. With these they can add an Item or a group of Items which would consist of: a. The Exercise Day b. The exercise itself c. The sets and the reps for each exercise and d. Users personal best record, to keep track of were the user is at each moment.
This project has been built as part of a learning module in General Assembly's Software Engineering Immersive Course using JavaScript and React on the front-end and Python and Django on the back-end.
It has been developed collaboratively for the duration of the project.  

### Project duration
7 days.

### Installation
1. Clone or download the repo
2. Run 'yarn init' in the CLI
3. Run'yarn seed', 'yarn serve:backend' and 'yarn serve:frontend' in the CLI
​
## Technical Requirements
​
You must:
​
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.
​
---
### Technologies used
* HTML5
* CSS3
* JavaScript (ES6)
* React
* Python
* Django
* SQL/PostgresSQL
* Bulma and SCSS
* Axios
* Dotenv
* Google Fonts, FortAwesome
* Bcrypt, JsonWebtoken
* Bluebird
* Git, GitHub

### Approach Taken
This idea was proposed by Prash and We agreed on it quickly and drew up 5 data models on the whiteboard, one for programmes, one for Exercise, one for Category, one for Items and finally, one for personal best.  It was agreed that achieving all five would meet the brief and so we made those a requirement for our Minimal Viable Product (MVP). A chart to track personal best growth would be added later if time permitted.
Still on the whiteboard, we drew wireframes for a list of pages that we felt we needed for MVP.  Namely:
* Registration
* Login
* Programmes index page (To list all programmes)
* Programmes Show page (To show a specific programme)
* Programmes Edit page (To edit a programme)
* Programmes New page(To create a new programme)
* Items New page(To create a new Item)
* Items Edit page(To edit a programme)
* Exercises Index page(To list all exercises)
* Exercises Show page(To show a specific exercise)

Next, we created a Trello board and documented a list of tasks.  Each task was categorized as 'must have', 'should have' or 'could have'.  Our goal was to complete all the 'must have' tasks and as many of the remainder as we could.
The backend tests were built first so that we could employ test-driven development to build the backend.  I took up the responsibility to work on all the backend task because it was an activity that I enjoyed doing and I understood how to execute it very well. When I had to ensured that the backend was up and running, my colleague started deploying tests for the backend code. This worked pretty well and we were able to complete the backend tasks for MVP in about a day and a half.
Having completed the back end, we turned to the front end.  I also took it upon myself to connect the backend to the frontend and bring up the frontend, so that we could get down to coding on the frontend.  
Once our frontend was up and certified running okay, we then split the tasks for frontend amongst ourselves and started coding, we agreed that when each person finishes with their individual task, a git add ., commit and push should be done so that the other person can pull the good code and vice versa.
We continued coding this way until we completed the pages we needed to meet MVP.  Once we had completed all MVP tasks, we could then tackle additional features individually or in pairs depending on our preferences.
My main individual contributions were to:
* build the programmes page, build the new programmes page, build the programmes show page and programmes edit page.
* wrote the code to link the programmes page and the items page, that way, you could link an item/add an item to a programme.
* Wrote the code to display all the information from the Items page on the Programmes Show page.
* building out the Navbar and the footer
* devise the overall styling schema, including font, layout, colours, logo for the Landing/Home page, Programmes page, Add Programmes page, Navbar and Footer.
* build the backend code.
* hook up the backend to the frontend.
* act as project lead and GitHub master.

### Landing / Home page
The user is introduced to the website with an attractive welcome screen that has a parallax which explains the purpose of the site.
![image](https://user-images.githubusercontent.com/41432574/65454526-33816480-de3d-11e9-8e52-be70425642ae.png)

#### Features
* Parallax with attractive pictures and descriptive text to explain the purpose of the site

### Exercises Index page
The exercises index page is accessed from the Landing page when the user clicks 'Exercises'.  On first entry, the page displays all available exercises attached to different body categories, displayed in card components.
![image](https://user-images.githubusercontent.com/41432574/65454708-9ecb3680-de3d-11e9-8b9f-c042801edbc8.png)
#### Features
* Exercises presented in cards created by a separate card component
* Search, sort and filters
* Categories created as drop-downs and are attached to exercises for each category


### Exercises Show page
Clicking on an exercise in the Exercise Index page, will display the Show page for the selected exercise.
![image](https://user-images.githubusercontent.com/41432574/65454770-c3bfa980-de3d-11e9-9b5d-be7613ad4462.png)

#### Features
* Display of exercise image and other fields
* Description and gif explaining the exercise and how it should be carried out

### Items New page
The Items New page can only be accessed via the create programmes page and user have to be registered and logged in to be able to create an Items New page.
![image](https://user-images.githubusercontent.com/41432574/65454913-07b2ae80-de3e-11e9-9516-b6a22a38771a.png)

#### Features
* Create an Item with the Day of the week
* the type of exercise
* sets and reps
* your personal best record for each exercise.


### Items Edit page
For you to edit an Items page, you must have created the programme that nests/contains the item you want to edit. Hence, users have to be registered and logged in to execute this process.

#### Features
* Edit all information created originally in the Items New page.
* Delete the entire Items page.

### Programmes Index page
The programmes index page can only be accessed by users who have registered, logged on and created programmes for themselves. Users can only view programmes created by them.
![image](https://user-images.githubusercontent.com/41432574/65480519-b4664d80-de89-11e9-871b-54e49a9060ac.png)

#### Features
* Programmes presented in cards created by a separate card component
* Images and location are optional features users can add to their programme cards

### Programmes Show page
Clicking on a Programme in the Programmes Index page, will display the Show page for the selected Programme.
![image](https://user-images.githubusercontent.com/41432574/65481150-30fa2b80-de8c-11e9-92c0-b567eae26d95.png)

![image](https://user-images.githubusercontent.com/41432574/65480619-1de65c00-de8a-11e9-9abc-de74713e7401.png)

The snippet below is an example of how I coded the programmes Show page

```JavaScript
{this.state.programme.items.map(item =>

  <div key={item.id} className="card blackOutline">
    <div className="card-header">
      <h2 className={`card-header-title title is-4 tag is-${item.day}`}> {item.day}</h2>
    </div>
    <div className="card-content">
      <h2 className="content text"><span className="has-text-weight-semibold">Exercise: </span>{item.exercise.name}</h2>
      <h2 className="content text is-size-7"><span className="has-text-weight-semibold">Description: </span>{item.exercise.description}</h2>
      <img className="ShowImage image" src={item.exercise.image} alt={item.exercise.name}/>
      {item.personalbests.length > 0 &&
        <h2 className="content text"><span className="has-text-weight-semibold">Personal Best: </span>{item.personalbests.slice(-1)[0].weight}</h2>
      }
      <h2 className="content text"><span className="has-text-weight-semibold">Sets: </span>{item.sets}</h2>
      <h2 className="content text"><span className="has-text-weight-semibold">Reps: </span>{item.reps}</h2>
    </div>
    <div className="buttons is-centered">
      <div><Link to={`/programmes/${this.state.programme.id}/items/${item.id}/edit`} className="button">Edit Item</Link></div>
      <button id={item.id} className="button is-danger"
        onClick={this.handleDeleteItems}>Delete Item</button>
    </div>
    <form id={item.id} onSubmit={this.handleNewPBSubmit}>
      <div className="container">
        <div className="field">
          <label className="label has-text-centered">New Personal Best (kgs)</label>
          <input
            className="input"
            type="number"
            name="weight"
            min="0"
            placeholder="Input your latest Personal Best (kgs)"
            onChange={this.handleChange}
            value={this.state.formData.weight || ''}
          />
        </div>
      </div>
      <button className="button is-centered is-fullwidth is-rounded is-success" on>Submit</button>
    </form>
    <br/>
  </div>
)}
```

#### Features
* Programmes Show page opens the user up to the Items page which is automatically linked up once a user creates an Item under a new programme.
* The User can edit or delete the programme he/she added or created
* User can also gain access to edit and delete the Items component attached to a particular programme.
* User can set their personal best for each exercise anytime they want to engage in that exercise.

### Programmes New/Edit page
Provided Users are logged on they can create a New programme, Edit an existing programme by giving it another name, title, location or image.
![image](https://user-images.githubusercontent.com/41432574/65481054-da8ced00-de8b-11e9-9cba-ef0cf9ad1198.png)
#### Features
* Create a new programme, Edit a programme and Delete a programme

### About page
The About page includes a description of the application, information about the developers and acknowledgements.
![image](https://user-images.githubusercontent.com/41432574/65481260-89312d80-de8c-11e9-8573-3d326bd153b2.png)


### Registration and Login pages
We built the registration and login pages in pairs.

### Common code
* Navigation bar
* Footer
* Responsive design
* Automated tests
* Seeded database with around 6 different models.
* Trying to get background images to work for mobile as well as desktop

### Bugs
* Not fully working on mobile presentation.

## Wins and Blockers
### Win: Final deliverable looks good and works well
We are very happy with the final deliverable which meets the brief. We think it looks great and is packed full of features.  On the final day, we tested all features as a pair and fixed all of the bugs we found except the one set out above.

#### Blocker: Background images on mobile
Given the subject of our site, we wanted the images to be colourful and vibrant and chose artful pictures of Gym images to decorate it.  In desktop, I used the CSS attribute 'background-attachment: fixed;' to ensure the image was always visible even on pages that scrolled eg the Index page.  However, after some research it became clear that this attribute is not supported in mobile browsers. I therefore, created a media query that attempted to replicate that behaviour on a mobile.  This did not work well and we had to abandon it for a future feature.

## Future Content
Given more time, we would like to include the following capabilities:
* Include a Category dropdown in the Items New page and tie it to Exercises dropdown in the Items New page as well. So that when you click on a category in the items New page while creating a programme, the corresponding exercise belonging to that category also drops down and you can select.
* Refactoring - splitting out elements of code into components to shorten pages would be good.
* Add a chart which is linked to the Users personal best record, so that User can see/measure some form of progress while enjoying his or her programme.

## What we learned
Major learning points:
* Creation of code branches using Git and GitHub
* Merging the code from the two different developers back to a single code base.
* Good communication essential for handling the above
* Dividing the coding tasks allowed us to move faster and enabled us reach MVP a lot earlier, hence ensuring that we delivered a whole project - building it this way required careful communication and meant that we got to grips with merging code early.
