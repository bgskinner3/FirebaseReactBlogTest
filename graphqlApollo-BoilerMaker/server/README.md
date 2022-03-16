the intial set up for migrating the firebase database over to server,
this file will be used to set up the back end , eventually will want to test with graphql and apollo to query the data base.

=====> https://www.youtube.com/watch?v=I5irZ0AAr98

questions to keep in mind
- how will implementing apollo server -express, connect to the firbase store?
- will the authentication soley be taken care of by firebase?
  - or will we need to imnplement jwt with apollo server and apollo client 
  - if authenticaion is needed in that regard dip back into the stackathon repo to get an idea on how to implement it, however keep in mind no express was used which may call for an intial conversion for apollo server => apollo-server-express