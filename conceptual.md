### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  - JWT stands for JSON Web Token and is used for storing arbitrary information "signed" with a secret key.

- What is the signature portion of the JWT?  What does it do?
  - The signature of a JWT is made up of the header, payload and a secret key. The purpose of the signature is to ensure that the token was not modified during transmission and was issued by the trusted party.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - The only way a payload can be accesssed is with a valid signature.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - First make request with username/password to AJAX login route. Server authenticates & returns token in JSON. Token is encoded & signed with open standard, “JSON Web Token”. Front-end JavaScript receives token & stores (in var or localStorage). For every future request, browser sends token in request. Server gets token from request & validates token.

- Compare and contrast unit, integration and end-to-end tests.
  - Unit tests make sure a specific part of the code works. Integration tests make sure that multiple moving parts in the code work correctly. End to end tests make sure that ALL moving parts work from start to finish. End to end testing involves both unit tests and integration tests in its implementation.

- What is a mock? What are some things you would mock?
  - A mock is a substitute object in a test that simulates the behavior of a real object in order to isolate the behavior of the unit being tested. You can mock AJAX requests, reading/writing to files, and impure functions.

- What is continuous integration?
  - Continuous Integration (CI) is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. The goal of CI is to build better software by developing and testing in smaller increments.

- What is an environment variable and what are they used for?
  - An environment variable is a named value that can change the behavior of an application. Ex. ENV_VAR = "test" would make an application run in test mode.

- What is TDD? What are some benefits and drawbacks?
  - TDD stands for Test Driven Development. A benefit of TDD is that you can write code based directly on how the test should pass, whereas a drawback is that if the tests are not written correctly it can require twice the amount of debugging.

- What is the value of using JSONSchema for validation?
  - Using JSONSchema for validation adds an extra layer of error handling. If the json does not pass the validation check then you can handle the error quicker than if there was no validation at all. 

- What are some ways to decide which code to test?
  - Instead of trying to test every part of your code, test the functionality of the application. Where are the potential points where the app can break? Where are the points where data could be potentially mishandled?  Where are the potential security risks? Use testing to ensure that there are no holes in the vital elements of your application.

- What does `RETURNING` do in SQL? When would you use it?
  - `RETURNING` in SQL returns a desired value after a query. For instance if you update a value in your database, you can use `RETURNING` to get back all of the information for the updated field. 

- What are some differences between Web Sockets and HTTP?
  - HTTP is stateless and heavy, Web Sockets are stateful and light.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I preferrd using Flask over Express because it felt easier to learn and use, however I think in the future I could potentially lean toward Express for its ability to run asynchronously and its extensive middleware systems. 
