import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import NotFound from './NotFound'
import PaginationComponent from './Pagination '
export const MoviesList = ({ movie ,getPage }) => {
     return (
        <div>
            <Row>

                {
                    movie.length >= 1 ? (movie.map((mov) => {
                        return (<CardMovie key={mov.id} mov={mov} />)
                    })) : <NotFound />
                }
                {movie.length >= 1 ? (<PaginationComponent getPage={getPage}  />) :null}
            </Row>
        </div>
    )
}
