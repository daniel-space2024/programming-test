// components/PersonDetailsModal.tsx
import Image from 'next/image';
import { Person } from '../types/types';
import PersonDetails from './PersonDetails';

type PersonDetailsModalProps = {
  person: Person;
  onClose: () => void;
};

const PersonDetailsModal = ({ person, onClose }: PersonDetailsModalProps) => {
  // Modal layout and functionality here
  return (
    <div className="modal">
      <button onClick={onClose} className="back-button" aria-label="Back">
      <Image  
          src="/back.svg" // Path to your SVG file in the public folder  
          alt="Back"  
          width={24} // Desired width  
          height={24} // Desired height  
        />  
      </button>
      <PersonDetails person={person} />
    </div>
  );
};

export default PersonDetailsModal;
