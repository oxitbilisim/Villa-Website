import * as React from 'react'
import {createContext, useEffect, useReducer, useState} from "react";
import axios from "axios";

export const LikedVillaContext = createContext();

export const LikedVillaContextProvider = (props) => {

    const initializeLikedVillaIds = () => {
        let likedVillaIdsRaw = localStorage.getItem('likedVillaIds');
        likedVillaIdsRaw = likedVillaIdsRaw == null || likedVillaIdsRaw == '' ? '[]' : likedVillaIdsRaw;
        return {
            likedVillaIds: JSON.parse(likedVillaIdsRaw)
        };
    }

    const likeVilla = (state,villaId) => {
        let tmpData = state.likedVillaIds;
        if (!tmpData.includes(villaId) && villaId!=null) {
            tmpData.push(villaId);
            localStorage.setItem('likedVillaIds', JSON.stringify(tmpData));
        }

        return tmpData;
    }

    const unlikeVilla = (state,villaId) => {
        let tmpData = state.likedVillaIds;
        if (state.likedVillaIds.includes(villaId)) {
            tmpData = state.likedVillaIds.filter(i => i != villaId);
            localStorage.setItem('likedVillaIds', JSON.stringify(tmpData));
        }

        return tmpData;
    }
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'LIKE':
                return {
                    likedVillaIds: likeVilla(state, action.payload),
                };
            case 'UNLIKE':
                return {
                    likedVillaIds: unlikeVilla(state, action.payload),
                };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, null, initializeLikedVillaIds);
    
    return (
        <LikedVillaContext.Provider
            value={[state, dispatch]}>
            {props.children}
        </LikedVillaContext.Provider>
    )
}
export default LikedVillaContextProvider