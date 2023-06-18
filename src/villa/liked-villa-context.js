import * as React from 'react'
import {createContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {queryParamToObject} from "./common-lib";
import {serverDateFormat} from "./Constants";
import moment from "moment";

export const LikedVillaContext = createContext();

export const LikedVillaContextProvider = (props) => {

    const initializeLikedVillaIds = () => {
        let likedVillaIdsRaw = localStorage.getItem('likedVillaIds');
        likedVillaIdsRaw = likedVillaIdsRaw == null || likedVillaIdsRaw == '' ? '[]' : likedVillaIdsRaw;
        return {
            likedVillaIds: JSON.parse(likedVillaIdsRaw)
        };
    }

    const likeVilla = (state, villaId) => {
        const dates = getDates();
        const startDate = dates[0];
        const endDate = dates[1];
        const likeObject = {
            villaId: villaId,
            startDate: dates[0],
            endDate: dates[1]
        }
        let tmpData = state.likedVillaIds;
        if (tmpData.filter(i => i.villaId == villaId && i.startDate == startDate && i.endDate == endDate).length == 0) {
            tmpData.push(likeObject);
            localStorage.setItem('likedVillaIds', JSON.stringify(tmpData));
        }

        return tmpData;
    }

    const unlikeVilla = (state, villaId, startDate, endDate) => {
        let tmpData = state.likedVillaIds.filter(i => !(i.villaId == villaId && i.startDate == startDate && i.endDate == endDate));
        localStorage.setItem('likedVillaIds', JSON.stringify(tmpData));

        return tmpData;
    }

    const getDates = () => {
        const qs = props.location.search;//localStorage.getItem('searchParams');
        const searchObject = queryParamToObject(qs);
        if (searchObject.startDate == null) {
            searchObject.startDate = moment().format(serverDateFormat)
        }
        if (searchObject.endDate == null) {
            searchObject.endDate = moment().add(1, 'days').format(serverDateFormat)
        }

        return [searchObject.startDate, searchObject.endDate];
    }

    const unlikeAllVilla = (state) => {
        let tmpData = [];
        localStorage.setItem('likedVillaIds', JSON.stringify(tmpData));
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
                    likedVillaIds: unlikeVilla(state, action.payload, action.startDate, action.endDate),
                };
            case 'UNLIKEALL':
                return {
                    likedVillaIds: unlikeAllVilla(state),
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