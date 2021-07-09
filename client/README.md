# Todo App client
Create, update, remove and remove all yours tasks.

# Versions:
```
    npm  v6.14.6
    node v12.18.3
    angular 10 
```
## Referencing external resources:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

### angular and nginx:
https://tiangolo.medium.com/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# build only client
```
 docker build -t angular-client -f Dockerfile.dev .  
 ```
# run 
```
 docker run --name angular-app-container -p 80:80 angular-client
```