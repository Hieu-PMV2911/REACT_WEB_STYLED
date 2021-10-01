import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import {ArrowLeftOutlined , ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from '../data'
import {mobile, tablet} from '../responsive'
const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex; 
	position: relative;
	overflow: hidden;
	${mobile({display: "none"})}
	${tablet({height: "60vh"})}
`
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items : center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${props => props.direction === "left" && "10px"};
	right: ${props => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #${props => props.bg};
	${tablet({height: "60vh"})}
`
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 80px;
	${tablet({padding: "5px"})}
`

const ImageSlide = styled.img`
	height: 80%;
	width: 80%;
	margin-left: 3.8rem;
	${tablet({marginLeft: "0", marginTop: '3rem'})}
`

const Title = styled.h1`
	font-size: 70px;
`
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover{
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (derection) => {
		if(derection === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		}else{
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				< ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map(item => (
					<Slide bg={item.bg}  key={item.id}>
						<ImgContainer>
							<ImageSlide src = {item.img}/>
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				< ArrowRightOutlined />
			</Arrow>
		</Container>
	)
}

export default Slider
