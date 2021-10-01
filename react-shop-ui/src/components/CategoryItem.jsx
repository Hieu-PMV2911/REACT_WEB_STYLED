import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from '../responsive'
const Container = styled.div`
	flex: 1;
	margin: 10px;
	height: 70vh;
	position: relative;
	${tablet({height: "40vh"})}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({height: "30vh"})}
	${tablet({height: "40vh"})}
`
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
	text-align: center;
`
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: 600;
	transition: all 0.5s ease;
	&:hover{
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`
const CategoryItem = ({item}) => {
	return (
		<Container>
			<Image src={item.img}/>
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOW NOW</Button>
			</Info>
		</Container>
	)
}

export default CategoryItem
