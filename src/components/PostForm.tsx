import { ChangeEvent, useState } from 'react'

type Props = {
  onAdd: (title: string, body: string) => void
}

const PostForm = ({ onAdd }: Props) => {
  const [addTitle, setAddTitle] = useState('')
  const [addBodyText, setAddBodyText] = useState('')
  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value)
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }
  const handleAddClick = async () => {
    if (addTitle && addBodyText) {
      onAdd(addTitle, addBodyText)
    } else {
      alert('Preencha os campos')
    }
  }

  return (
    <fieldset className="mb-3 p-3 border-2 border-sky-500 ">
      <legend className="text-sky-500 p-2  font-bold w-full">
        Adicionar novo post
      </legend>
      <input
        className="text-sky-500 w-10/12 border border-sky-500 m-3 outline-0 block border p-2 placeholder:text-sky-500 "
        type="text"
        name="titulo"
        id="titulo"
        value={addTitle}
        onChange={handleAddTitleChange}
        placeholder="Digite um titulo para o post"
      />
      <textarea
        className=" text-sky-500 block border p-3 w-10/12 border-sky-500 m-3 resize-none outline-0 placeholder:text-sky-500"
        placeholder="Digite a sua mensagem"
        value={addBodyText}
        onChange={handleAddBodyChange}
      ></textarea>
      <button
        className="block border m-3 p-3 text-base text-gray-100 bg-sky-500"
        onClick={handleAddClick}
      >
        Adicionar
      </button>
    </fieldset>
  )
}

export default PostForm
