import { FORM_FIELD_TYPES } from '../../DzForm/DzForm';
import { hasStringValue, isEmail, isPhoneNumber } from '../../../utils';
import { FormStep } from './types/formStep';

export const inquireFormSteps: Array<FormStep> = [
  {
    id: '1',
    formName: 'inquiryForm',
    title: '',
    primarySubtitle: '',
    secondarySubtitle: '',
    formSections: [
      {
        id: '1a',
        fields: [
          {
            name: 'firstName',
            placeholder: 'First Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'First Name is required.',
            },
          },
          {
            name: 'lastName',
            placeholder: 'Last Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'Last Name is required.',
            },
          },
          {
            name: 'email',
            placeholder: 'Email Address',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'email',
              validator: isEmail,
              errorMsg: 'Please enter a valid email address.',
            },
          },
          {
            name: 'phone',
            placeholder: 'Phone Number',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'tel',
              validator: isPhoneNumber,
              errorMsg: 'Invalid phone format',
            },
          },
          {
            name: 'comments',
            placeholder: 'Comments & Additional Interests',
            required: false,
            type: FORM_FIELD_TYPES.TEXTBOX,
            maxWordLength: 300,
            span: 12,
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Inquire',
      type: 'submit',
    },
  },
];
