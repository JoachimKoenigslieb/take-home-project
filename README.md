# Small take-home project for new hires to show off their skills on.

Please fork this and make appropiate edits to display a chat between two "players".

In this project we have an App.tsx file which currently creates two documents in a public firestore. There is also some code implemented to add messages to these documents.

The goal is to display a chat between the two sides in the middle.

The data in firestore will look like:

```
users: {
  [randomUuid]: { 
 		messages: {
 			[someTimeStamp]: 'someMessage'
 			[someOtherTimeStamp]: 'someOtherMessage',
			...
 		}
 	}
}
```

This is, we have a users collection with documents with documents with random ids. These documents have a messages map in them, which contain records of timestamp and strings corresponding to the messages.

Any new messages will get merged into the messages object. 

Note that you will create new documents on refreshing the page, so don't expect old messages to still be there between loads!

Firestore docs are here: https://firebase.google.com/docs/firestore

Feel free to re-structure the code as you see fit!

What we hope to see:
- We expect the code to pass lint (yarn eslint ./src/*)
- We expect code to pass typescript (yarn tsc)
- We expect you to use styled-components

What we dont really care about:
- We *dont* expect extremely nice design (focus on code)

We hope this won't take too long (1-2 hours!).
