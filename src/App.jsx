import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    setBookmarks([...bookmarks, blog]);
    console.log(bookmarks)
  }
  const handleMarkAsRead = time=>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
        handleAddToBookmarks={handleAddToBookmarks} 
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
