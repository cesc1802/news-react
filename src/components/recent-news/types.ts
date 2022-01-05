import React from "react";

export interface RecentNewsProps {
    imgUrl: string;
    title: string;
    shortDesc: string;
    border?: boolean;
    children: React.ReactNode;
}