## foss4g-map

A map of things at FOSS4G 2014. Visible at http://jasonsanford.github.io/foss4g-map/

If you're staying in a different hotel or just want to change the map a bit, fork this repo and you'll be able to see your own version at `http://<your_github_username>.github.io/foss4g-map/`.

### Building

Assets are bundled with browserify. Before building, install dependencies:

```
npm install -g browserify
npm install
```

After making changes in `assets/js/main.js`, be sure to run:

```
npm build
```
