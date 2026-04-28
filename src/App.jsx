import './App.css'
import ProfileCard from './ProfileCard'
import MenuItem from './MenuItem';

function App() {
  return (
    <div className="bio-container">
      <h1>Hello, I'm Chloe</h1>
      <h2>Aspiring Full-Stack Developer</h2>

      <ProfileCard />

      <div className="menu-section">
        <h2>My Favorite Foods</h2>
      
        <MenuItem 
          name="Double Cheeseburger" 
          price="8.99" 
          description="Two beef patties with melted cheddar." 
        />
        
        <MenuItem 
          name="Spicy Ramen" 
          price="12.50" 
          description="Pork broth with extra chili oil and a soft boiled egg." 
        />
        
        <MenuItem 
          name="Matcha Ice Cream" 
          price="4.99" 
          description="Sweet and earthy green tea dessert." 
        />
      </div>
      
      <p>
        Welcome to my very first React application! I'm learning how to build modern web interfaces 
        and track my progress using Git.
      </p>

      <ul>
        <li>Current Focus: React & Front-End</li>
        <li>Next Step: Mastering Components</li>
        <li>Fuel: Coffee and curiosity</li>
      </ul>
    </div>
  )
}

export default App