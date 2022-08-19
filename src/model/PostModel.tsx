import { Image } from "react-native";

export interface PostModel{
    id:string,
    title:string,
    location:string,
    description:string,
    dateFrom : string,
    dateTo:string,
    timeFrom:string,
    timeTo:string,
    imageUrl:Image
}