import { useState, useEffect } from 'react';

const useFetch = (URL) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(URL, { signal: abortCont.signal })
      .then(response => {
        if (!response.ok) {
          throw Error('could not fetch the data')
        }
        return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })

    return () => abortCont.abort()
  })

  return {data}
}

export default useFetch;