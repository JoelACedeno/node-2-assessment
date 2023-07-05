BUG #1 routes/auth.js
- User.authenticate was not `await`-ed 

BUG #2 routes/users.js
- Only select fields should be accepted in req.boy

BUG #3 routes/users.js 
- requireAdmin middleware prohibits non-admin users to update user

BUG #4 middleware/auth.js
- jwt was not being verified with jwt.decode, changed to jwt.verify

BUG #5 routes/users.js
- request was returning ALL information about a user not just specific information