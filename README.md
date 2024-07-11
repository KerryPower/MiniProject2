# Mini Project 2

A small local web server for a pizza ordering website. 

## Installation 

>From a new terminal inside your target directory:

1. Clone the repository:  
    `git clone https://github.com/KerryPower/MiniProject2.git`

2. Navigate into the project directory:     
    `cd mini-project-2/myapp`

3. Install dependencies:
    `npm install`
    

## Running the server

To start the server:
        `npm start`
            
>The server will run on http://localhost:3000.

## Frontend usage 

Simply Sliced's website can be accessed at:
    [Homepage](http://localhost:3000/index.html)

New orders can be viewed at: 
    [Orders](http://localhost:3000/orders.html)

## Backend Usage

API calls can now be made to http://localhost:3000/orders

    **GET** calls can be filtered by status.
    **POST** calls are by id with new JSON data in the request body. 
    **PUT** calls update orders by id.
    **DELETE** calls delete orders by id.
