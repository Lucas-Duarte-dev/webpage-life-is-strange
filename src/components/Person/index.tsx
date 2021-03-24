import React from "react";
import { Card, PersonCard } from "./style";
import Data from "../../data/data.json";

const Person: React.FC = () => {
  return (
    <Card>
      <h1>Person</h1>
      <PersonCard>
        {Data.map((person, index) => (
          <div key={index}>
            <img src={person.image} alt={person.name} />

            <div className="title">
              <span>{person.name}</span>
              <p>{person.phrase}</p>
            </div>
          </div>
        ))}
      </PersonCard>
      <img src="/images/borboleta.png" alt="butterfly" />
    </Card>
  );
};
export default Person;
