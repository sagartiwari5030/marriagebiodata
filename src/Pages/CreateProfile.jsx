import React, { useState } from 'react';

function CreateProfile() {
  const [sections, setSections] = useState([
    {
      sectionName: 'Personal Information',
      fields: [
        { placeholder: 'Enter Name', value: '' },
        { placeholder: 'Enter Date of Birth', value: '' },
        { placeholder: 'Enter Complexion', value: '' },
        { placeholder: 'Enter Height', value: '' },
        { placeholder: 'Enter Gotra/Caste', value: '' },
        { placeholder: 'Enter Occupation', value: '' },
        { placeholder: 'Enter Income', value: '' },
        { placeholder: 'Select Gender', value: '' },
        { placeholder: 'Enter Education', value: '' }
      ]
    },
    {
      sectionName: 'Family Details',
      fields: [
        { placeholder: 'Enter Father\'s Name', value: '' },
        { placeholder: 'Enter Father\'s Occupation', value: '' },
        { placeholder: 'Enter Mother\'s Name', value: '' },
        { placeholder: 'Enter Mother\'s Occupation', value: '' }
      ]
    },
    {
      sectionName: 'Contact Details',
      fields: [
        { placeholder: 'Enter Contact Person', value: '' },
        { placeholder: 'Enter Contact Number', value: '' }
      ]
    }
  ]);
  
  // Add the logic to handle profile picture upload, template selection, etc.
  
  const handleChange = (e, sectionIndex, fieldIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].fields[fieldIndex].value = e.target.value;
    setSections(updatedSections);
  };
  
  const handlePlaceholderChange = (e, sectionIndex, fieldIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].fields[fieldIndex].placeholder = e.target.value;
    setSections(updatedSections);
  };
  
  const handleSectionNameChange = (e, sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].sectionName = e.target.value;
    setSections(updatedSections);
  };

  const addNewField = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].fields.push({ placeholder: 'Enter Field Name', value: '' });
    setSections(updatedSections);
  };

  const handleDeleteField = (sectionIndex, fieldIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].fields = updatedSections[sectionIndex].fields.filter((_, i) => i !== fieldIndex);
    setSections(updatedSections);
  };

  const addNewSection = () => {
    setSections([...sections, { sectionName: 'New Section', fields: [{ placeholder: 'Enter Field Name', value: '' }] }]);
  };

  const deleteSection = (sectionIndex) => {
    setSections(sections.filter((_, i) => i !== sectionIndex));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sections);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-3xl">
      {/* Profile Picture Upload and other logic can go here */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Render Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <div className="w-1/2 flex justify-between items-center mb-4">
              {/* Editable Section Name */}
              <input
                type="text"
                value={section.sectionName}
                onChange={(e) => handleSectionNameChange(e, sectionIndex)}
                className="w-full h-10 px-3 py-2 text-xl font-semibold rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Render Fields in the Section */}
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="flex gap-4 items-center mb-4">
                <div className="w-1/2">
                  {/* Placeholder Input */}
                  <input
                    type="text"
                    value={field.placeholder}
                    onChange={(e) => handlePlaceholderChange(e, sectionIndex, fieldIndex)}
                    className="w-full h-10 px-4 py-2 text-sm rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  {/* User Input */}
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => handleChange(e, sectionIndex, fieldIndex)}
                    placeholder={field.placeholder}
                    className="w-full h-10 px-4 py-2 text-sm rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Delete Field Button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
                  onClick={() => handleDeleteField(sectionIndex, fieldIndex)}
                  aria-label="Delete Field"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 7L5 21" />
                    <path d="M5 7l14 14" />
                  </svg>
                </button>
              </div>
            ))}

            {/* Add New Field Button */}
            <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
              onClick={() => addNewField(sectionIndex)}
            >
              Add New Field
            </button>

            {/* Delete Section Button */}
            <button
              type="button"
              className="px-4 ml-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
              onClick={() => deleteSection(sectionIndex)}
            >
              Delete Section
            </button>

          </div>
        ))}

        {/* Add New Section Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            onClick={addNewSection}
          >
            Add New Section
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-8 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Choose Template
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
            <path d="M7.2 2.2 8 5.1"></path>
            <path d="m5.1 8-2.9-.8"></path>
            <path d="M14 4.1 12 6"></path>
            <path d="m6 12-1.9 2"></path>
          </svg>
        </button>

        {/* Footer */}
        <div className="prose max-w-2xl text-center mt-4">
          <p>By proceeding, you agree to our <a href="/en/refund-policy" className="underline">Refund Policy</a>, <a href="/en/terms-and-conditions" className="underline">Terms</a>, and <a href="/en/privacy-policy" className="underline">Privacy Policy</a></p>
        </div>
      </form>
    </div>
  );
}

export default CreateProfile;
