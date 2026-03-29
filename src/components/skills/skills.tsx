import { useEffect, useState } from 'react';
import type { SkillsProps } from './skills.types';

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {
        isLoggedIn ? (
          <div>
            <button>Start learning</button>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </>
  );
};
