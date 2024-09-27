// src/pages/ProfileList.js
import React from 'react';

const profiles = [
  { name: 'John Doe', age: 30, education: 'MBA', profession: 'Engineer' },
  { name: 'Jane Smith', age: 28, education: 'MSc', profession: 'Doctor' }
];

function ProfileList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p>Age: {profile.age}</p>
            <p>Education: {profile.education}</p>
            <p>Profession: {profile.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
