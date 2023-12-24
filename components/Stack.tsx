import React from "react";
import Image from "next/image";
import { stack } from "@/constants";

const Stack = () => {
  return (
    <div className="bg-primary py-10">
      {/* Poniżej dodać przesuwanie się Stacku */}
      <div className="flex flex-row justify-between gap-6">
        {stack.map((item, key) => (
          <div className="flex flex-col items-center gap-1">
            <Image src={item.imgURL} alt={item.alt} width={30} height={30} />
            <p className="text-base text-muted-foreground text-center ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
