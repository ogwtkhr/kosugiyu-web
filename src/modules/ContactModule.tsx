import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
// import _ from 'lodash';

import { Module } from '../layouts';
import { SPACING, TYPOGRAPHY, LINE } from '../constants';
import { Button, ButtonContainer } from '../components';

import { ContactSelectOptionsQuery } from '@/types';

type SelectOption = {
  label: string;
  id: string;
};

export const ContactModule: React.FC = () => {
  const data: ContactSelectOptionsQuery = useStaticQuery(graphql`
    query ContactSelectOptions {
      settingYaml {
        moduleInfo {
          contact {
            selectOptions {
              id
              label
            }
          }
        }
      }
    }
  `);

  const selectOptionsBase = data.settingYaml?.moduleInfo?.contact?.selectOptions;

  const selectOptions: SelectOption[] = selectOptionsBase
    ? (selectOptionsBase as SelectOption[])
    : [];

  return (
    <Module title="コンタクト">
      <form>
        <FormControl as="select" name="" id="">
          <option hidden>聞きたいことを選択</option>
          {selectOptions.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </FormControl>
        <FormControl as="input" type="email" placeholder="メールアドレス" />
        <FormControl as="input" type="text" placeholder="会社名" />
        <FormControl as="input" type="text" placeholder="お名前" />
        <FormControl
          as="textarea"
          placeholder="お問い合わせ内容"
          name=""
          id=""
          cols={30}
          rows={10}
        />
        <ButtonContainer>
          <Button as="button" type="submit">
            確認
          </Button>
        </ButtonContainer>
      </form>
    </Module>
  );
};

const FormControl = styled.div`
  display: block;
  width: 100%;
  padding: ${SPACING.MIDDLE}px;
  appearance: none;
  border: none;
  border-bottom: ${LINE.SHORT_HAND.NORMAL};
  border-radius: 0;
  outline: none;
  background: none;
  ${TYPOGRAPHY.MIXIN.BASE}
`;

export default ContactModule;
