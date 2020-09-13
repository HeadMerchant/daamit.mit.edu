# daamit.mit.edu
Website for Digital Art and Animation at MIT (DAAMIT)

# Setup
- Clone the repository
- Run `pip install -r requirements.txt`
- Create a `remote-info.txt` file
    - Put the host URL on line 1
    - (optional) put username for this URL on line 2

# Testing the site
- Edit `index.html`, `style.css`, or `script.js` in `src`
- Host `src` from a server or open `src/index.html` in a browser

# Updating the gallery
- Update `gallery.csv`
- Run `python deploy.py -package`
- Open the generated `dist/index.html` in a browser, or host `dist` on a local server to see the updated gallery

# Deploying
- (Recommended) run `python deploy.py`
    - This will repackage the site into `dist` and deploy the result
- To just deploy, run `python deploy.py -deploy`
    - This will deploy the current `dist` folder