import Card from '../Card/Card';


export default function Cards({ characters, onClose }) {

   return <div>
      {characters.length === 0 ?
         (<p>Busca un personaje</p>)
         :
         (characters.map((element) => (
            <Card
               id={element.id}
               name={element.name}
               species={element.species}
               gender={element.gender}
               image={element.image}
               onClose={() => onClose(element.id)}
               key={element.id}
            />
         ))
         )
      }
   </div>;
}
