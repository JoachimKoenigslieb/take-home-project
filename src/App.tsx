import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from './firestore'
import { v4 as uuidv4 } from 'uuid'

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
	const now = Date.now()
	db.collection('users').doc(user).set({
		messages: { [now]: text, },
	}, { merge: true, })
}  

const Player = ({ id, }: { id: string, }) => {
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
	return (
		<></>
	)
}

const App = (): JSX.Element => {
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
