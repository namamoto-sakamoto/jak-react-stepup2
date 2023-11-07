import styled from "styled-components";
import { SeachInput } from "../molecules/SeachInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image:
      "https://source.unsplash.com/brown-and-white-short-coated-dog-wearing-yellow-and-green-shirt-lying-on-orange-textile-ewfHXBcuFA0",
    email: "aaaaa@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <div>
      <SContainer>
        <h2>ユーザー 一覧</h2>
        <SeachInput />
        {users.map((user) => {
          <UserCard key={user.id} user={user} />;
        })}
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
  girid-gap: 20px;
`;
