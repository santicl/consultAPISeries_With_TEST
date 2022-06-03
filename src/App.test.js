import { render, screen } from '@testing-library/react'
import App from './App'
import { Data } from "./Dataset"

describe('dataSet contains data', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))
    it('Show to APIDATA its correct in front', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => Data
        })
        render(<App />)
        expect(window.fetch).toHaveBeenCalledTimes(1)
        expect(window.fetch).toHaveBeenCalledWith('https://kitsu.io/api/edge/trending/anime')

        for (const data of Data) {
            expect(screen.getByText(data.attributes.titles.en)).toBeInTheDocument()
        }
    })
})
