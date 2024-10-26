import { CustomLink, PrimaryButton, TextInput } from '@simple-mono-nx/shared-ui';
import React, { useState } from 'react';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');
    return (
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-xl font-bold text-center">Main Page</h1>
        <div className="flex flex-col ">
          <TextInput
            label="Username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <PrimaryButton onClick={() => alert('Button clicked!')}>
            Save
          </PrimaryButton>
        </div>
        <CustomLink href="/secondPage">Go to Second Page</CustomLink>
      </div>
    );
};

export default MainContent;