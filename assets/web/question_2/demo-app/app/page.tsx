// app/page.tsx
import { People } from './types/types';
import PersonList from './components/PersonList';

async function getData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;  
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;  
      
    if (typeof apiUrl === 'undefined' || typeof apiKey === 'undefined') {  
      throw new Error('API URL or API Key is not defined in the environment variables');  
    }  

    const res = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    const people: People = await res.json();
    return people;
  } catch (error) {
    console.error(error);
    return [];
  }
}
 
export default async function Page() {
    const people = await getData();
  
  return (  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
      <PersonList people={people} />  
    </main>  
  );  
}
