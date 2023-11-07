import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SeachInput = () => {
  return (
    <SContainar>
      <Input placeholder="検索条件を入力" />
      <SButtonWrap>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrap>
    </SContainar>
  );
};

const SContainar = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrap = styled.div`
  padding-left: 8px;
`;
