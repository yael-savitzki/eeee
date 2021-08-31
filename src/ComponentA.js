import React, { useRef, useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
    setNameAction
} from './Redux/action'


import ReactTable from "react-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ComponentA.css'




function mapStateToProps(state) {
    return {
        details: state.details.details
    };
}

const mapDispatchToProps = (dispatch) => ({
    setNameAction: (name) => dispatch(setNameAction(name)),
})


export default connect(mapStateToProps, mapDispatchToProps)
    (
        function ComponentA(props) {
        const {
            details
        } = props;

        const t = details.detailsEmploye;
        const [characters, updateCharacters] = useState(t);

        function handleOnDragEnd(result) {
            debugger
            console.log(result)
            const items = Array.from(characters);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            updateCharacters(items);
        }

        return (
            <>


                <table>
           
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (

                                <tr className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map(({ id,
                                        sumHours,
                                        hours,
                                        handHour,
                                        anoutherHours,
                                        name,
                                        tv }, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <td>
                                                            <p>
                                                                {sumHours}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p>
                                                                {hours}
                                                            </p>
                                                        </td>  <td>
                                                            <p>
                                                                {handHour}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p>
                                                                {anoutherHours}
                                                            </p>
                                                        </td><td>
                                                            <p>
                                                                {name}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p>
                                                                {tv}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                </tr>
                            )}
                        </Droppable>
                    </DragDropContext>


                </table>
            </>

        )
    })
