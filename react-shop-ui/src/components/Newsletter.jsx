import React from 'react'
import styled from 'styled-components'
import {Send} from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fcf5f5;
	flex-direction: column;
`
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`
const Description = styled.div`
	font-size: 24px;
	margin-bottom: 20px;
	font-weight: 300;
	${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
	height: 40px;
	width: 50%;
	display: flex;
	justify-content: space-between;
	background-color: white;
	border: 1px solid lightgray;
	${mobile({width: "80%"})}
`
const Input = styled.input`
	flex: 8;
	border: none;
	padding-left: 20px;
`
const Button = styled.button`
	flex:1;
	border:none;
	background-color: teal;
	color: white;
`
const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates from your favorite products.</Description>
			<InputContainer>
				<Input placeholder="Your email..."/>
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	)
}

export default Newsletter
