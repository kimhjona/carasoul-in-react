## Carasoul Component

<img src="./public/image.png">

# Getting it set up

<p><code>git clone https://github.com/kimhjona/carasoul-in-react.git</code></p>
<p><code>npm i</code></p>
<p><code>npm start</code></p>

# Notes.txt

I wrote this in 4 hours using create-react-app. 

You can pass in two values for props - 
urls: an array of objects with keys "photoUrl" and "destinationUrl," where "photoUrl" is the url for the photo and "destinationUrl" is where clicking on the photo takes you. Check urls.json for an example. 

Btw: if you want to activate "destinationsUrl," change the div in Carousel.js in line 148 to an a tag. 

## Directions: 
<p>Navigation - the image gallery will provide several ways for the user to navigate:</p>
<p>Autoplay - navigate to next image every 5 seconds automatically - if the user interacts with the carousel reset the 5-second clock</p>
<p>Left/right arrows - left arrow takes the user to the previous image,  the right arrow takes the user to the next image</p>
<p>Left and right arrow keys - the behavior should be the same as that outlined in the point above above</p>
<p>Bottom toggle - on the bottom of the carousel, there will be one dot per image; clicking on the second dot should take the user to the second image, etc</p>
## Visual:
<p>The left and right arrows are only shown to the user when they are hovering over the image carousel</p>
<p>On the first page, the left arrow will not be shown</p>
<p>On the last page, the right arrow will not be shown</p>
<p>The bottom dots should highlight the currently selected image</p>
