# Overview
The purpose of this application is to enable a user to see various gifs of their favotire Marvel heroes and villains. Once a user has navigated to the main page, they have the option of searching in the input box or selecting a character's name directly from the list below it. After a selection has been made, the user will be routed to a page displaying their chosen character's name and gifs. The gif display utilizes slider.js and creates a slideshow effect for the returned results. 

This project utilizes an API created by [GIPHY](https://developers.giphy.com/).

## Technologies Used
<div>
  <img src="https://img.shields.io/badge/-react-333333?logo=react&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-react%20router-f44250?logo=react%20router&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-cypress-007780?logo=cypress&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-CSS3-315780?logo=css3&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-npm-c12127?logo=npm&logoColor=white&style=for-the-badge" width="100"  height="30"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="100" height="30" />
</div>

## Setup Instructions
1. Fork the Repo from the [Repository](https://github.com/MRowan121/MarvelousGifs)
2. Clone the repo
   ```sh
   git clone git@github.com:MRowan121/MarvelousGifs.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run npm start
   ```sh
   npm start
   ```
5. Use the Link that is given in the Terminal & Open in Browser
   ```sh
   Example: http://localhost:3000/
   ```

## Deployable Link
[Marvelous Gifs](https://marvelous-gifs.vercel.app/)

## GIF
![marvel_searchCharacter](https://user-images.githubusercontent.com/110955503/222979072-3d072317-3445-4b5c-9d22-ff1eb86cfb25.gif)
![marvel_selectCharacter](https://user-images.githubusercontent.com/110955503/222979078-d9276cf2-d2d9-4315-8b41-86cbe3f9ec9d.gif)
![marvel_errorHandling](https://user-images.githubusercontent.com/110955503/222979083-f2d2c6e0-e577-4553-a53f-3ddc0be1fbad.gif)


## Contributors
* [Matt Rowan](https://github.com/Rowan121)

## Future Features

- The ability for a user to select a different character directly in the GifDisplay page
- The ability for a user to doubleClick and favorite gifs from their search
- The ability for a user to navigate to a favorites page and see all of their favorited gifs
- Add in Local Storage so that a users favorites persist
