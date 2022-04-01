# auth-test
Основная задача: сделать авторизацию с помощью jwt и написания серверной части. ( исключил папки node_modules и build ) 

"start": "cross-env NODE_ENV=production node app.js",
"server": "nodemon app.js",
"client": "npm run start --prefix client",
"client:install": "npm install --prefix client",
"client:build": "npm run build --prefix client",
"dev": "cross-env NODE_ENV=development concurrently \" npm run server\" \"npm run client\" "
