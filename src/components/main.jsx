import axios from 'axios';
import { useEffect, useState } from 'react';
import main from '../styles/main.css'

export default function Main() {

    const [repository, setRepository] = useState([])
    const apiGithub = 'https://api.github.com/users/NicollasMelo/repos'

    useEffect(() => {
        axios.get(apiGithub).then((response) => {
            setRepository(response.data)
        })
    }, [])

    return (
        <main className='contentMain'>
            <h1 className='title'>Projetos feitos por Nicollas Melo</h1>
            <ul>
                {repository.map((repository) => {
                    return (
                        <li key={repository.id} className='liRepository'>
                            <h3 className='liItens'>{repository.name}</h3>
                            <a href={repository.html_url} target="_blank" className='linkRepository'>Saiba mais</a>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}