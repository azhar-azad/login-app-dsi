# login-app-dsi
Simple Login App to manage a user's personal Shopping List

## To run the app:
* 1. Load up both the frontend and backend part of the project in IDE
* 2. Use given User credentials to log in (at the bottom of this README)

## Project Properties
* Frontend: Angular CLI
* Backend: Spring boot

* Email Validataion is added. 
* Spring security with JWT is implemented. 
* JPA(Hibernate) is used for ORM .
* H2 in-memory database is used. 
* One user can only manage his shopping-list
* User can't manage other user's shopping-list

## Login to the App
* Login to the app with any of the pre-registered User credentials.
* Or, Create a new user (instructions are at the bottom of this README)

## Registered User Credentials
* 1. email: azad@gmail.com | password: 1234
* 2. email: string@string.string | password: 4321

### How to create a user for yourself:
* Open **JwtInMemoryUserDetailsService.java** in _com.azad.dsi.loginv2.loginv2.jwt_ package. 
* Add a new __JwtUserDetails__ instance in the static _inMemoryUserList_ list - takes 4 paramenters. 
* 1. **id**: provide a id of type long
* 2. **email**: provide a email (anything but email will not be accepted by the frontend)
* 3. **encoded password**: encode your password by running the _BCryptEncoderTest.java_ class in the root package and provide it here
* 4. **role**: add the role "ROLE_USER_2"
