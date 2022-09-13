# Small take-home project for new hires to show off their skills on.

Please fork this and make appropiate edits to display a chat between two "players".

In this project we have an App.tsx file which currently creates two documents in a public firestore. There is also some code implemented to add messages to these documents.

The goal is to display a chat between the two sides in the middle.

The data in firestore will look like:

```
user: {
  [randomUuid]: { 
 		messages: {
 			someTimeStamp: 'someMessage'
 			someOtherTimeStamp: 'someOtherMessage'
 		}
 	}
}
```

Where any new messages will get merge in the messages object. 

Note that you will create new documents on refreshing the page, so don't expect old messages to still be there between loads!

Firestore is installed with a slightly old version (as-is our codebase :))! Docs can be found: https://firebase.google.com/docs/firestore, and you will need v8 version: https://firebase.google.com/docs/firestore/query-data/listen#web-version-8 (this is also a good place to start!)

Feel free to re-structure the code as you see fit!

What we hope to see:
- We expect the code to pass lint (yarn eslint ./src/*)
- We expect code to pass typescript (yarn tsc)
- We expect you to use styled-components

What we dont really care about:
- We *dont* expect extremely nice design (focus on code)

We hope this won't take too long (1-2 hours!).
