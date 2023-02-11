### Run app
`npm run dev`

### Firebase Deloyment
1. `npm install -g firebase-tools`
2. `firebase init`
  - ? What do you want to use as your public directory? out
  - ? Configure as a single-page app (rewrite all urls to /index.html)? No
  - ? Set up automatic builds and deploys with GitHub? No
  - ? File out/404.html already exists. Overwrite? No
  - ? File out/index.html already exists. Overwrite? No
3. `npm run build`
4. `npm run export`
5. `firebase deploy`


Credit to: 
https://github.com/vivek9patel
