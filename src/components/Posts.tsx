import { useEffect, useState } from 'react'
import { Post } from '../Types/Post'
import PostForm from './PostForm'
import PostItem from './PostItem'
import { api } from '../api'
const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    let json = await api.getAllPosts()
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPosts(title, body, 1)

    if (json.id) {
      alert('Post adicionado com sucesso')
    } else {
      alert('deu ruim')
    }
  }

  return (
    <div>
      {loading && (
        <div className="p-5">
          {' '}
          <span className="animate-ping h-10 w-10 ml-100 p-9 bg-white rounded-full "></span>
        </div>
      )}
      <br />
      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <div>
          <>
            <h2 className="text-gray-800 p-2 font-bold">
              {' '}
              Total de Posts : {posts.length}
            </h2>
            <div className="p-0">
              {posts.map((item, index) => (
                <PostItem key={index} data={item} />
              ))}
            </div>
          </>
        </div>
      )}
      {!loading && posts.length === 0 && <h1>Não há posts para exibir</h1>}
    </div>
  )
}

export default Posts
