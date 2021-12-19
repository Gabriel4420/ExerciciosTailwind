import { ChangeEvent, useEffect, useState } from 'react'

import { Movie } from './Types/Movie'
import Posts from './components/Posts'
import './App.css'
import { api } from './api'

//

function App() {
  const [name, setName] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [textError, setTextError] = useState('')
  useEffect(() => {
    handleLoadMovies()
  }, [])
  const handleLoadMovies = async () => {
    try {
      setLoading(true)
      let json = await api.getAllMovies()
      setMovies(json)
      setLoading(false)
    } catch (error) {
      let result = (error as Error).message
      setLoading(false)
      setError(true)
      setTextError(result)
    }
  }

  //Ciclo de vida -- ChangeEvent
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <>
      <div className="bg-sky-500 p-4 flex justify-around">
        <input
          className="rounded p-2 w-96 shadow-inner"
          type="text"
          placeholder="Digite seu Nome"
          onChange={handleChangeName}
        />

        <h1 className="text-white font-bold text-2xl">
          Bem vindo {name} <br />
        </h1>
      </div>
      <div className="bg-sky-800 p-4 flex flex-col">
        {error && (
          <div className="rounded container mx-auto bg-red-500 p-10">
            {' '}
            <h4 className="text-white font-bold text-2xl text-center ">
              {' '}
              Error : {textError}
            </h4>
          </div>
        )}
        {!loading && !error && (
          <p className="text-gray-200 p-4 font-bold text-md">
            Total de Filmes:{' '}
            <span className="text-emerald-300"> {movies.length}</span>
          </p>
        )}

        {loading && !error && (
          <span className="animate-ping h-10 w-10 ml-100 p-9 bg-white rounded-full "></span>
        )}
        <div className="grid grid-cols-6 gap-3">
          {movies.map((item, index) => (
            <div key={index}>
              <img
                src={item.avatar}
                alt={item.titulo}
                className="w-200 hue-rotate-15 opacity-70 rounded hover:text-green-100 hover:contrast-125 hover:brightness-100 hover:cursor-pointer hover:opacity-100"
              />
              <h2 className="text-green-300 text-xl p-3 ">{item.titulo}</h2>
            </div>
          ))}
        </div>
      </div>

      <Posts />
    </>
  )
}

export default App
