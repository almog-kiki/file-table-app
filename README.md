##  files/tables App 

Show name of files(json), and show the content of selected file.

This app using Node.js express + Angular 10 platforms.

# How to run 
```
docker-compose -f docker-compose-<target>.yml  <Commands>
```

- development
```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up -d
```

- stop:
```
docker-compose -f docker-compose-dev.yml down
```

## Open the app:
Open your browser in ``` http://localhost ```

*please wait until the angular will compile, 
until this log will appear:
```
| ** Angular Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ **
client    | : Compiled successfully.
```


