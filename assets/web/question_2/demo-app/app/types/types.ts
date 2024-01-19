// types.ts
export type Location = {  
  latitude: number | null;  
  longitude: number | null;  
};  

export type Person = {  
  _id: string;  
  name: {  
    first: string;  
    last: string;  
  };  
  email: string;  
  picture: string;  
  location: Location;  
}; 

export type People = Person[];
