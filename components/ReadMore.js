import React, { useState } from "react";
  
const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="inline w-full">
      {isReadMore ? text.slice(0, 150) : text}
        { text.length < 150 
        ? null : 
        (
            <span onClick={toggleReadMore} className="cursor-pointer text-gray-400">
                {isReadMore ? " ...Read more" : " Show less"} 
            </span>
        ) }
    </p>
  );
};

export default ReadMore;