import { Person } from '../types/types';
import MapComponent from './MapComponent';
import PersonThumbnail from './PersonThumbnail';

type PersonDetailsProps = {
  person: Person;
};

const PersonDetails = ({ person }: PersonDetailsProps) => {

  return (
    <div>
      <h2 className="text-lg font-bold text-center" >Your Friend</h2>
        <MapComponent lat={person.location.latitude} lng={person.location.longitude} />
        <PersonThumbnail person={person} /> {/* No onClick needed here */}
    </div>
  );
};

export default PersonDetails;

