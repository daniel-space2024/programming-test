// components/PersonList.tsx
'use client'

import { useState } from 'react';
import { People, Person } from '../types/types';
import PersonDetails from './PersonDetails';
import PersonThumbnail from './PersonThumbnail';  
import PersonDetailsModal from './PersonDetailsModal'; 


// PersonList component to display the list of people  
const PersonList = ({ people }: { people: People }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Handle person selection  
  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
  };

  return (
    <div>
      {!selectedPerson &&( 
        <>
         <h2 className="text-lg font-bold text-center">All friends</h2>
        {people.map((person) => (  
          <PersonThumbnail  
            key={person._id}  
            person={person}  
            onClick={() => handleSelectPerson(person)}  
          />  
        )) } 
        </> 
      )}  
       {/* Display the selected person's details in a modal */}  
       {selectedPerson && (  
        <PersonDetailsModal  
          person={selectedPerson}  
          onClose={() => setSelectedPerson(null)}  
        />  
      )}  
    </div>
  );
};

export default PersonList;

