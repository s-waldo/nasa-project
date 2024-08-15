# NASA APOD App
A web application showcasing the Astronomy Picture of the Day (APOD) from NASA.

## Description
This project fetches daily astronomical images and corresponding metadata from NASA's APOD API.

Preview of the site can be viewed [here](https://s-waldo-nasa-app.netlify.app/).

## Installation
Clone this repository to your local machine:
```Bash
git clone https://github.com/s-waldo/nasa-project.git
```

Navigate to the project directory:
```Bash
cd nasa-apod-app
```

>[!IMPORTANT]
>You need to create a .env file and use your own API credentials for the site to work.  **Without this step, the API will not work and the site will never load.**

Install dependencies:
```Bash
npm install
```

Start the development server:
```Bash
npm run dev
```
## Usage
+ The application will open in your default web browser.
+ The current APOD image and its details will be displayed.

## Features
+ Displays the Astronomy Picture of the Day
+ Includes image, title, description, and date of the photo

## Built With
+ React
+ Vite
+ CSS
## API
This project utilizes the NASA APOD API to retrieve image data. For more information, visit [NASA's API registry](https://api.nasa.gov/).

## Credit
This project was adapted from Smoljames's Youtube tutorial.  Find that video and build your own [here](https://www.youtube.com/watch?v=5Gf6grFgoG8).

## Contributing
Feel free to fork this repository and contribute to its development.

## License
This project is licensed under the [Choose a license, e.g., MIT] License - see the LICENSE file for details.
