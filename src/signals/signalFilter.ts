import { signal } from "@preact/signals-react"
import { FilterType } from "../types/FilterType"

function initFilters(): FilterType[] {
    // TODO: get filters from DB

    const filters: FilterType[] = [
        { id: 1, name: "Savings"},
        { id: 2, name: "Expences"},
        { id: 3, name: "Monthly payments"}
    ]

    return filters
}

export const filters = signal(initFilters())