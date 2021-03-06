import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Login from '../organisms/login/Login'
import Singup from '../organisms/singup/Singup'

const Component = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin: 0;
  padding: 0;
`

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('/logoBg.svg');
  background-repeat: repeat;
  background-position: right;
  background-size: 59px;
`
export default function Portal() {
  const [login, setLogin] = useState(true)

  return (
    <>
      <Head>
        <title>Lim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component>
        <Bg />
        {login ? (
          <Login toggleForm={() => setLogin(!login)} />
        ) : (
          <Singup toggleForm={() => setLogin(!login)} />
        )}
      </Component>
    </>
  )
}
