## Challenge 1: Wysa 

### Database Schemas for the flow;

- [Sleep Model](./sleepModel.js)
- [User Model](./userModel.js)

### Onboarding API flow Design: Sleep by Wysa

#### 1. Endpoint: POST /api/nickname

- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "nickname": "JohnDoe"
}
```

- Response (Success - HTTP 201 Created)
```
{
  "status": "success",
  "data": {
    "id": "614af0e2d8e378a3f409dcb1",
    "nickname": "JohnDoe"
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}
```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid request body"
}
```


#### 2. Endpoint: PUT /api/sleepGoal

- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "sleepGoal": 2
  "dataCollectionStep": 1
}
```

- Response (Success - HTTP 200 OK)
```
{
  "status": "success",
  "data": {
    "sleepGoal": 2
    "dataCollectionStep": 1
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}
```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid sleeping goal"
}
```

#### 3. Endpoint: PUT /api/sleepStruggle

- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "min": 2,
  "max": 8,
  "dataCollectionStep": 2
}
```

- Response (Success - HTTP 200 OK)
```
{
  "status": "success",
  "data": {
    "sleepStruggle": {
    "min": 2,
    "max": 8
    },
    "dataCollectionStep": 2
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}

```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid sleep struggle range"
}
```

#### 4. Endpoint: PUT /api/bedTime


- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "bedTime": "2023-06-01T22:00:00Z",
  "dataCollectionStep": 3,
}
```

- Response (Success - HTTP 200 OK)
```
{
  "status": "success",
  "data": {
    "bedTime": "2023-06-01T22:00:00Z",
    "dataCollectionStep": 3
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}
```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid bedTime",
}
```

#### 5. Endpoint: PUT /api/wakeTime

- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "wakeTime": "2023-06-02T07:30:00Z",
  "dataCollectionStep": 4,
}
```

- Response (Success - HTTP 200 OK)
```
{
  "status": "success",
  "data": {
    "wakeTime": "2023-06-02T07:30:00Z",
    "dataCollectionStep": 4
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}
```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid wakeTime",
}
```

#### 6. Endpoint: PUT /api/sleepDuration

- Headers:
```
    Content-Type: application/json
```

- Request Body:
```
{
  "sleepDuration": 8,
  "dataCollectionStep": 5,
}
```

- Response (Success - HTTP 200 OK)
```
{
  "status": "success",
  "data": {
    "sleepDuration": 8,
    "dataCollectionStep": 5
  },
  "message": "Operation completed successfully",
  "displayMessage": "Successful"
}
```

- Response (Error - HTTP 400 Bad Request): 
```
{
  "error": "Validation Error",
  "message": "Invalid sleepDuration",
}
```