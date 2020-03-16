### Build node js app with 

```
docker build -t username:nodejsapp .
```

### Build network
```
docker network create nginx-app
```

### Run 3 container

```
docker run --name nodeapp1 -e PORT=8000 --network nginx-app username/nodejsapp:latest  
docker run --name nodeapp2 -e PORT=7000 --network nginx-app username/nodejsapp:latest  
docker run --name nodeapp3 -e PORT=5000 --network nginx-app username/nodejsapp:latest  
```

### Run nginx container 

```
docker run --name nginx-test -p 9000:80 --network nginx-app -v $(pwd)/default.conf:/etc/nginx/nginx.conf nginx
```


### Run curl to test endpoint

```
// round roubin 
curl localhost:9000/all

// reverse proxy
curl localhost:9000/app
curl localhost:9000/test
curl localhost:9000/appsatu
```
