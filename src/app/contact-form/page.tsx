'use client';
import SubStepper from '@/components/sub-stepper';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [stepArray, setStepArray] = useState<string[]>(['Apple', 'Mango', 'Banana',"Ankit","Kumar"]);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className='w-full bg-white'>
        <SubStepper stepArray={stepArray} activeStep={activeStep} setActiveStep={setActiveStep} >
       {/* Here Pass Children Component */}
        </SubStepper>
    </div>
  );
}

export default Page;
