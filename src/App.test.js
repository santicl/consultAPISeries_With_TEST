import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { dataSet } from "./data"

describe('dataSet contains data', () => {
    it('Show to APIDATA its correct in front', () => {
        render(<App />)
        for (const serie of dataSet) {
            console.log(serie.attributes.titles.en)
            expect(screen.getByText(serie.attributes.titles.en)).toBeInTheDocument()
        }
    })
})
