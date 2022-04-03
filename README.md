# InfiniteScroll
Simple demonstration of infinite scroll implementation

I have used properties like scrollY, innerHeight and scrollHeight to determine when too create and render new boxes.

The idea behind implementation is, if scrollY+innerHeight >= scrollHeight, that's when we have reached bottom of the page and need to create boxes and render them into DOM

Refer this image for more details: https://i.stack.imgur.com/zWca7.png
