import React, { useEffect, useState } from 'react'
import { axios_Instance } from '../../utils/API/API'
import './got.css'
import { useNavigate } from 'react-router-dom'
import CircularIndeterminate from '../../components/Loading/loading'
import { Helmet } from 'react-helmet'

const Got = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(false)
  const navigate = useNavigate()

    const getCharacters = async () =>{
      setIsLoading(true)
      try {
      const response = await axios_Instance.get('api/v2/Characters')
      setCharacters(response.data)
      } catch (e) {
        setError(true)
      }finally{
        setIsLoading(false)
      }
    }

    useEffect(()=>{
      getCharacters()
    },[])

  return (
    <div className='got'>
      <Helmet>
        <title>Игра престолов</title>
      </Helmet>
      {isLoading ? 
      <CircularIndeterminate/>
      :
      <div className='character-list-wrap'>
        <h2>Character List</h2>
        <div className="row-group">
          <div className="names">
          <div>Id</div>
          <div>Name</div>
          <div>Image</div>
        </div>
        {error?
      <div className='err'>
        <img src="" alt="" />
        <h1>Ошибка Запроса</h1>
        <h2>Повторите попытку позже</h2>
      </div>
      : 
      characters.map((item,idx,arr)=>{
          return (
            <div
            key={idx}
            className='character-list'
            onClick={()=> navigate(`/got/${item.id}`)}
            >
              <div>{item.id}</div>
              <div>{item.fullName}</div>
              <div className='photo'>
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
          )
        })
      }
        </div>
      </div>}
    </div>
  )
}

export default Got