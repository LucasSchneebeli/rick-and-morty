import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

export default function Detail(){

    const { detailId } = useParams();

    const [character, setCharacter] = useState ({
        name: '',
        status: '',
        specie: '',
        gender: '',
        origin: '',
        image: '',
    })

    const navigate= useNavigate()
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name: char.name,
                status: char.status,
                specie: char.specie,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
            });
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return(
        <div>
            <div>
            <p>Name:{character.name}</p>
            <p>Status:{character.status}</p>
            <p>Specie:{character.specie}</p>
            <p>Gender{character.gender}</p>
            <p>Origin:{character.origin}</p>
            </div>
            <img src={character.image} />

            <button onClick={()=> navigate('/home')}>Back to home</button>
        </div>
    )
}