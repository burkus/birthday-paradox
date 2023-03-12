import tw from "twin.macro";
import { GoPerson } from 'react-icons/go'
import { motion } from "framer-motion";
const Container = tw.div`p-2 bg-black rounded`

export default function PartyGoer() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
        >
            <Container>
                <GoPerson tw="text-white w-2 h-2 lg:w-5 lg:h-5" />
            </Container>
        </motion.div>
    )
}