import React from 'react';
import styled from 'styled-components';

type ur = {
  url: string;
  thumb: any;
}


type urlKey = {
    url: ur;
    key: any;
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = ({url,key}: urlKey) => {
  return (
    <>
      <Img key={key} src={url.url} alt="" />
    </>
  )
}