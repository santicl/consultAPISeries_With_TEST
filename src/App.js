import { React, useState, useEffect, Fragment }  from 'react';
import { Dataset } from './data'
import './App.css';

function App() {
    console.log(Dataset)
    const url = 'https://kitsu.io/api/edge/trending/anime'
    const [ series, setSeries ] = useState([])

    useEffect(() => {
        getSeries()
    })

    function getSeries() {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const { data = [] } = response
            setSeries(data)
        })
    }


  return (
    <Fragment>
    <h1 className="App">Pelis - App</h1>
    <section>
        <div>
            {
                
                series.map(serie => {
                    return (
                        <div key={serie.id}>
                            <h1>{serie.attributes.titles.en}</h1>
                            <img src={serie.attributes.posterImage.small} />
                        </div>
                    )
                })
            }
        </div>
    </section>
    </Fragment>
  );
}
export default App;
