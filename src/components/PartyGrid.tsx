import tw from "twin.macro";
import { mapTo } from "lib/util";
import PartyGoer from "./PartyGoer";
import { AnimatePresence } from "framer-motion";

const Container = tw.div`flex gap-1 lg:gap-3 flex-wrap max-h-full shadow-sm p-4`

export default function PartyGrid({ count }: { count: number }) {
    return (
        <Container>
            <AnimatePresence>
                {mapTo(count, (_, i) => <PartyGoer key={i} />)}
            </AnimatePresence>
        </Container>
    )
}