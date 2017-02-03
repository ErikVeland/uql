# UQLibrary Work Test - Front end

## Frontend test: Javascript app

A React/Redux app to interface with UQ Libraries API using Material UI.

Demo site: http://128.199.188.240:4000


# Starting the app

### UNIX/Linux/macOS:
- npm i
- npm start

### Windows:

- npm i
- webpack
- node server.js

http://localhost:4000

## Implementation time

Total time spent on this app over five days was approximately 30 hours, roughly divided by 70% React/Redux coding and interfacing with API, 30% implementing Material UI. Most time was spent developing the main library list, then the Add Library mini-app, and finally an even split between the detail view and All computer availability mini apps. If I had more time I'd implement a map view in details from the coordinates with directions as well as a more refined UI.

### Issue with API

Due to inconsistency in library names and missing library ID in computer availability I had to dummy up the JSON output for availability locally. If the API for availabilty adds "lid" this can be easily swapped for the online live API.

## WGAC 2.0 AA compliance considerations

The application complies with all WGAC 2.0 A and AA recommendations. Accessibility is important to me, both for the fact I have friends with visual and auditory impairments, and I believe applications and interfaces built from the ground up with accessibility in mind gains usability, performance, and SEO benefits that benefit the application as a whole.

## SEO Considerations

For the application itself, it is important to use hierarchical HTML to semantically structure the data using header and paragraph tags as well as metadata where appropriate.

More importantly its own internal search should be optimised, ensuring that the libraries can be searched using clear and relevant data and metadata.

## Server optimisation

Because React is built for blisteringly fast UI performance in the browser and it also runs on the server, it can be tempting to use React for server side rendering to create a universal / isomorphic app. But universal apps come with a huge complexity and maintenace cost. Not even Facebook runs as a native app. Integrating with the existing stack and optimising that is by far the better option in most cases, even when building from scratch. Tried and true server optimisation techniques like gzipping resources, setting cache expiry headers, using HTTP/2, optimising databases should of course be utilised.

## Client optimisation

React/Redux and PostCSS is a great start for a fast, performant application. A lean and mean website should always be optimised for performance. Tools like Google Page Speed, GT Metrix and Pingdom Speed test can be helpful in indentifying speed bumps in your apps such as unoptimised images, render blocking scripts etc.

Because React and PostCSS is modular, concatting and optimisation of resources is done on the fly and only the applicable resources can be loaded for each view.

## React vs Angular

Having used Angular in the past I was excited to work with React on this project as it offers a more performant end result. The time it took to learn a new framework have paid off in the time saved in the future. Angular is a more fully featured framework, where React allows you to pick and choose (or write) just the modules you need for your project. React is the younger framework, with a smaller community, but that is changing rapidly.

## AWS Deployment

I'd be interesting in exploring setting this up on AWS Lambda, which is billed as "serverless" solution. In a FaaS environment scaling is built in, so you do not have to plan out or purchase new servers as bandwith and users increase. Pricing is on demand, and you only pay $.20 per million requests or $0.00001667 for every GB-second of compute time, with every execution rounded up to the nearest 100ms.

The downside is that coding locally becomes functionally impossible, as you can't accurately simulate the current Lambda environment.

### Thank you
This has been a fun and challenging project to work on, and I look forward to discuss future opportunities.
