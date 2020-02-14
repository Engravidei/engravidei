# engravidei-API


API REST for  engravidei's database: https://engravidei.herokuapp.com


```bash
npm install dotenv
npm install expressjs
npm install sequelize
npm install mysql2
```

## Usage

### /registerUser
    Register an user

Json req body parameters

```bash
{
    "name": "User name",
    "email": "emailuser",
    "password": "userpassword",
    "birth_date": "YYYY-MM-DD",
    "parturition_preview": "YYYY-MM-DD"
}
```

### /listUsers
    List all users

### /getUser/id
    Get an user by id

### /deleteUser/id
    Delete an user by id

### /updateUser/id
    Update an user by id

Json req body parameters

```bash
{
    "name": "new user name",
    "email": "new emailuser",
    "password": "new userpassword",
    "birth_date": "YYYY-MM-DD",
    "parturition_preview": "YYYY-MM-DD"
}
```
### /getUserByEmail
    Get an user by email
    
### /listDoctors
    List all DOctors
