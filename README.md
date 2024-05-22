# MyList API

This is a simple Express.js application for managing a user's list of movies/series.
The TVShows,Movies,Users collections are already loaded with data in MONGODB Atlas.

<h3>URL:</h3>https://mylist-backend.onrender.com

# NOTE
<h3>!!!Service is deployed on render free instance and will spin down frequently.Expect delays in getting reponse!!!</h3>

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/subhayand10/myList-backend.git
    cd myList-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```


3. Create a `.env` file in the root directory and add your MongoDB URI and the port number:

    ```env
    MONGO_URI=your_mongodb_uri
    PORT=3000
    ```


4. Start the dev server:
    ```bash
    npm run dev
    ```

    

    The server will start on the port specified in the `.env` file (default is 3000).
   

## Load Data

``` bash
npx ts-node src/script/LoadMovieTvShows.ts
```
``` bash
npx ts-node src/script/LoadData.ts
```
## Tests

``` bash
npm test
```


## API Endpoints

### Add an Item to the List

- **URL**: `/api/mylist/add`
- **Method**: `POST`
- **Body Parameters**:
    - `userId` (string): The ID of the user.
    - `itemId` (string): The ID of the item to be added..

When interacting with this API endpoint, you may encounter the following responses:

## Success Response

- **Description**: Indicates the operation was successful.
- **Format**: Plain text.
- **Example**:
    ```json
    "Success"
    ```

## Error Responses

- **Description**: Indicates an error occurred during the operation. The error responses are returned in JSON format with an error message.

### Error: Movie/TVShow already in user's list

- **Description**: The specified movie or TV show is already in the user's list.
- **Example**:
    ```json
    {
      "error": "Movie/TVShow already in user's list"
    }
    ```

### Error: User not found in DB

- **Description**: The specified user was not found in the database.
- **Example**:
    ```json
    {
      "error": "User not found in DB"
    }
    ```

### Error: TVShow/Movie not found in DB

- **Description**: The specified TV show or movie was not found in the database.
- **Example**:
    ```json
    {
      "error": "TVShow/Movie not found in DB"
    }
    ```
## Remove an Item from the List

- **URL**: `/api/mylist/remove`
- **Method**: `POST`
- **Body Parameters**:
    - `userId` (string): The ID of the user.
    - `itemId` (string): The ID of the item to be removed.
When interacting with this API endpoint, you may encounter the following responses:

## Success Response

- **Description**: Indicates the operation was successful.
- **Format**: JSON Array with the deleted Movie/TVshow.

## Error Responses

- **Description**: Indicates an error occurred during the operation. The error responses are returned in JSON format with an error message.
- **Format**: JSON.
- **Example**:
  ```json
  {
    "error": "User not found"
  }




## List All Items for a User

- **URL**: `/api/mylist/list/:userId`
- **Method**: `GET`
- **URL Parameters**:
    - `userId` (string): The ID of the user.
  
  When interacting with this API endpoint, you may encounter the following responses:

## Success Response

- **Description**: Indicates the operation was successful.
- **Format**: JSON Array.
- **Example**:
    ```json
    [
    {
        "_id": "664dd7f80c20882ab330946b",
        "id": "show005",
        "title": "Future World",
        "description": "Stories set in a futuristic world.",
        "genres": [
            "Drama"
        ],
        "episodes": [
            {
                "episodeNumber": 1,
                "seasonNumber": 1,
                "releaseDate": "2023-05-01T00:00:00.000Z",
                "director": "Director I",
                "actors": [
                    "Actor E1",
                    "Actor E2"
                ],
                "_id": "664dd7f80c20882ab330946c"
            },
            {
                "episodeNumber": 2,
                "seasonNumber": 1,
                "releaseDate": "2023-05-08T00:00:00.000Z",
                "director": "Director J",
                "actors": [
                    "Actor E1",
                    "Actor E2"
                ],
                "_id": "664dd7f80c20882ab330946d"
            }
        ],
        "__v": 0
    },
    {
        "_id": "664dd7f70c20882ab330945c",
        "id": "movie004",
        "title": "Comedy Night",
        "description": "A night full of laughs and unexpected turns.",
        "genres": [
            "Comedy"
        ],
        "releaseDate": "2023-07-01T00:00:00.000Z",
        "director": "Tina Fey",
        "actors": [
            "Actor G",
            "Actor H"
        ],
        "__v": 0
    },
    {
        "_id": "664dd7f70c20882ab330945b",
        "id": "movie003",
        "title": "Haunted Mansion",
        "description": "A group of friends uncover secrets in a spooky mansion.",
        "genres": [
            "Horror",
            "Drama"
        ],
        "releaseDate": "2023-10-31T00:00:00.000Z",
        "director": "Michael Bay",
        "actors": [
            "Actor E",
            "Actor F"
        ],
        "__v": 0
    }
]
    ```

## Error Responses

- **Description**: Indicates an error occurred during the operation. The error responses are returned in JSON format with an error message.
- **Format**: JSON.
- **Example**:
  ```json
  {
    "error": "User not found"
  }





