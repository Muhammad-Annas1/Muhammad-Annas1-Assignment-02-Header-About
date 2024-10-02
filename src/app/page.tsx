
import Header from './components/Header'; 
import About from './components/About';   

export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className='text-2xl font-bold'>Welcome to the Home Page</h1>
      <p>Here's some content for the Home Page</p>
      <About />
    </div>
    
  );
}
