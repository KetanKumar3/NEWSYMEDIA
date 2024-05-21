import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'



const Cardrender = ({category}) => {

  const [articles, setArticles] = useState([])

  

  const ketan = async () => {
   
    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
    let data = await url.json()
    setArticles(data.articles)
    console.log(data.articles)
  }

  useEffect(() => {
    ketan()
  }, [category])

  return (
    <div className='container'>
    <div className='row'>
      
      {articles.map((news,index)=>{
        return <div className='col-12 mx-4 mx-md-0 col-md-4 my-4'><Card key={index} title={news.title} description={news.description} image={news.urlToImage} url={news.url}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default Cardrender
