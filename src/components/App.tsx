import tw from 'twin.macro'
import PartyGrid from './PartyGrid'
import Controls from './Controls'
import Header from './Header'
import { ChangeEvent, useState } from 'react'
import ProbabilityText from './ProbabilityText'
import { birthdayProbability } from 'lib/util'

const Container = tw.div`flex flex-col px-2 sm:px-3 lg:px-20  h-screen gap-5`

export default function App() {
    const [count, setCount] = useState(1)
    const probability = birthdayProbability(count)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        setCount(value)
    }

    return (
        <Container>
            <Header />
            <Controls onChange={handleChange} count={count} probability={probability} />
            <PartyGrid count={count} />
            <ProbabilityText probability={probability} />
        </Container>
    )
}