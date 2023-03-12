import { ReactElement } from "react"

export const arrayFromCount = (count: number) => Array.from({ length: count })

export const mapTo = (count: number, fn: (_: unknown, i: number) => ReactElement) =>
    arrayFromCount(count).map(fn)

export const pairs = (count: number) => (count * (count - 1)) / 2

export const productBetween = (start: number, end: number) => {
    let product = 1
    for (let i = start; i >= end; i--) product *= i
    return product
}

export const birthdayProbability = (count: number) =>
    1 - productBetween(365, 365 - count + 1) / Math.pow(365, count)

export const getRatio = (probability: number): [number, number] => {
    const ratio = 1 / probability
    if (ratio >= 2) {
        return [1, Math.round(ratio)]
    }

    const delta = 1 - probability
    const denom = Math.round(1 / delta)
    const num = Math.round(probability / delta)

    if (1 - (num / denom) < 0.01) return [99, 100]

    return [num, denom]
}