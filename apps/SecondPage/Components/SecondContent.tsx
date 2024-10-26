import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@simple-mono-nx/shared-state';
import {
  CustomLink,
  PrimaryButton,
  TextInput,
} from '@simple-mono-nx/shared-ui';
import { setUserName } from 'libs/shared-state/src/lib/slice/userSlice';

const SecondContent = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();
    const userName = useAppSelector((state) => state.user.name);
    return (
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-xl font-bold text-center">
          Second Page- welcome<span className='text-blue-500'> {userName}</span>
        </h1>
        <div className="flex flex-col ">
          <TextInput
            label="Username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Update your username"
            required
          />
          <PrimaryButton onClick={() => dispatch(setUserName(inputValue))}>
            Save
          </PrimaryButton>
        </div>
        <CustomLink href="/">Go to Main Page</CustomLink>
      </div>
    );
};

export default SecondContent;