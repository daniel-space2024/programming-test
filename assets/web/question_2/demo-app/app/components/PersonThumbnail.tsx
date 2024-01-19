import Image from 'next/image';
import { Person } from '../types/types';

type PersonThumbnailProps = {
  person: Person;
  onClick?: () => void; // Make onClick optional
};

const PersonThumbnail = ({ person, onClick }: PersonThumbnailProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div onClick={handleClick} style={{ 
      cursor: onClick ? 'pointer' : 'default', // Only show pointer if onClick is provided
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: 'white',
      border: '1px solid #ccc', 
      borderRadius: '8px',  
      padding: '10px', 
      margin: '10px 0', 
    }}>  
      <div style={{ marginRight: '10px'}}>  
        <Image 
          src={person.picture}
          width={40}
          height={40} 
          alt={`${person.name.first} ${person.name.last}`} 
          
        /> 
      </div>  
      <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>  
        {person.name.first} {person.name.last}  
      </div>  
    </div>
  );
};

export default PersonThumbnail;
