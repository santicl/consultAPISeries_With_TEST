import { useState, useEffect } from "react"

function Dataset() {
    const url = 'https://kitsu.io/api/edge/trending/anime'
    const [ data, setData ] = useState([])

    useEffect(() => {
        getData()
    })

    function getData() {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const { data = [] } = response
            setData(data)
        })
    }
    return (
        data.map(serie => {
            return serie
        })
    );
}
export default Dataset