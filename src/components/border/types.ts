import React from "react";

type MapString<TValue> = {
    [key: string]: TValue;
};
   
export const BorderType : MapString<string> = {
    rounded: 'rounded',
    lg: 'rounded-lg',
    md : 'rounded-md',
    full: 'rounded-full'
};


export interface BorderProps {
    type: string;
    children: React.ReactNode;
}