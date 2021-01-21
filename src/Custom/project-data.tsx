import mandelbrot from '../Images/mandelbrot-masked.png';
import planet from '../Images/nbody.png';
import map from '../Images/googlemap.png';
import react from '../Images/react.jpg';
import stopwatch from '../Images/stopwatch.png';


export const projectData = [
  {
    'title': "My Personal Website",
    'index': 0,
    'subtitle': 'Android Studio, Java, XML',
    'description': 'This website was written using ReactJS and typescript. I began just using the components built into React, but soon began to implement React Bootstrap, React Router, and multiple other dependencies to help make this website what it is now. As I continue my studying and career, I expect to keep this website up to date with everything I\'m doing. Feel free to check out the code on github!',
    'image': react,
    'link': 'https://github.com/jacks14235/myreactsite'
  },


  {
    'title': "Shared Stopwatch",
    'index': 1,
    'subtitle': 'React, Typescript, AWS',
    'description': 'This react app allows multiple users to see and interact with the same stopwatch. Intended for cross country races, it can allow coaches or spectators see live lap updates from people at other sections of the course. The web app was written with React and the backend utilizes Amazon Web Socket Gateway, Amazon Lambda, and DynamoDB. Click the link below to make start your own shared stopwatch!',
    'image': stopwatch,
    'link': 'https://main.d2pbcgbbfpei5h.amplifyapp.com/',
    'linkText' : 'Stopwatch'
  },


  {
    'title': "Distance Measurement App",
    'index': 2,
    'subtitle': 'Android Studio, Java, XML',
    'description': '"GPS Ruler" is an android app that I made after being dissatisfied with the apps that were currently available. There are many situations, such as golf or disc golf, where users want to measure the distance of a few hundred feet. While there were many apps that used the GPS to accomplish this, they only took one sample at each point, meaning measurements were very innacurate. I solved this by averaging many points on each end of the measurent and using statistical analysis to alert users of error and outliers in their measurement and showing the measurements on a Google map.',
    'image': map,
    'link': 'https://github.com/jacks14235/GPSRuler'
  },

  {
    'title': "Mandelbrot Viewer",
    'index': 3,
    'subtitle': 'C, C++, Cuda',
    'description': "The mandelbrot set has always been fascinating to me, making this one of my favorite programs I have written. Although the writing a simple viewer is relatively simple, I love challenging myself to make the image generation as fast as I possibly can. When I wrote it for the first time in python, it took around 10 seconds to generate an image. Now, using C++ and Cuda, I have been able to optimize this generation to just 15 milliseconds per frame. This app also has a simple UI that allows users to zoom in and out and even save a series of images zooming in to their current position.",
    'image': mandelbrot,
    'link': 'https://github.com/jacks14235/MandelbrotCPP'
  },

  {
    'title': "Celestial Body Simulator",
    'index': 4,
    'subtitle': 'Java',
    'description': "This project was part of my \"Computer Science: A interdisciplinary approach\" class at Princeton University. The program reads planetary starting conditions from a textfile and simulates gravitational pulls and the movement of the planets. Depending on the starting conditions and the number of planets being simulated, the outputs can be pretty cool! Check out the code behind it on github.",
    'image': planet,
    'link': 'https://github.com/jacks14235/N-BodySimulation'
  }
]