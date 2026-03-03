# Simple Counter App

## Overview

This is a basic web app built with plain HTML, CSS, and JavaScript.  
It has one page with a button.  
Each time you click the button, the counter increases by 1.

## Structure
- `counter.js`: exposes a `Counter` class (attached to `window`) that contains the counter state and operations so the logic stays independent of the UI.
- `index.html` loads `counter.js` before `script.js`, which wires the DOM buttons to the `Counter` instance so clicks update the display.
