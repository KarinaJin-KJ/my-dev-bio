import { useState, useEffect } from 'react';

function GitHubProfile() {
  // 1. Set up state for our data AND a loading tracker
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 2. The useEffect Hook: Runs ONCE when the component first appears
  useEffect(() => {
    // We are using the exact username you set up on Day 3!
    fetch('https://api.github.com/users/KarinaJin-KJ')
      .then((response) => response.json()) // Convert the response to JSON format
      .then((data) => {
        setProfile(data);       // Save the data to memory
        setIsLoading(false);    // Turn off the loading screen
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // <-- This empty array is CRITICAL. It means "Only run this one time."

  // 3. What to show while waiting for the internet
  if (isLoading) {
    return <div style={{ padding: '20px' }}>⏳ Loading live GitHub data...</div>;
  }

  // 4. What to show once the data arrives
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img 
        src={profile.avatar_url} 
        alt="GitHub Avatar" 
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <div>
        <h3>Live GitHub Stats</h3>
        <p><strong>Username:</strong> {profile.login}</p>
        <p><strong>Public Repositories:</strong> {profile.public_repos}</p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View my GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default GitHubProfile;