import { ChangeEvent, FC } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";

const Container = tw.div`pb-8 [border-top-width: 2px] shadow-sm rounded`
const Input = tw.input`text-2xl px-4 py-2 border-2 rounded`
const Grid = tw.div`grid grid-rows-1 grid-cols-2`
const SpanTwo = tw.div`row-span-2`
const Text = tw.div`text-2xl`
const Probablity = tw.div`text-2xl font-bold border-2 rounded px-4 py-2 max-w-fit`

interface ControlsProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    count: number
    probability: number
}

const Controls: FC<ControlsProps> = ({ onChange: handleChange, count, probability }) => {
    return (
        <Container>
            <Grid>
                <SpanTwo>
                    <div>Party Goers</div>
                    <Input value={count} type='number' min={1} max={100} onChange={handleChange} />
                </SpanTwo>
                <div>
                    <Text>Probability:</Text>
                    <motion.div>
                        <Probablity>{probability.toFixed(7)}</Probablity>
                    </motion.div>
                </div>
            </Grid>
        </Container>
    )
}

export default Controls