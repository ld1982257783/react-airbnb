import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
    const { roomList = [], itemWidth } = props
    return (
        <RoomsWrapper>
            {
                roomList.slice(0, 8)?.map(item => {
                    return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} ></RoomItem>
                })
            }
        </RoomsWrapper>
    )
})

SectionRooms.prototype = {
    roomList: PropTypes.array,
    itemWidth: PropTypes.string
}

export default SectionRooms