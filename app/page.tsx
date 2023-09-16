import React from 'react'
import { fetchNews } from './utils/fetchNews'
import { categories } from '@/constants/categories'
import NewsList from './NewsList'

const HomePage = async () => {

  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const { articles } = await fetchNews(randomCategory)
  return (
    <div>
      <NewsList articles={articles} />
    </div>
  )
}

export default HomePage
