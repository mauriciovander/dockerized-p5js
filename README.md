# dockerized-p5js
generates images using p5js on the server-side. 


# Generate Docker image
```
docker build -t dockerized-p5js .
````


# Run p5js on the server side

```
docker run dockerized-p5js | cut -d, -f 2 | base64 -D > out.png
```

## generate a video

In theory, adding `console.log(p.mCanvas.toDataURL());`at the end of each draw() loop, it should be possible to convert the stream of PNG frames into a video. 

| this doesn't really work yet.

```
docker run dockerized-p5js | cut -d, -f 2 | base64 -D | ffmpeg -an -i pipe:0 -y -c:v libx264 -vf fps=25 -pix_fmt yuv420p out.mp4
```
