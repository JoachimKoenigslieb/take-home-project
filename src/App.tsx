import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from './firestore'
import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc } from '@firebase/firestore'

const Root = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Container = styled.div`
	height: 100%;
	width: 100%;
`

const pushToFirebase = async (user: string, text: string): Promise<void> => {
	// we push to the database
	const now = Date.now()

	// the user object will be:
	// user: {
	// 	[randomUuid]: { 
	// 		messages: {
	// 			someTimeStamp: 'someMessage'
	// 			someOtherTimeStamp: 'someOtherMessage'
	// 		}
	// 	}
	// }

	const userRef = doc(db, `users/${user}`)
	setDoc(userRef, {
		messages: { [now]: text, },
	}, { merge: true, })
}  

const Player = ({ id, }: { id: string, }) => {
	// a controlled form where on submit we send some data to firebase
	const [ text, setText, ] = useState('')

	return (
		<div>
			Your message:
			<form onSubmit={(e) => {
				e.preventDefault()
				setText('')
				pushToFirebase(id, text)
			}}
			>
				<input value={text} onChange={e => setText(e.target.value)}/>
			</form>
		</div>
	)
}

const Chat = (): JSX.Element => {
	// TODO: Implement snapshot listeners on player 1 and player2. Display a chat of their messages.
	// https://firebase.google.com/docs/firestore/query-data/listen for snapshot documentation.
	// i have disabled all security, so you should not worry about that :)

	return (
		<></>
	)
}

const App = (): JSX.Element => {
	// we generate a random uid for each player. We use this as their database id. 
	// note: this means you cannot retrieve chats on page reload!

	const [idPlayerOne,] = useState(uuidv4())
	const [idPlayerTwo,] = useState(uuidv4())

	return (
		<Root>
			<Container>
				<Player id={idPlayerOne} />
			</Container>
			<Container>
				<Chat />
			</Container>
			<Container>
				<Player id={idPlayerTwo} />
			</Container>
		</Root>
	)
}

export default App
