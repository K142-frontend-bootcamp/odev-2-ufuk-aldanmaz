import React, { useEffect, useState } from "react";
import { PeopleWrapper } from "./StyledComponents/ScPeople";


const PeopleCard = ({ item }) => {

    const [filmDetails, setFilmDetails] = useState([]);

    const deletePerson = (e) => {
        e.target.parentElement.parentElement.remove()
        // e.target.parentNode.parentNode.remove()
        // let parent = e.target.closest("td");
        // parent.parentElement.remove();
    }
    const getFilms = () => {
        setFilmDetails([]);
        item.films.forEach(film => {

            const filmId = film.charAt(film.length - 2);
            const filmDetail = JSON.parse(localStorage.getItem(`film-${filmId}`));
            setFilmDetails(oldArray => [...oldArray, filmDetail]);
        });
    }

    useEffect(() => {
        getFilms();

        // fetchFilms();
    }, [])

    // const [fetchedFilms, setFetchedFilms] = useState([]);

    // function fetchFilms() {

    //     setFetchedFilms([])
    //     console.log(`abc`, fetchedFilms);
    //     item.films.forEach(filmUrl => {

    //         axios.get(filmUrl).then((res) => {
    //             setFetchedFilms(old => [...old, res.data])
    //         })
    //     })
    // }


    return <tr className="people">
        <td className="people-table">{item.name}</td>
        <td className="people-table">{item.height}</td>
        <td className="people-table">{item.gender}</td>
        <td className="people-table-films">{
            filmDetails.map(film => {
                return film.title;
            }).join(', ')
        }</td>
        <td className="people-table-btn">
            <button onClick={deletePerson} className='remove-btn'>❌</button>
        </td>
    </tr>
}

export default PeopleCard;