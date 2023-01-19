import axios from "axios";
import { useEffect, useState } from "react";
import { debounce } from 'lodash'
axios.defaults.baseURL = 'https://db.ygoprodeck.com/api/v7'


const handler = (url, params, controller) => {
    return axios.get(url, {
        signal: controller.signal,
        params
    })
}

export function useGetCards(fname = undefined, cardset = undefined, page = 0) {
    const [cards, setCards] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        handler('/cardinfo.php', {
            fname,
            cardset,
            num: 20,
            offset: 20 * page
        }, controller).then(res => {
            setCards(res.data.data);
            setTotal(res.data.meta.total_rows)
        })
        return () => {
            controller.abort();
        }
    }, [fname, cardset, page])

    return { cards, total }
}