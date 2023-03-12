import { FC } from "react";
import tw from "twin.macro";
import Link from "./Link";

const Container = tw.div`flex justify-between py-3 items-start lg:items-center`
const Title = tw.div`text-3xl lg:text-5xl font-bold underline`
const Info = tw.div`text-2xl`

const Header: FC = () => {
    return (
        <Container>
            <Title>Birthday Paradox Calculator</Title>
            <Info>
                <Link href="https://en.wikipedia.org/wiki/Birthday_problem">About</Link>
            </Info>
        </Container>
    )
}

export default Header