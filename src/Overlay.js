import React, { useEffect, useRef } from 'react'
import { a } from '@react-spring/web'
import { useState } from 'react'
import { useContext } from 'react'
import { useCounter } from './store'
import { FeaturesCards } from './FeaturesWithCards'
import { Col, Text } from '@mantine/core'

import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core'

import { Button } from '@mantine/core'
const PRIMARY_COL_HEIGHT = 300
const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2
export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  const date = new Date()

  const [state, actions] = useCounter()
  const [dark, setDark] = useState(false)

  const [mainText, setMainText] = useState('Main Text')

  const lightText1 = 'Găurile Albe'
  const darkText1 = 'Găurile Negre'

  const lightText2 =
    'Sunt o inversiune ipotetică a găurilor negre. În timp ce o gaură neagră acționează ca un atractor, atrăgând materia care trece de orizonul evenimentului, gaura albă acționează ca o sursă care elimină materie din orizonul evenimentului său.'

  const darkText2 =
    'O gaură neagră este o regiune în spațiu-timp cu o forță gravitațională atât de mare încât nimic — nici măcar particulele și radiația electromagnetică ca lumina — nu poate scăpa odată intrat în ea.'

  useEffect(() => {
    setDark(!state.dark)
    if (dark) {
      setText1(darkText1)
    } else {
      setText1(lightText1)
      setText2(lightText2)
    }
  }, [state])

  const [text1, setText1] = useState(lightText1)

  const [text2, setText2] = useState(lightText2)
  const [current, setcurrent] = useState(false)

  const ref = useRef(null)
  const ref2 = useRef(null)

  const handleClick = () => {
    if (!current) {
      ref.current?.scrollIntoView({ behaviour: 'smooth' })
      setcurrent(!current)
    } else {
      ref2.current?.scrollIntoView({ behaviour: 'smooth' })
      setcurrent(!current)
    }
  }

  return (
    <>
      <div className="overlay" ref={ref2}>
        <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M61 40H50.5v9H61v10.5h9V40h-9z" fill="#E8B059" />
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
            <tspan x={328} y={46.182} children={date.toLocaleDateString('ro-RO')} />
          </text>
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={7} fontWeight="bold" letterSpacing="-.02em">
            <tspan x={392} y={46.182} children="STAN " />
            <tspan x={392} y={54.182} children="ANDREI " />
            <tspan x={392} y={62.182} children="CRISTIAN" />
          </text>
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
            <tspan x={40} y={175.318} children="AVGEEK " />
            <tspan x={40} y={188.318} children="AEROSPACE CHALLENGE" />
          </text>
          <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={52} fontWeight="bold" letterSpacing="0em">
            <tspan x={40} y={257.909} children={text1} />
          </text>
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
            <tspan x={40} y={270.909} />
          </text>
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={48} fontWeight="bold" letterSpacing="0em">
            <tspan x={40} y={321.909} children={!dark ? 'O gaură neagră este o ' : 'Sunt o inversiune  '} />
            <tspan x={40} y={372.909} children={!dark ? 'regiune în spațiu-timp ' : 'ipotetică a găurilor  '} />
            <tspan x={40} y={423.909} children={!dark ? 'cu o forță ' : 'negre. Gaura albă   '} />
            <tspan x={40} y={474.909} children={!dark ? 'gravitațională atât de ' : 'acționează ca o sursă  '} />
            <tspan x={40} y={525.909} children={!dark ? 'mare încât nimic — nici ' : 'care elimină materie  '} />
            <tspan x={40} y={576.909} children={!dark ? 'măcar particulele ' : 'din orizontul  '} />
            <tspan x={40} y={627.909} children={!dark ? 'sau lumina — nu poate ' : 'evenimentului său'} />
            {!dark ? <tspan x={40} y={677.909} children={'scăpa odată intrat în ea'} /> : null}
          </text>
          <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
            <tspan x={326} y={dark ? 650.318 : 700} children="Wikipedia" />
          </text>
        </a.svg>
        <div style={{ margin: 15, left: '50%', marginLeft: '50%', width: '100%', paddingBottom: 30 }} ref={ref}>
          <Container my="md">
            <SimpleGrid cols={4} spacing="md">
              {dark ? (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  Orizontul evenimentului unei găuri negre poate doar să "atragă" materia, în timp ce cel al găurii albe "refuză" materia,
                  astfel încât aceasta nu trece niciodată. Materia care se apropie la viteza locală apropiată de viteza luminii este
                  împrăștiată și reemisă la moartea găurii albe. Timpul local total necesar unui obiect să cadă până la punctul final unic
                  este același necesar pentru a fi înghițit de o gaură neagră, astfel încât teoria găurii albe nu prezice ce se întâmplă cu
                  materia care cade în gaură.
                </Text>
              ) : (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  Teoria relativității generale prezice că o masă suficient de compactă poate deforma spațiul și timpul astfel încât să
                  formeze o gaură neagră. Limitele unei astfel de regiuni din care nimic nu poate scăpa este numită orizontul evenimentelor.
                  Chiar dacă orizontul evenimentelor are un efect enorm asupra sorții și circumstanțele unui obiect care trece prin aceasta,
                  nicio caracteristică aparentă nu poate fi observată.
                </Text>
              )}
              {dark ? (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  Ignorând emisii clasice imprevizibile ale găurii albe, aceasta este identică cu o gaură neagră pentru un observator
                  extern. În mecanica cuantică, o gaură neagră emite radiația Hawking, și astfel poate ajunge la echilibru termic prin
                  eliminarea unui gaz de radiație. Datorită faptului că starea de echilibru termic nu variază în cazul inversiunii
                  temporale, Stephen Hawking susține.
                </Text>
              ) : (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  În multe moduri o gaură neagră se comportă ca un corp negru ideal, deoarece nu reflectă lumină deloc. Mai mult, teoria
                  câmpului cuantic în spațiu-timp curbat prezice un orizont al evenimentelor invers proporțional masei acestuia. Temperatura
                  este de ordinul miliardelor de grade Celsius în cazul găurilor negre de masă stelară, făcându-le, esențial, imposibil de
                  observat
                </Text>
              )}
              {dark ? (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  că inversiunea temporală a unei găuri negre în echilibru termic este chiar o gaură neagră în echilibru termal. Asta
                  implică faptul că găurile negre și găurile albe sunt același obiect. Radiația Hawking provenită dintr-o gaură neagră
                  normală este identificată cu emisiile unei găuri albe, unde o gaură neagră în spațiu anti-de Sitter este descrisă ca un
                  gaz termal, a cărui inversiune temporală este identică cu sine însăși
                </Text>
              ) : (
                <Text color={'#fff'} style={{ fontWeight: 600 }}>
                  Găurile negre cu o masă stelară sunt așteptate a se forma atunci când o stea foarte masivă se colapsează la sfârșitul
                  ciclului de viață. După ce o gaură neagră s-a format, aceasta poate continua să crească prin absorbția continuă de masă
                  din împrejurimi. Prin absorbția de alte stele și coliziunea cu alte găuri negre, găuri negre supermasive cu o masă de
                  milioane de sori se pot forma. Există o prezumție generală cum că aproape fiecare galaxie are o gaură supermasivă la
                  centrul ei.
                </Text>
              )}
            </SimpleGrid>
          </Container>
        </div>
      </div>
      <Button
        onClick={handleClick}
        style={{ position: 'absolute', top: '80%', left: '72%' }}
        color={!dark ? 'dark' : 'gray'}
        variant={'outline'}>
        {!current ? <Text color={!dark ? '#fff' : '#000'}>AFLĂ MAI MULTE</Text> : <Text color={!dark ? '#fff' : '#000'}>INAPOI SUS</Text>}
      </Button>
    </>
  )
}
