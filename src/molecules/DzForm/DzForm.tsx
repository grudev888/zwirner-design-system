import React, { FC, useState, useMemo, useCallback } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  MEDIA_ASPECT_RATIOS,
} from '../../atoms';
import { DzFormBuilder } from './DzFormBuilder';
import { cn } from '../../utils/classnames';
import { ChevronLeft } from '../../svgIcons';

export const FORM_FIELD_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
  UPLOADER: 'uploader',
};

export interface DzFormProps {
  steps: any[];
  mediaProps: DzMediaProps;
}
const styles: any = {
  formContainer: `
    flex
    flex-col
    gap-5
    md:flex-row
  `,
  leftContainer: `
    md:basis-1/2
  `,
  rightContainer: `
    md:basis-1/2
  `,
  contextContainer: `
    flex
    gap-2.5
    items-center
    mb-5
  `,
  prevChevron: `
    cursor-pointer
  `,
};

export const DzForm: FC<DzFormProps> = ({ steps, mediaProps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsLength = useMemo(() => steps.length, [steps]);
  const stepFormData = useMemo(() => {
    const stepData = steps[currentStep - 1];
    return stepData;
  }, [steps, currentStep]);

  const handleForwardAction = useCallback(() => {
    setCurrentStep(step => step + 1);
  }, []);
  const handlePrevAction = useCallback(() => {
    setCurrentStep(step => step - 1);
  }, []);

  return (
    <div className={cn(styles.formContainer)}>
      <div className={cn(styles.leftContainer)}>
        <DzMedia {...mediaProps} aspectRatio={MEDIA_ASPECT_RATIOS['4:3']} />
      </div>
      <div className={cn(styles.rightContainer)}>
        <div className={cn(styles.contextContainer)}>
          {currentStep > 1 ? (
            <div className={cn(styles.prevChevron)} onClick={handlePrevAction}>
              <ChevronLeft />
            </div>
          ) : null}

          <DzText text={`Step ${currentStep} of ${stepsLength}`} />
        </div>

        {stepFormData ? (
          <DzFormBuilder form={stepFormData} formAction={handleForwardAction} />
        ) : null}
      </div>
    </div>
  );
};

export default DzForm;
