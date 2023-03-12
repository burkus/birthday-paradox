import tw from "twin.macro";
import { motion } from "framer-motion";
import { FC } from "react";
import { getRatio } from "lib/util";

const Text = tw.div`text-7xl lg:text-9xl`

interface ProbabilityTextProps {
    probability: number
}

const ProbabilityText: FC<ProbabilityTextProps> = ({ probability }) => {
    const [num, denom] = getRatio(probability)

    if (isNaN(num) || isNaN(denom)) return null

    return (
        <motion.div
            initial={{ x: -800, scale: 0.1 }}
            animate={{ x: 0, scale: 1.0 }}
            transition={{ duration: 0.5 }}
        >
            <Text>
                About {num} in {denom}
            </Text>
        </motion.div>
    )
}

export default ProbabilityText