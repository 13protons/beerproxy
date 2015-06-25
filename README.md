# beerproxy
Simple proxy server for beermenus.com

## Features

This server was created to sidestep CORS restrictions from `beermenus.com`, and to include serverside cacheing. Requests proxied through this app will get a `Access-Control-Allow-Origin` header set to `*`, and will be cached for 15 minutes. 

## Usage

This is a heroku app, and is installed at `https://beerproxy.herokuapp.com/`

You can use this as a drop in replacement for resources retrieved from `https://www.beermenus.com/`, for example: 

Replace:
```
https://www.beermenus.com/menu_widgets/9600.json
```

With:
```
https://beerproxy.herokuapp.com/menu_widgets/9600.json
```
