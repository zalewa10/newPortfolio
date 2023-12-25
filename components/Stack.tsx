import React from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import { stack } from "@/constants";


const Stack = () => {
  return (
    <div className="bg-background py-10">
     
      <Marquee direction="left" speed={100}  pauseOnHover={true}  autoFill>
    
        {stack.map((item, key) => (
          <div key={key} className="mr-5" title={item.name}>
            <Image src={item.imgURL} alt={item.alt} width={30} height={30} />
          </div>
        ))}

      </Marquee>
      </div>

  );
};

export default Stack;
