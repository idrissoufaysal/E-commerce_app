import { create } from "zustand"
import { CardStore } from "../utils/types"


const useCardStore=create<CardStore>((set)=>({
    card:[],
    addToCard:()=>{},
    removeToCard:()=>{}
}))